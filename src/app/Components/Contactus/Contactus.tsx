"use client"
import React, { useState } from "react";
import Faq from './faq'
import "./Contactus.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };



  return (
    <div className="contact-container">
      <div className="form-section">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

   


      <Faq/>

      <div className="address-section">
        <h2>Our Office</h2>
        <p> Metro Station, D-53, Kaushambi Central Park, near Kaushambi, Anand Vihar, Kaushambi, Ghaziabad, Uttar Pradesh 201010</p>
        <p>Email: info.droneyards@gmail.com</p>
        <p>Phone: +123-456-789</p>
      </div>
    </div>
  );
};

export default ContactUs;
