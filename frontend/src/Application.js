import React, {useState} from 'react';
import {TextField, Button, Box, Grid, Typography, Container, Alert} from '@mui/material';

function Application() {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileName, setPdfFileName] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function submitApplication() {
    if (!email || !firstName || !lastName || !pdfFile) {
      setError('All fields are required.');
      return;
    }

    setError('');
    const formData = new FormData();
    formData.append('pdf', pdfFile);
    formData.append('email', email);
    formData.append('first-name', firstName);
    formData.append('last-name', lastName);

    try {
      const response = await fetch("http://localhost:5001/api/apply/upload-resume", {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit application.');
      }

      console.log('Application submitted successfully');
      setIsSubmitted(true);
    } catch (error) {
      setError('Failed to submit application.');
      console.error(error);
    }
  }

  const handlePdfChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPdfFile(file);
      setPdfFileName(file.name);
    }
  };

  if (isSubmitted) {
    return (
      <Container maxWidth="sm" style={{ marginTop: '20px', textAlign: 'center' }}>
        <Typography variant="h4">Thanks for applying!</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      {error && (
        <Alert severity="error" style={{ marginBottom: '20px' }}>
          {error}
        </Alert>
      )}
      <Typography variant="h4" style={{ marginBottom: '20px', textAlign: 'center' }}>
        Application Form
      </Typography>

      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              component="label"
              fullWidth
              style={pdfFileName ? {
                backgroundColor: '#B0BEC5',
                color: 'white',
                textAlign: 'left',
              } : { textAlign: 'left' }}
            >
              Upload PDF
              <input
                type="file"
                accept=".pdf"
                hidden
                onChange={handlePdfChange}
              />
            </Button>
            {pdfFileName && (
              <Typography variant="body2" style={{ marginTop: '8px' }}>
                File selected: {pdfFileName}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={submitApplication}
              fullWidth
            >
              Submit Application
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Application;
