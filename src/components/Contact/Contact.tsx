// src/components/Contact.tsx
import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div>

      <form className="contact-form">
        <div className="contact-form-row">
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Your phone number</label>
            <input type="text" id="phone" name="phone" placeholder="Your phone number" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" name="email" placeholder="Your email" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Your message</label>
          <textarea id="message" name="message" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="submit-button">SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;
