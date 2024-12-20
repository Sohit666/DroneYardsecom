"use client";
import React, { useState } from "react";
import Faq from './faq';
import "./Contactus.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';

// Modal styling
const style = {
  position: 'absolute',
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
    countryCode: "+91",
    phone: "",
    state: "",
    message: "",
  });

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Make the API call
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact`, formData);

      // Log response for debugging
      console.log(response.data);

      // Handle success (open modal)
      handleOpen();

      // Optionally, reset form data
      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        state: "",
        message: "",
      });
    } catch (error) {
      // Handle error
      console.error(error);
      setError("Failed to submit. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="form-section">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />

          {/* Email */}
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />

          {/* Phone Number with Country Code */}
          <div className="form-group">
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="countryCode-label">Country Code</InputLabel>
              <Select
                labelId="countryCode-label"
                id="countryCode"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleSelectChange}
              >
                <MenuItem value="+1">+1 (USA)</MenuItem>
<MenuItem value="+91">+91 (India)</MenuItem>
<MenuItem value="+44">+44 (UK)</MenuItem>
<MenuItem value="+81">+81 (Japan)</MenuItem>
<MenuItem value="+49">+49 (Germany)</MenuItem>
<MenuItem value="+33">+33 (France)</MenuItem>
<MenuItem value="+39">+39 (Italy)</MenuItem>
<MenuItem value="+61">+61 (Australia)</MenuItem>
<MenuItem value="+86">+86 (China)</MenuItem>
<MenuItem value="+55">+55 (Brazil)</MenuItem>
<MenuItem value="+27">+27 (South Africa)</MenuItem>
<MenuItem value="+82">+82 (South Korea)</MenuItem>
<MenuItem value="+34">+34 (Spain)</MenuItem>
<MenuItem value="+62">+62 (Indonesia)</MenuItem>
<MenuItem value="+60">+60 (Malaysia)</MenuItem>
<MenuItem value="+41">+41 (Switzerland)</MenuItem>
<MenuItem value="+65">+65 (Singapore)</MenuItem>
<MenuItem value="+1-345">+1-345 (Cayman Islands)</MenuItem>
<MenuItem value="+965">+965 (Kuwait)</MenuItem>
<MenuItem value="+974">+974 (Qatar)</MenuItem>

                {/* Add more country codes as needed */}
              </Select>
            </FormControl>
            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              fullWidth
              margin="normal"
            />
          </div>

          {/* State */}
          <TextField
            label="State or Region"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter your state"
            required
            fullWidth
            margin="normal"
          />

          {/* Message */}
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />

          {/* Submit Button */}
          <Box display="flex" justifyContent="center" mt={2}>
            <Button
              type="submit"
              variant="contained"
              sx={{ bgcolor: "black", color: "white", margin: "20px", '&:hover': { bgcolor: 'darkgrey' } }}
              disabled={loading} // Disable button while loading
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </Box>
          {error && <Typography color="error">{error}</Typography>}
        </form>
      </div>

      <Faq />

      <div className="address-section">
  <h2>Our Office</h2>
  <p>
    <a 
      href="https://maps.app.goo.gl/R2FhZV4paf7Jbzpt5" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Metro Station, D-53, Kaushambi Central Park, near Kaushambi, Anand Vihar, Ghaziabad, Uttar Pradesh 201010
    </a>
  </p>
  <p>
    Email: 
    <a href="mailto:info.droneyards@gmail.com">
      info.droneyards@gmail.com
    </a>
  </p>
  <p>
    Phone: 
    <a href="tel:+918506969051">+91 8506969051</a> |   
    <a href="tel:+918506969140">+91 8506969140</a>
  </p>
</div>


      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" sx={{ color: "black", textAlign: "center" }} component="h2">
            Thank You!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, color: "black" }}>
            We’ve received your message and will get back to you promptly.
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 2, bgcolor: "black", color: "white" }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ContactUs;
