import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const JobVacancyPopup = () => {
  const [open, setOpen] = useState(false);

  // Sample job vacancy data
  const jobVacancies = [
    {
      title: "Frontend Developer",
      description: "Bachelor's degree in Computer Science, Engineering, or related field. At least 5 years of experience in frontend software engineering.",
    },
    {
      title: "Backend Developer",
      description: "Bachelor's degree in Computer Science, Engineering, or related field. At least 5 years of experience in frontend software engineering.",
    },
    {
      title: "RoR Developer",
      description: "Bachelor's degree in Computer Science, Engineering, or related field. At least 5 years of experience in frontend software engineering.",
    },
  ];

  // Handle opening the popup
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Handle closing the popup
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box onClick={handleClickOpen}>
        Read More
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{display:"flex",justifyContent:'space-between' }}>
        <DialogTitle>Job Vacancies</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <CancelIcon />
          </Button>
        </DialogActions>
        </Box>
        <DialogContent>
          {jobVacancies.map((job, index) => (
            <Box key={index}>
              <h3>{job.title}</h3>
              <DialogContentText>{job.description}</DialogContentText>
            </Box>
          ))}
        </DialogContent>
        
      </Dialog>
    </Box>
  );
};

export default JobVacancyPopup;
