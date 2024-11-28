import React from 'react';
import { Container, Grid, Typography, Button, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import carousel from "../../assets/bannerimg/carousel.jpg"
import ImageGrid from '../ImageGrid/ImageGrid';
import JobVacancyPopup from '../Vacancy/Vacancy';
import JobApplicationForm from '../JobApplicationForm/JobApplicationForm';

const InfoSection = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          {/* <Box
            component="img"
            src= {carousel}
            alt="Description"
            sx={{ width: '100%', height: 'auto', borderRadius: 1 }}
          /> */}
          <ImageGrid/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            We Help To Get The Best Job And Find A Talent
          </Typography>
          <Typography variant="body1" gutterBottom>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckIcon sx={{ color: 'green' }} />
              </ListItemIcon>
              <ListItemText primary="Tempor erat elitr rebum at clita" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon sx={{ color: 'green' }} />
              </ListItemIcon>
              <ListItemText primary="Aliqu diam amet diam et eos" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon sx={{ color: 'green' }} />
              </ListItemIcon>
              <ListItemText primary="Clita duo justo magna dolore erat amet" />
            </ListItem>
          </List>
          <Button variant="contained" color="success">
            <JobVacancyPopup/>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InfoSection;
