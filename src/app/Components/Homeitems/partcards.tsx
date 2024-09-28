import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; 
import Image from 'next/image'; 
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 
import Link from 'next/link'; // Import Link from Next.js

// Import your custom images
import C1 from '../../Assets/Parts/Drone.jpg';
import C2 from '../../Assets/Parts/Battery.jpg';
import C3 from '../../Assets/Parts/Frame.png';
import C4 from '../../Assets/Parts/Motor.png';
import C5 from '../../Assets/Parts/ele.jpg';
import C6 from '../../Assets/Parts/fan.jpg';
import C7 from '../../Assets/Parts/controller.jpg';
import C8 from '../../Assets/Parts/Frame.webp';

import { StaticImageData } from 'next/image'; 

interface Card {
  image: StaticImageData;
  title: string;
  buttonText: string;
}

export default function ResponsiveGrid() {
  const productLinks = [
    '/pages/products/drones',
    '/pages/products/battery',
    '/pages/products/frames',
    '/pages/products/motors',
    '/pages/products/ele',
    '/pages/products/propiler',
    '/pages/products/controllers',
    '/pages/products/fc-chips'
  ];

  return (
    <Box sx={{ flexGrow: 1, marginTop: 5, margin: '20px' }}>
      <Typography 
        variant="h5" 
        component="h2" 
        className="shop-by-type" 
        gutterBottom 
        sx={{ 
          textAlign: 'center', 
          fontSize: '3rem',    
          color: 'black',
          marginTop:"180px"
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
                <Link href={productLinks[index]} passHref>
                  <Button variant="contained" color="primary" sx={{ marginTop: '8px' }}>
                    Buy Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
