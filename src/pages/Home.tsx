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
      title: 'Residential',
      description: (
        <ul>
        <li><strong>Wiring & rewiring:</strong> Safe and efficient electrical installations for new and old homes.</li>
        <li><strong>Troubleshooting & repairs:</strong> Quick diagnostics and fixes for electrical issues.</li>
        <li><strong>Panel upgrades:</strong> Modernize your home's electrical panel for increased safety and efficiency.</li>
        <li><strong>Lighting installation:</strong> Enhance your home’s ambiance with expertly installed indoor and outdoor lighting.</li>
        <li><strong>EV charger installation:</strong> Professional setup for at-home electric vehicle charging stations.</li>
        <li><strong>Surge protection:</strong> Protect your appliances and electronics from power surges.</li>
        <li><strong>Home automation:</strong> Upgrade your home with smart technology for lighting, security, and energy efficiency.</li>
        <li><strong>General Dealer:</strong> Providing top-quality electrical equipment and supplies for residential needs.</li>
        </ul>
      ),
    },
    {
      id: 2,
      image: 'images/card1.jpg',
      title: 'Commercial',
      description: (
        <ul>
        <li><strong>Tenant build-outs:</strong> Complete electrical setup for new or renovated commercial spaces.</li>
        <li><strong>Lighting design & installation:</strong> Custom lighting solutions to enhance functionality and aesthetics.</li>
        <li><strong>Power distribution:</strong> Reliable power management for offices, retail stores, and warehouses.</li>
        <li><strong>Equipment wiring:</strong> Safe and efficient wiring for commercial machinery and equipment.</li>
        <li><strong>Emergency repairs:</strong> Rapid response for unexpected electrical failures to minimize downtime.</li>
        <li><strong>Security systems:</strong> Installation of surveillance, alarms, and access control systems.</li>
        <li><strong>Network cabling:</strong> Professional setup of structured cabling for internet and communication networks.</li>
        </ul>
      ),
    },
  ];   // Add more cards as needed...

  return (
    <div className = "main-content">
    <Element name="about" className="section about-section">
        <About />
     </Element>
     <Element name="services" className="section services-section">
      <div className="cards-container">
        {cardsData.map(card => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
     </Element>
     <Element name="contact" className="section contact-section">
        <Contact />
     </Element>

    </div>
  );
};

export default HomePage;
