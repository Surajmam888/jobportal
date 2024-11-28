import React from 'react';
import { Container, Typography, Box, Avatar, Paper } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Person from "../../assets/Person.png";
// import carousel from "../../assets/bannerimg/carousel.jpg"
import testonomial1 from "../../assets/testonomial/testimonial-1.jpg";
import testonomial2 from "../../assets/testonomial/testimonial-2.jpg";
import testonomial3 from "../../assets/testonomial/testimonial-3.jpg";
import testonomial4 from "../../assets/testonomial/testimonial-4.jpg";

const testimonials = [
  {
    text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
    image: testonomial1,
    name: 'Client Name',
    profession: 'Developer'
  },
  {
    text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
    image: testonomial2,
    name: 'Client Name',
    profession: 'Tester'
  },
  {
    text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
    image: testonomial3,
    name: 'Client Name',
    profession: 'Front End Developer'
  },
  {
    text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
    image: testonomial4,
    name: 'Client Name',
    profession: 'Back End Developer'
  },
];

const TestimonialItem = ({ text, image, name, profession }) => (
  <Paper elevation={3} sx={{ margin:2,padding: 2, backgroundColor: '#fff', borderRadius: 2, height: "auto" }}>
    <Typography variant="body1" sx={{ marginBottom: 2 }}>
      &quot;{text}&quot;
    </Typography>
    <Box display="flex" alignItems="center">
      <Avatar src={image} sx={{ width: 50, height: 50 }} />
      <Box sx={{ paddingLeft: 2 }}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{profession}</Typography>
      </Box>
    </Box>
  </Paper>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Container sx={{ padding: '20px 0 50px 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Clients Say!!!
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} sx={{ padding: '0 10px' }}>
            <TestimonialItem {...testimonial} />
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default Testimonials;
