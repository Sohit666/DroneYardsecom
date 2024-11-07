"use client";
import { useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';


interface Product {
  id: number;
  name: string;
  desc: string;
  price: number;
  imageUrls?: string[];
  image?: string;
}

const RandomProducts = () => {
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);
  const [productsToFetch] = useState(6);  // Always fetch 6 products

 

  useEffect(() => {
    const fetchRandomProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`);
        const data: Product[] = await res.json();

        // Randomly select 6 products
        const randomProds = data.sort(() => 0.5 - Math.random()).slice(0, productsToFetch);

        // Add image URLs if they exist
        const prodsWithImages = randomProds.map((prod) => ({
          ...prod,
          image: (prod.imageUrls ?? [])[0] || '',
        }));

        setRandomProducts(prodsWithImages);
      } catch (err) {
        console.error('Error fetching random products:', err);
      }
    };

    fetchRandomProducts();
  }, [productsToFetch]);

  return (
    <Box sx={{ padding: 2, bgcolor: 'white', marginTop: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        Featured Products
      </Typography>

      {/* Horizontal Scrollable Grid */}
      <Grid container spacing={3} sx={{ overflowX: 'auto', display: 'flex', paddingBottom: 2 }}>
        {randomProducts.length > 0 ? (
          randomProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={product.id}>
              <Card
                sx={{
                  height: '100%', 
                  display: 'flex',
                  flexDirection: 'column', 
                  maxWidth: 345,
                  borderRadius: 3,
                  boxShadow: 4,
                  transition: '0.3s',
                  '&:hover': { transform: 'scale(1.05)', boxShadow: 8 },
                }}
              >
                <Link href={`/pages/products/motors/${product.id}`} passHref>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                    sx={{ objectFit: 'cover', borderTopLeftRadius: 3, borderTopRightRadius: 3 }} // Rounded top corners
                  />
                </Link>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <Link href={`/pages/products/motors/${product.id}`} passHref>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', cursor: 'pointer', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                      {product.name}
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1, textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                    {product.desc.length > 40 ? `${product.desc.substring(0, 40)}...` : product.desc}
                  </Typography>
                  <Typography variant="body1" color="text.primary" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                    ₹{product.price}
                  </Typography>
                  {/* Fixing button at the bottom */}
                  <Box sx={{ marginTop: 'auto' }}>
                    <Button variant="contained" color="secondary" sx={{ width: '100%', borderRadius: 2, height: 40 }}>
                      Add to Cart
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ textAlign: 'center', width: '100%' }}>
            No products found
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default RandomProducts;
