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
      image: 'images/card1.webp',
      overlay_text: '',
      title: 'Panel Work',
      description: 'TODO: this is an example, Let me know what you want the "cards" below to advertise.'
    },
    {
      id: 2,
      image: 'images/card2.webp',
      overlay_text: '',
      title: 'Card Title 2',
      description: 'Description for card 2...'
    },
    {
      id: 3,
      image: 'images/card2.webp',
      overlay_text: '',
      title: 'Card Title 3',
      description: 'Description for card 3...'
    },
    {
      id: 4,
      image: 'images/card2.webp',
      overlay_text: '',
      title: 'Card Title 4',
      description: 'Description for card 4...'
    },
    {
      id: 5,
      image: 'images/card2.webp',
      overlay_text: '',
      title: 'Card Title 5',
      description: 'Description for card 5...'
    },
    {
      id: 6,
      image: 'images/card2.webp',
      overlay_text: '',
      title: 'Card Title 6',
      description: 'Description for card 6...'
    },
    // Add more cards as needed...
  ];

  return (
    <div className = "main-content">
     <Hero />
    <Element name="about" className="section about-section">
    <div className='about-section'>
      <h2>About Us</h2>
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
