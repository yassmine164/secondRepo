import React from 'react';
import './aboutus.css';

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-left">
        <img 
          src="/images/slide1.jpeg" 
          alt="About Us" 
          className="aboutus-photo" 
        />
      </div>
      <div className="aboutus-right">
        <h1>About NextLevel Consulting</h1>
        <p>
          NextLevel Consulting is a pioneering creative agency located in Mourouj, Tunisia.
          Founded in 2022, we have been dedicated to transforming brands through innovative strategies
          and cutting-edge technology.
        </p>
        <p>
          Our expertise spans photography, videography, UI/UX design, digital marketing, and web/app development.
          We combine creativity with technology to push boundaries and help businesses reach their next level.
        </p>
        <p>
          Based in the vibrant region of Mourouj, our team draws inspiration from our surroundings to deliver
          unique and globally resonant solutions. Join us as we continue to set new standards in the creative industry.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
