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
        <li><ScrollLink to="about" smooth={true} duration={500} onClick={onClose}>About</ScrollLink></li>
        <li><ScrollLink to="services" smooth={true} duration={500} onClick={onClose}>Services</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} duration={500} onClick={onClose}>Contact</ScrollLink></li>
      </ul>
    </div>
  );
};

export default MobileMenu;
