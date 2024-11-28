import React from 'react';
import { Box, Container, Grid, Typography, Link, TextField, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import NewsletterSignup from '../Button/Button';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ bgcolor: 'black', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>Company</Typography>
            <Link href="#" color="inherit" underline="hover">About Us</Link><br />
            <Link href="#" color="inherit" underline="hover">Contact Us</Link><br />
            <Link href="#" color="inherit" underline="hover">Our Services</Link><br />
            <Link href="#" color="inherit" underline="hover">Privacy Policy</Link><br />
            <Link href="#" color="inherit" underline="hover">Terms & Condition</Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>Quick Links</Typography>
            <Link href="#" color="inherit" underline="hover">About Us</Link><br />
            <Link href="#" color="inherit" underline="hover">Contact Us</Link><br />
            <Link href="#" color="inherit" underline="hover">Our Services</Link><br />
            <Link href="#" color="inherit" underline="hover">Privacy Policy</Link><br />
            <Link href="#" color="inherit" underline="hover">Terms & Condition</Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>Contact</Typography>
            <Typography variant="body1">
              <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                📍 123 Street, New York, USA
              </Box>
              <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                📞 +012 345 67890
              </Box>
              <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                ✉️ info@example.com
              </Box>
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Link href="#" color="inherit" underline="hover">Twitter</Link>
              <Link href="#" color="inherit" underline="hover">Facebook</Link>
              <Link href="#" color="inherit" underline="hover">YouTube</Link>
              <Link href="#" color="inherit" underline="hover">LinkedIn</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>Newsletter</Typography>
            <Typography variant="body1">
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </Typography>
            <NewsletterSignup/>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2">
            © Your Site Name, All Right Reserved. Designed By HTML Codex
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Link href="#" color="inherit" underline="hover">Home</Link>
            <Link href="#" color="inherit" underline="hover">Cookies</Link>
            <Link href="#" color="inherit" underline="hover">Help</Link>
            <Link href="#" color="inherit" underline="hover">FAQs</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
