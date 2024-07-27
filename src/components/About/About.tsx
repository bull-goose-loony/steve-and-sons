// About.tsx
import React from 'react';
import './About.css'

const About: React.FC = () => {
  return (
      <div className="about-image-container">
        <img src='images/steve-and-josh.webp' alt="steve-and-josh" className="about-image"/>
          <div className="about-overlay">
            <h2 className="about-overlay-heading">Family Business</h2>
            <p> TODO: Write a paragraph that describes the family business </p>
          </div>
        </div>
    );
};

export default About;
