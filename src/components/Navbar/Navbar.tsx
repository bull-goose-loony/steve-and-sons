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
          <li><Link to="about" spy={true} offset={50} smooth={true} duration={500}>About</Link></li>
          <li><Link to="services" spy={true} offset={50} smooth={true} duration={500}>Services</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="tel:1234567890" className="phone-btn">Call Us</a>
        <button className="hamburger-btn" onClick={toggleMenu}>☰</button>
      </div>
      {isMenuOpen && <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />}
    </nav>
  );
};

export default NavBar;
