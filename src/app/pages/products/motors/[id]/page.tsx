"use client";
import { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Product } from '../../../../types/product';

// App Router page component (for the /app directory)
const ProductDetailsPage = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = params;

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const res = await fetch(`http://localhost:3000/api/products/${id}`);
          const data = await res.json();
          setProduct(data);
        } catch (error) {
          console.error('Failed to fetch product:', error);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <Typography variant="h5">Loading product details...</Typography>;
  }

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
        />
        <Typography variant="h4" sx={{ mt: 2, fontWeight: 'bold' }}>
          {product.name}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {product.description}
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
          Price: ₹{product.price}
        </Typography>
      </Box>
    </Container>
  );
};

export default ProductDetailsPage;
