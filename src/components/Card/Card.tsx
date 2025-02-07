import React from 'react';
import './Card.css'

interface CardProps {
  image: string;
  title: string;
  description: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="card">
        <div className = "card-image-container">
          <img src={image} alt={title} className="card-image" />
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
    </div>
  );
};

export default Card;
