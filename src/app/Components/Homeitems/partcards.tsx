import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image, { StaticImageData } from 'next/image';
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

interface Product {
  image: StaticImageData;
  title: string;
  link: string;
}

const products: Product[] = [
  { image: C1, title: 'Drone', link: '/pages/products/drones' },
  { image: C2, title: 'Battery', link: '/pages/products/battery' },
  { image: C3, title: 'Frame', link: '/pages/products/frames' },
  { image: C4, title: 'Motor', link: '/pages/products/motors' },
  { image: C5, title: 'Electronic Parts', link: '/pages/products/ele' },
  { image: C6, title: 'Propeller', link: '/pages/products/propiler' },
  { image: C7, title: 'Controller', link: '/pages/products/controllers' },
  { image: C8, title: 'FC Chips', link: '/pages/products/fc-chips' }
];

export default function ResponsiveGrid() {
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
          marginTop: "180px"
        }}
      >
        Shop By Type
      </Typography>

      <Grid container spacing={2} className="image-cards">
        {products.map((product, index) => (
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
                src={product.image}
                alt={product.title}
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
                  backgroundColor: 'black',
                  color: 'white',
                  textAlign: 'center',
                  padding: '16px',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                }}
              >
                <Typography variant="h6">{product.title}</Typography>
                <Link href={product.link} passHref>
                  <Button variant="contained" sx={{ marginTop: '8px', color: "white", bgcolor: "grey" }}>
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
