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
        <div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
    </div>
  );
};

export default Card;
