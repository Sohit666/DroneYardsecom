"use client";

import Carousel from '../../../Components/Homeitems/Carousel';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Box, Zoom } from '@mui/material';
import EmblaCarousel from '../../../Components/embla';




const programs = [
  {
    title: 'DJI Repair & Service Training',
    description: 'Gain hands-on experience in repairing and servicing DJI drones. This program covers troubleshooting, parts replacement, and maintenance techniques for various DJI models, enabling you to become an expert in drone repair.',
    image: '/about/11.png',
    onClick: () => {
      const link = document.createElement('a');
      link.href = '/training/DroneTraining.pdf'; // Replace with the actual URL or path to your PDF file
      link.download = 'FPV_Building_and_Flying_Training.pdf'; // The name of the file when downloaded
      link.click();
    }
    
  },
  {
    title: 'Wander & Fly FPV Tour',
    description: 'Experi`ence the thrill of flying FPV (First-Person View) drones through stunning landscapes. This immersive tour combines adventure and aerial photography, allowing you to explore the world from a drone’s perspective while capturing breathtaking footage.',
    image: '/about/12.png',
    onClick: () => {
      alert('You clicked on Wander & Fly FPV Tour!');
    }
  },
  {
    title: 'FPV Building & Flying Training',
    description: 'Learn how to build and fly your own FPV drone in this comprehensive course. From assembling the drone frame to fine-tuning flight settings, this program equips you with the skills to fly drones in a fully immersive FPV experience.',
    image: '/about/13.png',
    onClick: () => {
      alert('You clicked on FPV Building & Flying Training!');
    }
  },
  {
    title: 'DGCA Licence Program',
    description: 'Become a certified drone operator in India with the DGCA License Program. This course prepares you for the DGCA exam, ensuring that you meet legal and operational standards for flying drones commercially in India.',
    image: '/about/14.png',
    onClick: () => {
      alert('You clicked on DGCA Licence Program!');
    }
  },
  {
    title: 'DJI Flying Training',
    description: 'Take your drone flying skills to the next level with expert-led DJI flying training. Learn advanced flight techniques, camera operations, and aerial maneuvers, and gain confidence in flying DJI drones in various environments.',
    image: '/about/15.png',
    onClick: () => {
      alert('You clicked on DJI Flying Training!');
    }
  }
];

const DroneyardsSection = () => (
  <Box sx={{
    my: 4, p: 3, backgroundColor: '#f5f5f5', borderRadius: 2, color: 'black', boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    ':hover': {
      boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
    },
    transition: 'box-shadow 0.3s ease'
  }}>
    <Typography variant="h4" gutterBottom align="center">
      Training Programs of Droneyards
    </Typography>
    <Typography variant="body1" align="center" sx={{ color: 'black' }}>
      At Droneyards, we believe in nurturing the next generation of drone enthusiasts. Our training programs are designed to provide hands-on experience and theoretical knowledge that empower you to excel in the field of drone technology. Whether you&apos;re a beginner or looking to upgrade your skills, we have something for everyone!
    </Typography>
    <Typography variant="body1" align="center" sx={{ mt: 2, color: 'black' }}>
      Our experienced instructors are passionate about sharing their expertise and guiding you through every step of your learning journey. Join us to explore the exciting possibilities that drones offer in various industries, from aerial photography to logistics and beyond!
    </Typography>
  </Box>
);

const TrainingPrograms = () => {
 

  return (
    <>
      <Carousel />
      <h1 style={{
        color: 'black', fontSize: '2.5rem', marginTop: '20px', textAlign: 'center', fontWeight: 'bold',
        letterSpacing: '2px'
      }}>Our Training Programs</h1>

      <Container>
        <Grid container spacing={4}>
          {programs.map((program, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Zoom in={true} timeout={1000}>
                <Card sx={{
                  '&:hover': { transform: 'scale(1.05)', boxShadow: '0px 4px 20px rgba(0,0,0,0.2)' },
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  borderRadius: 2
                }}>
                  <CardMedia
                    component="img"
                    alt={program.title}
                    height="140"
                    image={program.image}
                    sx={{
                      borderTopLeftRadius: 2, borderTopRightRadius: 2,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  />
                  <CardContent>
                    <Typography variant="h5">{program.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {program.description}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        mt: 2,
                        transition: 'background-color 0.3s ease',
                        '&:hover': { backgroundColor: '#1976d2' }
                      }}
                      onClick={program.onClick}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </Grid>

        <DroneyardsSection />

        <div style={{
          color: 'black', fontSize: '2.5rem', marginTop: '20px', textAlign: 'center', margin: '10px',
          borderStyle: 'solid', borderColor: 'black', marginBottom: '25px', borderRadius: 8,
          padding: '20px 0'
        }}>
          <h1 style={{
            color: 'black', fontSize: '2.5rem', marginTop: '20px', textAlign: 'center',
            margin: '10px', borderStyle: 'solid', borderColor: 'black'
          }}>Gallery</h1>
          <EmblaCarousel />
        </div>
      </Container>
    </>
  );
};

export default TrainingPrograms;
