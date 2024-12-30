// src/components/MobileMenu.tsx
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <ul className="mobile-menu-links">
        <li><ScrollLink to="about" spy={true} smooth={true} duration={300} offset={-100} onClick={onClose}>About</ScrollLink></li>
        <li><ScrollLink to="services" spy={true} smooth={true} duration={300} offset={-100} onClick={onClose}>Services</ScrollLink></li>
        <li><ScrollLink to="contact" spy={true} smooth={true} duration={300} offset={-100} onClick={onClose}>Contact</ScrollLink></li>
      </ul>
    </div>
  );
};

export default MobileMenu;
