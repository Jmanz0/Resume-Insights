const express = require('express');
const router = express.Router();
const pdf = require('pdf-parse');
const uploadMiddleware = require('../middleware/uploadMiddleware');
const { insertResumeData, parseResume } = require('../utils/resumeUtils');

router.post('/upload-resume', uploadMiddleware, async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }

    try {
        const email = req.body.email;
        const firstName = req.body['first-name'];
        const lastName = req.body['last-name'];

        const fileBuffer = req.file.buffer;
        const data = await pdf(fileBuffer);

        const parsedData = await parseResume(data.text, email, firstName, lastName);
        
        await insertResumeData(parsedData);

        res.send('Resume processed successfully');
    } catch (error) {
        console.error('Error processing resume:', error);
        res.status(500).send('Error processing the resume');
    }
});

module.exports = router;
