import React from 'react';
import { Typography, Button } from '@mui/material';

const MyComponent = () => {
  return (
    <div>
      <Typography variant="h1">Custom Heading 1</Typography>
      <Typography variant="h2">Custom Heading 2</Typography>
      <Typography variant="body1">
        This is a paragraph with custom styling applied from the theme.
      </Typography>
      <Button variant="contained" color="primary">
        Custom Button
      </Button>
    </div>
  );
};

export default MyComponent;
