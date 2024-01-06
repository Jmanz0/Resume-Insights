const axios = require('axios');
const pool = require('../db.js'); 
const OPENAI_API_KEY = '';

async function getJobIdsFromTitles(jobTitles) {
    const jobIds = [];
    for (const title of jobTitles) {
        const res = await pool.query('SELECT job_id FROM Job WHERE job_title = $1', [title]);
        if (res.rows.length > 0) {
            jobIds.push(res.rows[0].job_id);
        }
    }
    return jobIds;
  }

  async function findTopResumes(criteria) {
    const { skills, education, experience, skills_weight, education_weight, experience_weight } = criteria;
  
    const jobIds = await getJobIdsFromTitles(experience);
    const jobIdsList = `{${jobIds.join(',')}}`;
  
    const queryText = `
        WITH skill_weights AS (
            SELECT email, COALESCE(SUM($1::numeric), 0) AS total_skill_weight
            FROM Demonstrates
            JOIN Skill ON Demonstrates.title = Skill.title
            WHERE Skill.title = ANY($2::text[])
            GROUP BY email
        ), 
        education_weights AS (
            SELECT email, COALESCE(SUM($3::numeric), 0) AS total_education_weight
            FROM Displays
            JOIN Education ON Displays.school = Education.school AND Displays.degree = Education.degree
            WHERE Education.degree = ANY($4::text[])
            GROUP BY email
        ),
        experience_weights AS (
            SELECT s.email, COALESCE(SUM($5::numeric), 0) AS total_experience_weight
            FROM Shows s
            JOIN Experience ex ON s.job_id = ex.job_id
            WHERE ex.job_id = ANY($6::int[])
            GROUP BY s.email
        )
        SELECT 
            r.email, 
            COALESCE(sw.total_skill_weight, 0) + COALESCE(ew.total_education_weight, 0) + COALESCE(xw.total_experience_weight, 0) AS score
        FROM 
            Resume_Has r
        LEFT JOIN skill_weights sw ON r.email = sw.email
        LEFT JOIN education_weights ew ON r.email = ew.email
        LEFT JOIN experience_weights xw ON r.email = xw.email
        ORDER BY 
            score DESC
        LIMIT 25;
    `;
  
    const values = [
        skills_weight, 
        `{${skills.join(',')}}`, 
        education_weight, 
        `{${education.join(',')}}`, 
        experience_weight, 
        jobIdsList
    ];
  
    try {
        const res = await pool.query(queryText, values);
        return res.rows;
    } catch (err) {
        console.error('Error executing findTopResumes query', err.stack);
        throw err;
    }
  }
  

async function processJobDescription(jobDescription) {
    const data = {
        model: "gpt-3.5-turbo-0613",
        messages: [
            { "role": "user", "content": jobDescription }
        ],
        functions: [
            {
                name: "analyze_job_description",
                description: "Analyze a job description and extract skills, education, experience, and their respective weights",
                parameters: {
                    type: "object",
                    properties: {
                        jobDescription: {
                            type: "string",
                            description: "The job description to analyze"
                        }
                    },
                    required: ["jobDescription"]
                },
                output: {
                    type: "object",
                    properties: {
                        skills: { type: "array", items: { type: "string" } },
                        education: { type: "array", items: { type: "string" } },
                        experience: { type: "array", items: { type: "string" } },
                        skills_weight: { type: "number" },
                        education_weight: { type: "number" },
                        experience_weight: { type: "number" }
                    }
                }
            }
        ]
    };

    const response = await axios.post('https://api.openai.com/v1/chat/completions', data, {
        headers: {
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
        }
    });

    const jsonResponse = response.data.choices[0].message.content;
    if (!validateResponse(jsonResponse)) {
        throw new Error('Invalid response structure from GPT-3');
    }

    return await findTopResumes(jsonResponse);
}

function validateResponse(jsonResponse) {
    const requiredFields = ['skills', 'education', 'experience', 'skills_weight', 'education_weight', 'experience_weight'];
    for (const field of requiredFields) {
        if (!jsonResponse.hasOwnProperty(field)) {
            return false;
        }
    }
    return true;
}

module.exports = { processJobDescription };
