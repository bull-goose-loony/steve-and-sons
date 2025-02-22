// About.tsx
import React from 'react';
import './About.css'

const About: React.FC = () => {
  // React Read More/Read Less Function with TypeScript
  const toggleText = (e: React.MouseEvent<HTMLButtonElement>) => {
    const fullText = e.currentTarget.previousElementSibling as HTMLElement | null; // Ensure correct type
    if (fullText) {
      if (fullText.style.display === 'none' || fullText.style.display === '') {
        fullText.style.display = 'inline';
        e.currentTarget.textContent = 'Read Less';
      } else {
        fullText.style.display = 'none';
        e.currentTarget.textContent = 'Read More';
      }
    }
  };
  return (

    <div className="about-section-container">
      <div className="wrapper">
        <div className="content-container">
          <h1>About us</h1>
          <p>Steve and Sons Electric is a trusted family-owned electrical services company, providing expert solutions for residential and commercial properties.
          <span className="full-text">With over 20 years of experience, Steve, a master electrician, founded the business and now operates it alongside his two sons. Together, they bring a combined wealth of knowledge and hands-on expertise to every project, ensuring the highest quality service and customer satisfaction. From simple repairs to complex electrical installations, Steve and Sons Electric has earned a reputation for reliability, professionalism, and precision. We remain committed to offering dependable and affordable electrical solutions that meet the needs of our valued customers, always with a focus on safety and efficiency.</span></p>
          <button className="read-more-btn" onClick={(e) => toggleText(e)}>Read More</button>
        </div>
        <div className="image-container">
          <img src='images/steve-and-josh.webp' alt="steve-and-josh" className="image" />
        </div>
      </div>
    </div>
    );
};

export default About;
