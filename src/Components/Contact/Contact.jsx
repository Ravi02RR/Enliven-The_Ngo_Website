import React, { useState } from "react";
import axios from 'axios';
import "./Contact.css";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/contact', contactInfo);
      alert('Message sent successfully!');
      setContactInfo({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      alert('Failed to send the message. Please try again.');
    }
  }

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-text">
          <h1 className="contact-header">Contact Us</h1>
          <h1 className="contact-subheader">YOUR IDEA <span className="highlight">IS OUR</span><br /> SOLUTION</h1>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input type="text" name="fullName" value={contactInfo.fullName} onChange={handleChange} />

          <label>Email</label>
          <input type="email" name="email" value={contactInfo.email} onChange={handleChange} />

          <label>Phone</label>
          <input type="number" name="phone" value={contactInfo.phone} onChange={handleChange} />

          <label>Message</label>
          <input type="text" name="message" value={contactInfo.message} onChange={handleChange} />

          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
