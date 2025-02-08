// Hero.tsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-scroll';
import MobileMenu from './MobileMenu';
import './Hero.css'

interface Slide {
  image: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}


const Hero: React.FC = () => {
  const slides: Slide[] = [
    {
      image: '/images/slideshow/slideshow1.webp',
      text: 'Affordable electrician near Denver, Colorado',
      buttonText: 'How can we help?',
      buttonLink: '/projects'
    },
    {
      image: '/images/slideshow/slideshow2.webp',
      text: 'Professional installations and maintenance',
      buttonText: 'Contact Us',
      buttonLink: '/contact'
    },
    {
      image: '/images/slideshow/slideshow3.webp',
      text: 'Quality electrical services guaranteed',
      buttonText: 'Our Services',
      buttonLink: '/services'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="hero-header">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="hero-logo"
          />
          <div>
            <ul className="navbar-links">
              <li><Link to="about" spy={true} smooth={true} duration={300} offset={-25} onClick={() => console.log('About clicked')}>About</Link></li>
              <li><Link to="services" spy={true} smooth={true} duration={300} offset={10} onClick={() => console.log('About clicked')}>Services</Link></li>
              <li><Link to="contact" spy={true} smooth={true} duration={300} onClick={() => console.log('About clicked')}>Contact</Link></li>
              <li>
                <a href="tel:3036596261" className="hero-call-button">
                  Call Now
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h1 className="hero-title">Steve & Sons Electric</h1>
        <button className="hamburger-btn" onClick={toggleMenu}>☰</button>
        <p contentEditable = "false" className="hero-subtext">Expert Electrical Services for your home and business</p>
      </div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={slide.text} className="slide-image" />
          </div>
        ))}
      </Slider>

      {isMenuOpen && <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />}
    </div>
  );
};

export default Hero;
