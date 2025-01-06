import React, { useState } from 'react';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Replace this with your Google Apps Script URL
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz7MPrqTm2cW7MxQLVn3hOrrbwaYrMghCsffw-ijD_qq5aoQFRf1FlFhTg6l40IjAFV/exec';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create FormData object from the form
      const form = e.target;
      const formDataToSend = new FormData(form);
      console.log([...formDataToSend.entries()]);

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        body: formDataToSend
      });

      // Since mode is 'no-cors', we won't get a normal response
      // Instead, we'll assume success if no error was thrown
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error!', error.message);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="contact-header">
        <Nav />
        <div className="home-icon-container">
          <Link to="/" className="home-link">
            <FontAwesomeIcon icon={faHouse} className="home-icon" />
          </Link>
        </div>
      </header>

      <div className="contact-container">
        <div className="contact-content">
          <h1 className="contact-title">
            <span className="title-main">CONTACT</span>
            <span className="title-sub">ME</span>
          </h1>
          
          <div className="mail-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>

          <div className="contact-message">
            <p>Thank you for reaching out!</p>
            <p>I would love to hear from you.</p>
          </div>
        </div>

        <form name="submit-to-google-sheet" onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="form-input"
          />
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="form-input"
          />
          
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message here"
            required
            rows="6"
            className="form-textarea"
          />
          
          <div className="submit-container">
            <button 
              type="submit" 
              className="submit-button"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </div>

          {submitted && (
            <div className="success-message">
              Submission successful. Thank you!
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Contact;