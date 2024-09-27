"use client";
import React, { useState } from "react";
import Faq from './faq';
import "./Contactus.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// Modal styling
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      handleOpen(); // Open success modal
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      console.error("Failed to submit form");
    }
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

      <Faq />

      <div className="address-section">
        <h2>Our Office</h2>
        <p> Metro Station, D-53, Kaushambi Central Park, near Kaushambi, Anand Vihar, Kaushambi, Ghaziabad, Uttar Pradesh 201010</p>
        <p>Email: info.droneyards@gmail.com</p>
        <p>Phone: +123-456-789</p>
      </div>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" sx={{color:"black", textAlign:"center"}} component="h2">
            Thank You!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 , color:"black"}}>
          We’ve received your message and will get back to you promptly.
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 2 , bgcolor:"black", color:"white"}}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ContactUs;
