import React from 'react';
import { Box, Typography, Grid, Paper, IconButton } from '@mui/material';
import { Build, ShoppingCart, SupportAgent, FlightTakeoff } from '@mui/icons-material';

const services = [
  {
    title: 'Wide Drone Selection',
    description: 'Find a variety of drones for every need – from FPV to professional cameras.',
    icon: <FlightTakeoff />, // Using the FlightTakeoff icon
  },
  {
    title: 'High-Quality Parts',
    description: 'Get the best drone parts and accessories for performance and durability.',
    icon: <Build />, // Using the Build icon
  },
  {
    title: 'Affordable Pricing',
    description: 'Competitive pricing to make high-end drones and parts accessible to everyone.',
    icon: <ShoppingCart />, // Using the ShoppingCart icon
  },
  {
    title: 'Expert Support',
    description: 'Consult with drone experts for advice on the right gear or troubleshooting.',
    icon: <SupportAgent />, // Using the SupportAgent icon
  },
];

const ServiceCards = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white', // Change background color to black
        color: '#fff', // Change text color to white
        padding: '20px',
        marginTop: '20px',
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <Paper
              sx={{
                padding: '16px',
                textAlign: 'center',
                borderRadius: '8px',
                boxShadow: 3,
                backgroundColor: '#333', // Dark background for the Paper
                color: '#fff', // White text for Paper content
              }}
            >
              <IconButton sx={{ fontSize: '40px', color: '#fff' }}>
                {service.icon} {/* Icon rendering */}
              </IconButton>
              <Typography variant="h6" sx={{ marginTop: '10px' }}>
                {service.title} {/* Title rendering */}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: '5px',color:"white" }}>
                {service.description} {/* Description rendering */}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceCards;
