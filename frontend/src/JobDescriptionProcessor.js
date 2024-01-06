import React, {useState} from 'react';
import {Alert, Button, Box, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, TextField} from '@mui/material';

function JobDescriptionProcessor() {
  const [jobDescription, setJobDescription] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!jobDescription) {
      setError('Job description is required');
      return;
    }
  
    setError('');

    try {
      const response = await fetch('http://localhost:5001/api/process-job-description', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({jobDescription})
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Error processing job description');
        return;
      }

      const result = await response.json();
      setData(result.data);
      setError('');
    } catch (err) {
      console.error('Request failed:', err);
      setError('Error sending request');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Find Resumes
      </Typography>

      <TextField
        label="Job Description"
        multiline
        rows={4}
        fullWidth
        margin="normal"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Process
      </Button>

      {error && <Alert severity="error" sx={{mt: 2}}>{error}</Alert>}

      {data && (
      <Box sx={{mt: 3}}>
        <Typography variant="h6">Top Candidates:</Typography>
        <List>
          {data.map((applicant, index) => (
            <ListItem key={index}>
              <ListItemText primary={applicant.email} />
              <ListItemSecondaryAction>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {/* potentially add address to view resume */}}
                >
                  View Resume
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    )}
    </Box>
  );
}

export default JobDescriptionProcessor;
