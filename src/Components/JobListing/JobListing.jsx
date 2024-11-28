import React from 'react';
import { Container, Grid, Typography, Button, Tabs, Tab, Card, CardContent, CardActions, Box, Avatar } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import JobApplicationForm from '../JobApplicationForm/JobApplicationForm';

// Function to add days to the current date
const addDays = (days) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toDateString();
};

const jobListings = [
  {
    title: 'Software Engineer',
    company: 'TechCom',
    location: 'New York, USA',
    type: 'Full Time',
    salary: '$123 - $456',
    deadline: addDays(7), // Set deadline to 7 days from now
    logo: '/path/to/techcom-logo.jpg', // replace with actual image path
  },
  {
    title: 'Marketing Manager',
    company: 'International Hearts',
    location: 'New York, USA',
    type: 'Full Time',
    salary: '$123 - $456',
    deadline: addDays(10), // Set deadline to 10 days from now
    logo: '/path/to/international-hearts-logo.jpg', // replace with actual image path
  },
  {
    title: 'Product Designer',
    company: 'DataXchange',
    location: 'New York, USA',
    type: 'Full Time',
    salary: '$123 - $456',
    deadline: addDays(5), // Set deadline to 5 days from now
    logo: '/path/to/dataxchange-logo.jpg', // replace with actual image path
  },
  {
    title: 'Creative Director',
    company: 'Fuzion Source',
    location: 'New York, USA',
    type: 'Full Time',
    salary: '$123 - $456',
    deadline: addDays(14), // Set deadline to 14 days from now
    logo: '/path/to/fuzion-source-logo.jpg', // replace with actual image path
  },
  {
    title: 'Wordpress Developer',
    company: 'BluePhlare',
    location: 'New York, USA',
    type: 'Full Time',
    salary: '$123 - $456',
    deadline: addDays(20), // Set deadline to 20 days from now
    logo: '/path/to/bluephlare-logo.jpg', // replace with actual image path
  },
];

const JobCard = ({ job }) => (
  <Card sx={{ mb: 2 }}>
    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src={job.logo} alt={job.company} sx={{ width: 56, height: 56, mr: 2 }} />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6">{job.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          <LocationOnIcon fontSize="small" /> {job.location} &bull; <AccessTimeIcon fontSize="small" /> {job.type} &bull; <MonetizationOnIcon fontSize="small" /> {job.salary}
        </Typography>
      </Box>
      <CardActions sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <Button startIcon={<FavoriteBorderIcon />} color="inherit" />
        <Button variant="contained" color="success">
          {/* Apply Now */}
          <JobApplicationForm/>
        </Button>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          <CalendarTodayIcon fontSize="small" /> Deadline: {job.deadline}
        </Typography>
      </CardActions>
    </CardContent>
  </Card>
);

const JobListing = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Job Listing
      </Typography>
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Featured" />
        <Tab label="Full Time" />
        <Tab label="Part Time" />
      </Tabs>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {jobListings.map((job, index) => (
          <Grid item xs={12} key={index}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button variant="contained" color="success" size="large">
          Browse More Jobs
        </Button>
      </Box>
    </Container>
  );
};

export default JobListing;
