import React from 'react';
import './ImageGrid.css';
import image1 from '../../assets/bannerimg/about-1.jpg'; // Replace with your image paths
import image2 from '../../assets/bannerimg/about-2.jpg'; // Replace with your image paths
import image3 from '../../assets/bannerimg/about-3.jpg'; // Replace with your image paths
import image4 from '../../assets/bannerimg/about-4.jpg'; // Replace with your image paths

const ImageGrid = () => {
  return (
    <div className="image-grid">
      <div className="image-container">
        <img src={image1} alt="Team 1" className="grid-image" />
      </div>
      <div className="image-container">
        <img src={image2} alt="Team 2" className="grid-image" />
      </div>
      <div className="image-container">
        <img src={image3} alt="Team 3" className="grid-image" />
      </div>
      <div className="image-container">
        <img src={image4} alt="Team 4" className="grid-image" />
      </div>
    </div>
  );
};

export default ImageGrid;
