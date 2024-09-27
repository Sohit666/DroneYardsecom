import Carousel from '../../../Components/Homeitems/Carousel'
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Box } from '@mui/material';
import EmblaCarousel from '../../../Components/embla';

const programs = [
  {
    title: 'Drone Repairing',
    description: 'Learn to repair various types of drones. Our comprehensive training covers hardware and software aspects.',
    image: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320',
  },
  {
    title: 'Wander and Fly',
    description: 'Join our adventure program that combines drone flying with breathtaking landscapes. Experience the thrill of flying!',
    image: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320',
  },
  {
    title: 'DGCA Pilot License',
    description: 'Get certified to fly drones legally in India. Our course meets DGCA standards and prepares you for the licensing exam.',
    image: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320',
  },
];

const DroneyardsSection = () => (
  <Box sx={{ my: 4, p: 3, backgroundColor: '#f5f5f5', borderRadius: 2, color:'black' }}>
    <Typography variant="h4" gutterBottom align="center">
      Training Programs of Droneyards
    </Typography>
    <Typography variant="body1" align="center">
      At Droneyards, we believe in nurturing the next generation of drone enthusiasts. Our training programs are designed to provide hands-on experience and theoretical knowledge that empower you to excel in the field of drone technology. Whether you&apos;re a beginner or looking to upgrade your skills, we have something for everyone!
    </Typography>
    <Typography variant="body1" align="center" sx={{ mt: 2 }}>
      Our experienced instructors are passionate about sharing their expertise and guiding you through every step of your learning journey. Join us to explore the exciting possibilities that drones offer in various industries, from aerial photography to logistics and beyond!
    </Typography>
  </Box>
);

const TrainingPrograms = () => {
  return (
    <>
      <Carousel />
      <h1 style={{ color: 'black', fontSize: '2.5rem', marginTop: '20px', textAlign: 'center' }}>Our Training Programs</h1>

      <Container>
        <Grid container spacing={4}>
          {programs.map((program, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={program.title}
                  height="140"
                  image={program.image}
                />
                <CardContent>
                  <Typography variant="h5">{program.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {program.description}
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <DroneyardsSection />

        <div style={{ color: 'black', fontSize: '2.5rem', marginTop: '20px', textAlign: 'center', margin: '10px', borderStyle: 'solid', borderColor: 'black' }}>
          <h1 style={{ color: 'black', fontSize: '2.5rem', marginTop: '20px', textAlign: 'center', margin: '10px', borderStyle: 'solid', borderColor: 'black' }}>Gallery</h1>
          <EmblaCarousel />
        </div>
      </Container>
    </>
  );
};

export default TrainingPrograms;
