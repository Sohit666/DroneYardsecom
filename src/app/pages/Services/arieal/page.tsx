// pages/aerial-services.tsx
"use client";
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import Image from 'next/image';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AerialServicesPage = () => {
    const services = [
        {
          title: 'Real Estate Drone Services',
          description: 'Showcase properties like never before with breathtaking aerial footage and high-resolution photographs. Ideal for luxury homes, commercial spaces, and expansive estates, these visuals create a compelling narrative that attracts potential buyers and renters.',
          image: '/about/21.png',
        },
        {
          title: 'Construction Site Monitoring',
          description: 'Streamline construction projects with precise aerial monitoring and documentation. From progress tracking to safety assessments, drone footage provides a bird’s-eye view that improves decision-making and keeps stakeholders informed.',
          image: '/about/22.png',
        },
        {
          title: 'Event Coverage',
          description: 'Capture the energy and emotion of any event from unique and dynamic aerial angles. Whether it’s a wedding, festival, or corporate gathering, our drones ensure your special moments are unforgettable and visually stunning.',
          image: '/about/23.png',
        },
        {
          title: 'Survey and Mapping',
          description: 'Transform surveying with cutting-edge aerial technology. Obtain accurate topographical data, generate 3D maps, and optimize workflows for industries like real estate, mining, and environmental conservation.',
          image: '/about/24.png',
        },
        {
          title: 'Agricultural Monitoring',
          description: 'Empower your agricultural operations with drone-powered insights. Monitor crop health, detect irrigation issues, and analyze field conditions with high-resolution aerial imagery to improve yield and reduce costs.',
          image: '/about/25.png',
        },
        {
          title: 'Advertising and Marketing',
          description: 'Elevate your brand’s story with cinematic aerial visuals that captivate audiences. Perfect for commercials, promotional videos, and social media campaigns, our services make your content stand out in the competitive market.',
          image: '/about/26.png',
        },
      ];
      

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Page Title */}
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        textAlign="center"
        fontWeight="bold"
        sx={{ animation: `${fadeInUp} 1s ease-in-out` , color :"black"}}
      >
        Aerial Services by Droneyards
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        mb={5}
        sx={{ animation: `${fadeInUp} 1s ease-in-out`, animationDelay: '0.1s' , color :"black" }}
      >
        Experience the versatility of drone technology across various industries.
      </Typography>

      {/* Services Grid */}
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              animation: `${fadeInUp} 1s ease-in-out`,
              animationDelay: `${index * 0.1}s`,
              animationFillMode: 'forwards',
              opacity: 0,
            }}
          >
            <Box
              sx={{
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
                transition: 'transform 0.1s ease-in-out',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <Image
                src={service.image}
                alt={service.title}
                layout="responsive"
                width={400}
                height={300}
              />
            </Box>
            <Typography variant="h6" component="h2" mt={2} fontWeight="bold" textAlign="center">
              {service.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              {service.description}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Contact Button */}
      <Box textAlign="center" mt={5}>
        <Button
          variant="contained"
          size="large"
          href="/pages/contactus"
          sx={{
            px: 4,
            py: 1.5,
            fontWeight: 'bold',
            bgcolor: 'black',
            color: 'white',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              bgcolor: 'grey',
              color: 'black',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          Contact Us for Aerial Services
        </Button>
      </Box>
    </Container>
  );
};

export default AerialServicesPage;
