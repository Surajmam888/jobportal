import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Banner.css";
import carousel2 from "../../assets/bannerimg/carousel-2.jpg";
import carousel1 from "../../assets/bannerimg/carousel-1.jpg";
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import CustomizedButtons from '../CustomComponent/CustomizedButtons';

const images = [carousel1, carousel2, carousel1, carousel2];

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev"></button>,
    nextArrow: <button className="slick-next"></button>
  };

  return (
    <Box>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="banner-slide">
            <img 
              src={image} 
              alt={`Banner ${index + 1}`} 
              className={isMobile ? 'mobile-image' : isTablet ? 'tablet-image' : 'desktop-image'} 
            />
            <div className="banner-content">
              <h1>Find The Best Startup Job That Fit You</h1>
              <p>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
              <div className="banner-buttons">
                <CustomizedButtons/>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Banner;
