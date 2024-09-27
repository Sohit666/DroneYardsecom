import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; 
import Image from 'next/image'; 
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 

// Import your custom images
import C1 from '../../Assets/Parts/Drone.jpg';
import C2 from '../../Assets/Parts/Battery.jpg';
import C3 from '../../Assets/Parts/Frame.png';
import C4 from '../../Assets/Parts/Motor.png';
import C5 from '../../Assets/Parts/ele.jpg';
import C6 from '../../Assets/Parts/fan.jpg';
import C7 from '../../Assets/Parts/controller.jpg'
import C8 from '../../Assets/Parts/Frame.webp'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '300px',
  borderRadius: '8px',
  boxShadow: theme.shadows[3],
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const ImageOverlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  opacity: 0,
  transition: 'opacity 0.3s ease',
});

import { StaticImageData } from 'next/image'; 

interface Card {
  image: StaticImageData;
  title: string;
  buttonText: string;
}

const cards: Card[] = [
  {
    image: C1,
    title: 'Card Title 1',
    buttonText: 'Learn More',
  },
  {
    image: C2,
    title: 'Card Title 2',
    buttonText: 'View Details',
  },
  {
    image: C3,
    title: 'Card Title 3',
    buttonText: 'Explore',
  },
  {
    image: C4,
    title: 'Card Title 4',
    buttonText: 'Get Started',
  },
  {
    image: C5,
    title: 'Card Title 5',
    buttonText: 'Join Now',
  },
  {
    image: C6,
    title: 'Card Title 6',
    buttonText: 'Sign Up',
  },
  {
    image: C7,
    title: 'Card Title 7',
    buttonText: 'Sign Up',
  },
  {
    image: C8,
    title: 'Card Title 8',
    buttonText: 'Sign Up',
  },
];

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 5, margin :'20px' }}>
      <Typography 
        variant="h5" 
        component="h2" 
        className="shop-by-type" 
        gutterBottom 
        sx={{ 
          textAlign: 'center', 
          fontSize: '2rem',    
          color: 'black',
        }}
      >
        Shop By Type
      </Typography>
      
      <Grid container spacing={2} className="image-cards">
        {[C1, C2, C3, C4, C5, C6, C7, C8].map((src, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Card
              sx={{
                position: 'relative',
                overflow: 'hidden',
                height: '300px',
                border: '1px solid black', // Add thin black border
                '&:hover .overlay': { opacity: 1 },
              }}
            >
              <Image
                src={src}
                alt={`Card ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
              <CardContent
                className="overlay"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  textAlign: 'center',
                  padding: '16px',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                }}
              >
                <Typography variant="h6">Product {index + 1}</Typography>
                <Button variant="contained" color="primary" sx={{ marginTop: '8px' }}>Buy Now</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
