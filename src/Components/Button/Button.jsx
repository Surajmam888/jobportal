import React from 'react';
import { Box, TextField, Button } from '@mui/material';

const NewsletterSignup = () => {
  return (
    <Box component="form" sx={{ mt: 2, display: 'flex', alignItems: 'center', bgcolor: 'primary.main',  border: '1px solid white', overflow: 'hidden' }}>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Your email"
        sx={{
          bgcolor: 'primary.dark',
          borderRadius: '4px 0 0 4px',
          flex: 1,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent',
            },
            '&:hover fieldset': {
              borderColor: 'transparent',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent',
            },
            '& input': {
              color: 'white',
            },
          },
        }}
      />
      <Button
        variant="contained"
        sx={{
          borderRadius: '0 4px 4px 0',
          bgcolor: '#00b894',
          color: 'white',
          '&:hover': {
            bgcolor: '#019874',
          },
          height: '100%',
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default NewsletterSignup;
