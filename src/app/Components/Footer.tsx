import React from 'react';
import { Grid, Typography, Link, Box } from '@mui/material';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'black', color: 'white', py: 7 }}>
      <Grid container spacing={4} sx={{ px: 6 }}>
        {/* About Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            About DroneYards
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.400' }}>
            At DroneYards, we provide comprehensive drone solutions tailored to both hobbyists and professionals. From high-quality drones and essential parts to FPV training. Discover top-tier drones, sharpen your skills with our expert-led classes, and take the next step with our drone pilot licensing support. Explore, learn, and soar with DroneYards—your gateway to everything drone-related. Contact us today to get started!
          </Typography>
        </Grid>

        {/* Navigation Links */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Quick Links
          </Typography>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li>
              <Link href="/pages/about" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/pages/products/drones" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
                Buy Drones
              </Link>
            </li>
            <li>
              <Link href="/pages/services/train" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
                Training Plans
              </Link>
            </li>
            <li>
              <Link href="/pages/contactus" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </Grid>

        {/* Policies Links */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Policies
          </Typography>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li>
              <Link href="/pages/policies/privacy-policy" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/pages/policies/refund-policy" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
                Refund Policy
              </Link>
            </li>
            <li>
              <Link href="/pages/policies/terms-and-conditions" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.400', mb: 1 }}>
            <Link href="https://maps.app.goo.gl/aqRArbUHHjio6j5P7" target="_blank" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
              Metro Station, D-53, Kaushambi Central Park,<br />
              near Kaushambi,<br /> Anand Vihar, Kaushambi, Ghaziabad, Uttar Pradesh 201010
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.400', mb: 1 }}>
            <Link href="mailto:info@DroneYards.com" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
              Email: info@DroneYards.com
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.400' }}>
            <Link href="tel:+919868980710" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
              Contact: (+91) 98689-80710
            </Link>
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ borderTop: '1px solid #444', pt: 4, textAlign: 'center',marginTop:"50px" }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Link href="https://facebook.com" target="_blank" sx={{ color: 'grey.400', '&:hover': { color: 'white' }, mx: 1 }}>
            <FaFacebookF size={24} />
          </Link>
          <Link href="https://twitter.com" target="_blank" sx={{ color: 'grey.400', '&:hover': { color: 'white' }, mx: 1 }}>
            <FaTwitter size={24} />
          </Link>
          <Link href="https://www.instagram.com/droneyards/" target="_blank" sx={{ color: 'grey.400', '&:hover': { color: 'white' }, mx: 1 }}>
            <FaInstagram size={24} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" sx={{ color: 'grey.400', '&:hover': { color: 'white' }, mx: 1 }}>
            <FaLinkedinIn size={24} />
          </Link>
        </Box>

        <Typography variant="body2" sx={{ color: 'grey.500' }}>
          &copy; {new Date().getFullYear()} DroneYards. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
