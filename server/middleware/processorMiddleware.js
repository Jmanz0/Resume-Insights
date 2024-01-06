function validateJobDescription(req, res, next) {
    const jobDescription = req.body.jobDescription;

    if (!jobDescription) {
        return res.status(400).json({ message: 'Job description is required' });
    }

    if (jobDescription.length > 1000) {
        return res.status(400).json({ message: 'Job description must be less than 1000 characters' });
    }

    next();
}

module.exports = { validateJobDescription };
