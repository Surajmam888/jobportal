// src/components/About.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar, Box } from '@mui/material';
import testonomial1 from "../../assets/testonomial/testimonial-1.jpg";
import testonomial2 from "../../assets/testonomial/testimonial-2.jpg";
import testonomial3 from "../../assets/testonomial/testimonial-3.jpg";
import testonomial4 from "../../assets/testonomial/testimonial-4.jpg";
import Person from "../../assets/Person.png";

const About = () => {
  return (
    <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      {/* Company Mission Section */}
      <Typography variant="h3" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        We are dedicated to connecting the right talent with the right opportunities. Our platform is designed to streamline the job search process and make it easier for employers and job seekers alike.
      </Typography>

      {/* Our Values */}
      <Typography variant="h4" gutterBottom>
        Our Values
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Innovation
              </Typography>
              <Typography variant="body2">
                We continuously strive to create better solutions for the job market through cutting-edge technology and innovative thinking.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Integrity
              </Typography>
              <Typography variant="body2">
                We believe in transparency, trust, and building lasting relationships based on honesty and integrity.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Collaboration
              </Typography>
              <Typography variant="body2">
                Success comes from working together as a team, with employers, job seekers, and our community.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Team Section */}
      <Typography variant="h4" style={{ marginTop: '2rem' }} gutterBottom>
        Meet Our Team
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src={testonomial1} alt="Jane Doe" sx={{ width: 56, height: 56, mr: 2 }} />
              <Box sx={{ ml: 2 }}>
                <Typography variant="h6">Jane Doe</Typography>
                <Typography variant="body2">CEO</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src={testonomial2} alt="Jane Doe" sx={{ width: 56, height: 56, mr: 2 }} />
              <Box sx={{ ml: 2 }}>
                <Typography variant="h6">John Smith</Typography>
                <Typography variant="body2">CTO</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src={Person} alt="Jane Doe" sx={{ width: 56, height: 56, mr: 2 }} />
              <Box sx={{ ml: 2 }}>
                <Typography variant="h6">Surya Smith</Typography>
                <Typography variant="body2">GM</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src={testonomial3} alt="Jane Doe" sx={{ width: 56, height: 56, mr: 2 }} />
              <Box sx={{ ml: 2 }}>
                <Typography variant="h6">Flex Smith</Typography>
                <Typography variant="body2">MGM</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Company Statistics Section */}
      <Typography variant="h4" style={{ marginTop: '2rem' }} gutterBottom>
        Our Impact
      </Typography>
      <Typography variant="body1" paragraph>
        We have helped thousands of job seekers find meaningful work and hundreds of employers connect with top talent. Join us on our journey to redefine the job search experience!
      </Typography>
    </Container>
  );
};

export default About;