// src/components/Contact.tsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
      e.target as HTMLFormElement,
      process.env.REACT_APP_EMAILJS_USER_ID || ''
    )
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
        setErrorMessage('Failed to send the message. Please try again later.');
      });
  };

  // service_5sd2zvu
  return (
    <div className="contact-section">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-row">
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Your phone number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">SUBMIT</button>
      </form>
      {isSubmitted && <p className="success-message">Your message has been sent successfully!</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Contact;
