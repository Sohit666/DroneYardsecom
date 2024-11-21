'use client';
import React from 'react';
import { Container, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(90deg, #FF6F61, #D84315)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold',
}));

const EnrollButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'black',
  color: 'white',
  padding: '15px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#FF6F61',
    transform: 'scale(1.05)',
  },
}));

const AnimatedCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[8],
  },
}));

const LicensePage: React.FC = () => {
  const theme = useTheme();

  const handleEnroll = () => {
    alert('Enrollment button clicked!');
  };

  return (
    <Container sx={{ marginTop: '20px', animation: 'fadeIn 1s ease-out' }}>
      {/* Hero Section */}
      <GradientText variant="h2" sx={{ textAlign: 'center', marginBottom: '20px' }} gutterBottom>
        DGCA Approved License Program
      </GradientText>
      <Typography sx={{ fontSize: '20px', textAlign: 'center', marginBottom: '20px', color:"black" }}>
        At Drone Yard, we offer an intensive 1-week DGCA-approved Drone Pilot License program designed to give aspiring drone pilots the skills and certification needed to fly professionally. This comprehensive course covers key aspects of drone operation, including safety protocols, airspace regulations, flight planning, and hands-on flying experience. Led by expert instructors, participants receive personalized guidance to ensure they are fully prepared for the DGCA exam and to earn their official drone pilot license. Whether you&apos;re starting a new career or enhancing your skill set, this program is your ideal path to becoming a certified drone operator.
      </Typography>

      {/* Enroll Button */}
      <EnrollButton
        onClick={handleEnroll}
        sx={{
          display: 'block',
          margin: '0 auto',
        }}
      >
        Enroll Now
      </EnrollButton>

      {/* Program Cards */}
      <Grid container spacing={4} sx={{ marginTop: '30px', marginBottom: '25px' }}>
        {[1, 2, 3].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <AnimatedCard>
              <CardMedia
                component="img"
                alt={`Program Image ${item}`}
                height="140"
                image="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
                title={`Program Image ${item}`}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Program Image {item}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description of the program image {item}.
                </Typography>
              </CardContent>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Container>
  );
};

export default LicensePage;
