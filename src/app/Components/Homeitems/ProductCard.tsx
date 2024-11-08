// components/ProductCard.tsx
"use client";
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

interface ProductCardProps {
  image: string;
  title: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, link }) => {
  return (
    <Card
      sx={{
        width: 300,
        height: 320,
        margin: 'auto',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '16px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)', // Darker shadow
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)', // Slightly increased scale effect
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)', // Larger shadow on hover
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: '100%',
          height: 250,
          objectFit: 'contain', 
          filter: 'drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.9))',
          transition: 'transform 0.3s ease, filter 0.3s ease',
          '&:hover': {
            animation: 'shake 0.5s infinite', 
            filter: 'drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.8))', 
          },
        }}
      />
      <CardContent sx={{ textAlign: 'center', padding: '16px', marginBottom: "480px" }}>
        <Typography variant="h5" component="div" align="center" sx={{ fontWeight: 'bold' , marginTop:"-55px"}}>
          {title}
        </Typography>
      </CardContent>

      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link href={link} passHref>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '8px',
              padding: '8px 16px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                backgroundColor: 'grey',
                color: 'black',
                transform: 'scale(1.1)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)', // Adding a shadow to the button on hover
              },
            }}
          >
            Shop Now
          </Button>
        </Link>
      </Box>
    </Card>
  );
};

export default ProductCard;
