import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SchoolIcon from '@mui/icons-material/School';
import BrushIcon from '@mui/icons-material/Brush';


const categories = [
  { title: 'Marketing', icon: <EmailIcon />, vacancies: 123 },
  { title: 'Customer Service', icon: <HeadsetMicIcon />, vacancies: 123 },
  { title: 'Human Resource', icon: <PersonIcon />, vacancies: 123 },
  { title: 'Project Management', icon: <ListIcon />, vacancies: 123 },
  { title: 'Business Development', icon: <TrendingUpIcon />, vacancies: 123 },
  { title: 'Sales & Communication', icon: <HandshakeIcon />, vacancies: 123 },
  { title: 'Teaching & Education', icon: <SchoolIcon />, vacancies: 123 },
  { title: 'Design & Creative', icon: <BrushIcon />, vacancies: 123 },
];

const CategoryCard = ({ title, icon, vacancies }) => (
  <Card sx={{ minWidth: 150, textAlign: 'center' }}>
    <CardContent>
      {icon}
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle1">{vacancies} Vacancy</Typography>
    </CardContent>
  </Card>
);

const ExploreByCategory = () => (
  <Container sx={{padding:"50px"}}>
    <Typography variant="h4" gutterBottom align="center">
      Explore By Category
    </Typography>
    <Grid container spacing={3}>
      {categories.map((category) => (
        <Grid item xs={12} sm={6} md={3} key={category.title}>
          <CategoryCard {...category} />
        </Grid>
      ))}
    </Grid>
  </Container> 
);

export default ExploreByCategory;
