import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const SearchJobButton = styled(Button)({
  textTransform: 'none',
  fontSize: 16,
  padding: '10px 20px',
  borderRadius: 0,
  backgroundColor: '#28a745', // Green background
  color: '#fff',
  '&:hover': {
    backgroundColor: '#218838',
  },
  '&:active': {
    backgroundColor: '#1e7e34',
  },
});

const FindTalentButton = styled(Button)({
  textTransform: 'none',
  fontSize: 16,
  padding: '10px 20px',
  borderRadius: 0,
  backgroundColor: '#007bff', // Blue background
  color: '#fff',
  '&:hover': {
    backgroundColor: '#0069d9',
  },
  '&:active': {
    backgroundColor: '#0056b3',
  },
});

export default function CustomizedButtons() {
  return (
    <Stack spacing={2} direction="row">
      <SearchJobButton variant="contained">Search A Job</SearchJobButton>
      <FindTalentButton variant="contained">Find A Talent</FindTalentButton>
    </Stack>
  );
}
