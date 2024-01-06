const express = require('express');
const router = express.Router();
const { validateJobDescription } = require('../middleware/processorMiddleware');
const { processJobDescription } = require('../utils/processorUtils');

router.post('/', validateJobDescription, async (req, res) => {
    try {
        const topResumes = await processJobDescription(req.body.jobDescription);
        res.json({ data: topResumes });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Error processing job description' });
    }
});

module.exports = router;
