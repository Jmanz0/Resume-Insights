const pool = require('../db.js');
const axios = require('axios');

// Dynamically create sql query within a single transaction
async function insertResumeData(parsedData) {
    const client = await pool.connect();

    try {
        await client.query('BEGIN');
        for (const companyName of parsedData.companies) {
            await client.query('INSERT INTO Company(cname) VALUES($1)', [companyName]);
        }

        for (const resume of parsedData.resumes) {
            await client.query('INSERT INTO Resume_Has(email, address) VALUES($1, $2)', [resume.email, resume.address]);
        }

        for (const skill of parsedData.skills) {
            await client.query('INSERT INTO Skill(title) VALUES($1)', [skill]);
        }

        for (const award of parsedData.awards) {
            await client.query('INSERT INTO Award(title) VALUES($1)', [award]);
        }

        for (const edu of parsedData.educations) {
            await client.query('INSERT INTO Education(school, degree) VALUES($1, $2)', [edu.school, edu.degree]);
        }

        for (const job of parsedData.jobs) {
            await client.query('INSERT INTO Job(job_id, job_title, cname) VALUES($1, $2, $3)', [job.job_id, job.job_title, job.cname]);
        }

        for (const jobPosting of parsedData.jobPostings) {
            await client.query('INSERT INTO JobPosting(job_id, post_date) VALUES($1, $2)', [jobPosting.job_id, jobPosting.post_date]);
        }

        for (const schoolAddress of parsedData.schoolAddresses) {
            await client.query('INSERT INTO SchoolAddress_for(school, address) VALUES($1, $2)', [schoolAddress.school, schoolAddress.address]);
        }

        for (const display of parsedData.displays) {
            await client.query('INSERT INTO Displays(school, degree, grad_date, email, honours) VALUES($1, $2, $3, $4, $5)', [display.school, display.degree, display.grad_date, display.email, display.honours]);
        }

        for (const applicant of parsedData.applicants) {
            await client.query('INSERT INTO Applicant(name, email) VALUES($1, $2)', [applicant.name, applicant.email]);
        }

        for (const experience of parsedData.experiences) {
            await client.query('INSERT INTO Experience(job_id, end_date, start_date) VALUES($1, $2, $3)', [experience.job_id, experience.end_date, experience.start_date]);
        }

        for (const show of parsedData.shows) {
            await client.query('INSERT INTO Shows(email, job_id, description) VALUES($1, $2, $3)', [show.email, show.job_id, show.description]);
        }

        for (const apply of parsedData.applies) {
            await client.query('INSERT INTO Applies(name, job_id) VALUES($1, $2)', [apply.name, apply.job_id]);
        }

        for (const contain of parsedData.contains) {
            await client.query('INSERT INTO Contains(title, job_id) VALUES($1, $2)', [contain.title, contain.job_id]);
        }

        for (const exhibit of parsedData.exhibits) {
            await client.query('INSERT INTO Exhibits(email, title, description, year) VALUES($1, $2, $3, $4)', [exhibit.email, exhibit.title, exhibit.description, exhibit.year]);
        }

        for (const demonstrate of parsedData.demonstrates) {
            await client.query('INSERT INTO Demonstrates(title, email) VALUES($1, $2)', [demonstrate.title, demonstrate.email]);
        }

        await client.query('COMMIT');
    } catch (err) {
        await client.query('ROLLBACK');
        console.error('Error during insert transaction', err.stack);
        throw err;
    } finally {
        client.release();
    }
}

async function parseResume(resumeText) {
    try {
        const data = {
            model: "gpt-3.5-turbo-0613",
            messages: [
                { "role": "user", "content": resumeText }
            ],
            functions: [
                {
                    name: "parse_resume",
                    description: "Extract structured data from the resume",
                    parameters: {
                        type: "object",
                        properties: {
                            resumeText: {
                                type: "string",
                                description: "The text of the resume"
                            }
                        },
                        required: ["resumeText"]
                    },
                    output: {
                        type: "object",
                        properties: {
                            companies: { type: "array", items: { type: "string" } },
                            resumes: { type: "array", items: { type: "object" } }, // email and address
                            skills: { type: "array", items: { type: "string" } },
                            awards: { type: "array", items: { type: "string" } },
                            educations: { type: "array", items: { type: "object" } }, // school and degree
                            jobs: { type: "array", items: { type: "object" } }, // job_id, job_title, cname
                            jobPostings: { type: "array", items: { type: "object" } }, // job_id, post_date
                            schoolAddresses: { type: "array", items: { type: "object" } }, // school, address
                            displays: { type: "array", items: { type: "object" } }, // school, degree, grad_date, email, honours
                            applicants: { type: "array", items: { type: "object" } }, // name, email
                            experiences: { type: "array", items: { type: "object" } }, // job_id, end_date, start_date
                            shows: { type: "array", items: { type: "object" } }, // email, job_id, description
                            applies: { type: "array", items: { type: "object" } }, // name, job_id
                            contains: { type: "array", items: { type: "object" } }, // title, job_id
                            exhibits: { type: "array", items: { type: "object" } }, // email, title, description, year
                            demonstrates: { type: "array", items: { type: "object" } } // title, email
                        }
                    }
                }
            ]
        };

        const response = await axios.post('https://api.openai.com/v1/chat/completions', data, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error parsing resume with GPT-3:', error);
        throw error;
    }
}

modules.export = { insertResumeData, parseResume };