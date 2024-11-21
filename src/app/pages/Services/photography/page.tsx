// pages/photography.tsx
"use client"

import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PhotographyPage = () => {
  const videos = [
    { src: 'https://www.w3schools.com/html/movie.mp4', title: 'Mountain Serenity' },
    { src: 'https://www.w3schools.com/html/movie.mp4', title: 'City Lights' },
    { src: 'https://www.w3schools.com/html/movie.mp4', title: 'Ocean Waves' },
  ];

  const photos = [
    { src: '/homepage/areal.jpg' },
    { src: '/homepage/areal.jpg' },
    { src: '/homepage/areal.jpg' },
    { src: '/homepage/areal.jpg' },
    { src: '/homepage/areal.jpg' },
    { src: '/homepage/areal.jpg' },
    { src: '/homepage/areal.jpg' },
    { src: '/homepage/areal.jpg' },
    { src: '/homepage/areal.jpg' },
    
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 5, animation: `${fadeIn} 1s ease-in-out` }}>
      {/* Page Title */}
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        textAlign="center"
        fontWeight="bold"
        sx={{
          animation: `${fadeIn} 1s ease-in-out`,
          animationDelay: '0.2s',
          animationFillMode: 'both',
        }}
      >
        Droneyards Photography
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        mb={5}
        sx={{ opacity: 0, animation: `${fadeIn} 1s ease-in-out`, animationDelay: '0.4s', animationFillMode: 'both' }}
      >
        "Experience the world from breathtaking new heights with our professional drone photography services.  
Uncover stunning landscapes, vibrant cityscapes, and unique perspectives that only drones can capture.  
Whether for personal projects, real estate, events, or creative campaigns, we bring your vision to life with precision and artistry.  
Discover the beauty of the world from above, where every shot tells a story."
      </Typography>

      {/* Video Gallery */}
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        fontWeight="bold"
        textAlign="center"
        sx={{ animation: `${fadeIn} 1s ease-in-out`, animationDelay: '0.6s', animationFillMode: 'both' }}
      >
        Some of our video shoots
      </Typography>
      <Grid container spacing={4} mb={5}>
        {videos.map((video, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              opacity: 0,
              animation: `${fadeIn} 1s ease-in-out`,
              animationDelay: `${0.8 + index * 0.1}s`,
              animationFillMode: 'both',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
                '&:hover': { boxShadow: 6 },
                transition: 'box-shadow 0.3s ease',
              }}
            >
              <video
                src={video.src}
                title={video.title}
                autoPlay
                loop
                muted
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
              />
            </Box>
            <Typography variant="h6" component="h2" mt={2} fontWeight="bold" textAlign="center">
              {video.title}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Photo Gallery */}
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        fontWeight="bold"
        textAlign="center"
        sx={{ animation: `${fadeIn} 1s ease-in-out`, animationDelay: '1.2s', animationFillMode: 'both' }}
      >
        Photo Gallery
      </Typography>
      <Grid container spacing={4}>
        {photos.map((photo, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              opacity: 0,
              animation: `${fadeIn} 1s ease-in-out`,
              animationDelay: `${1.4 + index * 0.1}s`,
              animationFillMode: 'both',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 },
              }}
            >
              <Image src={photo.src} alt={`Photo ${index + 1}`} layout="responsive" width={400} height={300} />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Contact Button */}
      <Box textAlign="center" mt={5}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/pages/contactus"
          sx={{
            px: 4,
            py: 1.5,
            fontWeight: 'bold',
            animation: `${fadeIn} 1s ease-in-out`,
            animationDelay: '2s',
            animationFillMode: 'both',
            bgcolor: 'black',
            '&:hover': {
              backgroundColor: 'grey',
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease, background-color 0.3s ease',
            },
          }}
        >
          Contact Us for Photography
        </Button>
      </Box>
    </Container>
  );
};

export default PhotographyPage;
