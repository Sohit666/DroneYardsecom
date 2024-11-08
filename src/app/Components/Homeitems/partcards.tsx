// pages/shop.tsx
import { Grid, Typography } from '@mui/material';
import ProductCard from './ProductCard';

interface Product {
  image: string;
  title: string;
  link: string;
}

const productData: Product[] = [
  { image: '/images/product1.png', title: 'Batteries', link: '/pages/products/battery' },
  { image: '/images/product2.png', title: 'Goggles', link: '/pages/products/goggles' },
  { image: '/images/product3.png', title: 'Drone Equipments', link: '/pages/accessory' },
  { image: '/images/product4.png', title: 'Propellers', link: '/pages/products/propiler' },
  { image: '/images/product5.png', title: 'Radios', link: '/pages/products/radioAntenna' },
  { image: '/images/product6.png', title: 'Motors', link: '/pages/products/motors' },
  { image: '/images/product7.png', title: 'Frames', link: '/pages/products/frames' },
  { image: '/images/product8.png', title: 'Cameras', link: '/pages/products/cameras' },
];

const ShopPage: React.FC = () => {
  return (
    <div>
      {/* Styled Heading */}
      <Typography 
        variant="h1" 
        sx={{
          textAlign: 'center',
          margin: '20px 0', 
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, // Responsive font size
          fontWeight: 'bold',
          color: 'black', // Customize color from theme
          textTransform: 'uppercase',
        }}
      >
        Shop By Types
      </Typography>

      {/* Product Grid */}
      <Grid 
        container 
        spacing={{ xs: 2, sm: 3, md: 4 }} // Responsive spacing
        padding={{ xs: 2, sm: 4 }} // Padding for small and larger screens
        justifyContent="center" // Center the grid on large screens
      >
        {productData.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <ProductCard image={product.image} title={product.title} link={product.link} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ShopPage;
