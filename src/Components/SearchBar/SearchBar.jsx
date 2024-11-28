import React, { useState } from 'react';
import { Container, TextField, Select, MenuItem, Button, Box, FormControl, InputLabel, useMediaQuery } from '@mui/material';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Search triggered with:', { keyword, category, location });
  };

  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#2ecc71',
          p: 2,
          borderRadius: 1,
          width: '100%',
          gap: 1,
        }}
      >
        <TextField
          label="Keyword"
          variant="outlined"
          size="small"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          sx={{ bgcolor: 'white', borderRadius: 1, flexGrow: 1, mb: isMobile ? 1 : 0 }}
        />
        <FormControl variant="outlined" size="small" sx={{ minWidth: isMobile ? '100%' : 120, bgcolor: 'white', borderRadius: 1, mb: isMobile ? 1 : 0 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Category"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="tech">Tech</MenuItem>
            <MenuItem value="marketing">Marketing</MenuItem>
            <MenuItem value="design">Design</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" size="small" sx={{ minWidth: isMobile ? '100%' : 120, bgcolor: 'white', borderRadius: 1, mb: isMobile ? 1 : 0 }}>
          <InputLabel>Location</InputLabel>
          <Select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            label="Location"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="newyork">New York</MenuItem>
            <MenuItem value="sanfrancisco">San Francisco</MenuItem>
            <MenuItem value="losangeles">Los Angeles</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleSearch} sx={{ height: '40px', width: isMobile ? '100%' : 'auto' }}>
          Search
        </Button>
      </Box>
    </Container>
  );
};

export default SearchBar;
