// src/components/NavBar.tsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import MobileMenu from './MobileMenu';
import './Navbar.css';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="images/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <ul className="navbar-links">
          <li><Link to="about" spy={true} smooth={true} duration={300} offset={-100} onClick={() => console.log('About clicked')}>About</Link></li>
          <li><Link to="services" spy={true} smooth={true} duration={300} offset={-100} onClick={() => console.log('About clicked')}>Services</Link></li>
          <li><Link to="contact" spy={true} smooth={true} duration={300} onClick={() => console.log('About clicked')}>Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="tel:1234567890" className="hero-call-button">Call Us</a>
        <button className="hamburger-btn" onClick={toggleMenu}>☰</button>
      </div>
      {isMenuOpen && <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />}
    </nav>
  );
};

export default NavBar;

