// Hero.tsx
import React from 'react';
import Slider from 'react-slick';
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

  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="hero-header">
          <img
            src="/images/logo.webp"
            alt="Logo"
            className="hero-logo"
          />
          <h1 className="hero-title">Steve & Sons Electric</h1>
          <a href="tel:3036596261" className="hero-call-button">
            Call Now
          </a>
        </div>
        <p className="hero-subtext">Expert Electrical Services for your home and business</p>
      </div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={slide.text} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
