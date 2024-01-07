# Resume-Insights

## Tech Stack
**Backend:** Express.js (Node.js)
**Frontend:** React
**Programming Language:** JavaScript
**Database:** PostgreSQL

## Overview
This application is made to optimize a job application system. It effectively reduces the time and effort required for applicants to submit their resumes and for recruiters to identify suitable candidates. The application leverages a custom-designed relational database model to efficiently store and retrieve resumes, ensuring quick access to relevant applicant information.

The selection of a relational database for this application is driven by its capability to manage structured data, support complex relationships, and execute complex queries. While this approach offers significant advantages in data handling and query efficiency, it does introduce a higher level of complexity in development. However, the trade-off is mitigated by the relational database's flexibility in extending queries to aggregate other perspectives of the data, enhancing the application's analytical capabilities.

## Application Process
<img width="1235" alt="Screenshot 2024-01-06 at 12 22 11 PM" src="https://github.com/Jmanz0/Resume-Insights/assets/89817570/6e5b2590-a24d-466c-8949-f8ecb04e0f85">

### Resume Parsing and Submission: 
Applicants can upload their resumes in PDF format. The application uses a JavaScript library to parse the PDFs and a machine learning API to extract key information from the resumes. This process converts unstructured resume data into a structured JSON format, which is then mapped to specific tables in the PostgreSQL database.

### Efficient Data Handling: 
This method employs extracted data to dynamically generate SQL queries in a single transaction, ensuring data integrity and consistency with the added advantage of enabling potential rollbacks.

## Retrieving relevant resumes
<img width="1665" alt="Screenshot 2024-01-06 at 12 54 14 PM" src="https://github.com/Jmanz0/Resume-Insights/assets/89817570/34c0eb85-719d-4712-bf2d-76c09f7e44bc">

To find the key details of the job description, it utilizes a machine learning API to structure the data into a consistent JSON response that can be easily understood. This integration enables the application to analyze job descriptions and extract structured data comprising key criteria such as skills, education, and experience. It also assigns a dynamic weighting to each of these fields that sums to 100 allowing for easy comparison between resumes. Post-analysis, the application queries a PostgreSQL database, leveraging an efficient SQL query mechanism. This mechanism is designed to aggregate and correlate resume data with the job description analysis, identifying candidates whose profiles best match the specified criteria. The query is constructed to weigh various aspects of a candidate's profile, such as their skills, educational background, and professional experience.

## ER Diagram
<img width="750" alt="Screenshot 2024-01-05 at 5 57 13 PM" src="https://github.com/Jmanz0/Resume-Insights/assets/89817570/2f24b668-d39e-4de8-a40f-a26383ac29bc">

The relational database model is designed to store detailed information from resumes. This includes applicant skills, education, experience, and other relevant details, structured in a way that optimizes both storage and query performance.

## APIs:
/apply/upload-resume/
Upload resume to be stored within the complex relational schema

/process-job-description/
Find most relevant resumes from a job description

## In The Future
- More fine-tuned integration with a machine learning model/API. Matching the complexity of a relational database schema to a machine learning response - can lead to many malformed values.
- Leveraging the relational model for recruiters to look at different aspects of resumes
- Storing the raw PDF resume in an object store
- Security features


