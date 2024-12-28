// Home.tsx
import React from 'react';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card/Card';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import { Element } from 'react-scroll';
import './Home.css';


const HomePage: React.FC = () => {
  // Sample data for cards, you can replace this with actual data
  const cardsData = [
    {
      id: 1,
      image: 'images/card1.jpg',
      overlay_text: 'Residential Services',
      title: 'Residential',
      description: (
        <ul>
          <li>Wiring & rewiring</li>
          <li>Troubleshooting & repairs</li>
          <li>Panel upgrades</li>
          <li>Lighting installation</li>
          <li>EV charger installation</li>
          <li>Surge protection</li>
          <li>Home automation</li>
        </ul>
      ),
    },
    {
      id: 2,
      image: 'images/card1.jpg',
      overlay_text: 'Commercial Services',
      title: 'Commercial',
      description: (
        <ul>
          <li>Tenant build-outs</li>
          <li>Lighting design & installation</li>
          <li>Power distribution</li>
          <li>Equipment wiring</li>
          <li>Emergency repairs</li>
          <li>Security systems</li>
          <li>Network cabling</li>
        </ul>
      ),
    },
    {
      id: 3,
      image: 'images/card1.jpg',
      overlay_text: 'Industrial Services',
      title: 'Industrial',
      description: (
        <ul>
          <li>High-voltage work</li>
          <li>Motor controls</li>
          <li>PLC installations</li>
          <li>Preventive maintenance</li>
        </ul>
      ),
    },
    {
      id: 4,
      image: 'images/card1.jpg',
      overlay_text: 'Specialty Services',
      title: 'Specialty',
      description: (
        <ul>
          <li>Pool & spa wiring</li>
          <li>Hot tub installations</li>
          <li>Renewable energy systems</li>
          <li>Custom projects</li>
        </ul>
      ),
    },
  ];   // Add more cards as needed...

  return (
    <div className = "main-content">
     {/* <Hero /> */}
    <Element name="about" className="section about-section">
    <div className='about-section'>
      <div className = "about-container">
        <About />
      </div>
      </div>
     </Element>
     <Element name="services" className="section services-section">
      <h2>Our Services</h2>
      <div className="cards-container">
        {cardsData.map(card => (
          <Card
            key={card.id}
            image={card.image}
            overlay_text={card.overlay_text}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
     </Element>
     <Element name="contact" className="section contact-section">
      <h2>Get in touch</h2>
      <p>Let's talk about your project</p>
        <Contact />
     </Element>

    </div>
  );
};

export default HomePage;
