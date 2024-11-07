"use client";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Slider,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';
import { addToCart } from '../../../store/cartslice';
import { useFilterProducts } from '../../../hooks/useFilterProducts';
import { Product } from '../../../types/product';

const truncateText = (text: string, limit: number) => {
  if (text.length <= limit) return text;
  return `${text.substring(0, limit)}...`;
};

const ProductsPage = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`);
        const data = await res.json();
        const filteredProds = data.filter((prod: Product) => prod.type === 'Accessories');
        const prodsWithImages = filteredProds.map((prod: Product) => ({
          ...prod,
          image: (prod.imageUrls ?? [])[0] || '',  // Use the first image URL or set a default if none exist
        }));
        setProducts(prodsWithImages);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);

  const {
    filteredProducts,
    priceRange,
    handlePriceChange,
    filterName,
    handleNameFilterChange,
    filterType,
    handleTypeFilterChange,
    handleColorChange,
   
  } = useFilterProducts(products); 

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      description: product.desc,
      price: product.price,
      quantity: 1,
      image: product.image,
      color: product.colors?.[0] || 'defaultColor',
      weight: product.weight || 0,
      dimensions: product.dimensions || { width: 0, height: 0, depth: 0 },
    }));
  };

  return (
    <Container maxWidth="lg" sx={{ padding: 2 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4, mt: 2 }}>
        Accessories
      </Typography>

      <Grid container spacing={4}>
        {/* Filters Sidebar */}
        <Grid item xs={12} md={3}>
          <Box sx={{ padding: 2, border: '2px solid black', borderRadius: 1, bgcolor: 'white' }}>
            <Typography variant="h6" sx={{color:"black"}} gutterBottom>
              Filters
            </Typography>
            <TextField
              label="Search by Name"
              variant="outlined"
              fullWidth
              value={filterName}
              onChange={(e) => handleNameFilterChange(e.target.value)}
              sx={{ mb: 3 }}
            />
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Filter by Type</InputLabel>
              <Select value={filterType} onChange={(e) => handleTypeFilterChange(e.target.value)}>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Drones">Drones</MenuItem>
                <MenuItem value="Frames">Frames</MenuItem>
                <MenuItem value="Propellers">Propellers</MenuItem>
                <MenuItem value="Batteries">Batteries</MenuItem>
                <MenuItem value="Motors">Motors</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Filter by Color</InputLabel>
              <Select onChange={(e: SelectChangeEvent<unknown>) => handleColorChange(e.target.value as string)}>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Red">Red</MenuItem>
                <MenuItem value="Blue">Blue</MenuItem>
                <MenuItem value="Green">Green</MenuItem>
              </Select>
            </FormControl>
            <Typography gutterBottom>Price Range</Typography>
            <Slider
              value={priceRange}
              onChange={(e, newVal) => handlePriceChange(newVal as number[])}
              valueLabelDisplay="auto"
              min={0}
              max={100000}
              sx={{ mb: 2 }}
            />
            <Typography align="center" variant="body2">
              ₹{priceRange[0]} - ₹{priceRange[1]}
            </Typography>
          </Box>
        </Grid>

        {/* Products List */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Box
                    sx={{
                      border: '2px solid black',
                      borderRadius: 1,
                      padding: 2,
                      bgcolor: 'white',
                      height: '400px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'transform 0.3s',
                      '&:hover': { transform: 'scale(1.05)' },
                    }}
                  >
                    <Link href={`/pages/products/motors/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: '100%',
                          height: '200px',
                          borderRadius: 8,
                          objectFit: 'cover',
                          cursor: 'pointer',
                        }}
                      />
                    </Link>
                    <Link href={`/pages/products/motors/${product.id}`}>
                      <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', cursor: 'pointer' }}>
                        {truncateText(product.name, 15)}
                      </Typography>
                    </Link>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {truncateText(product.desc, 10)}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      Price: ₹{product.price}
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => handleAddToCart(product)}
                      sx={{ mt: 2, bgcolor: 'black', color: 'white' }}
                    >
                      Buy
                    </Button>
                  </Box>
                </Grid>
              ))
            ) : (
              <Typography variant="h6" sx={{ marginLeft: "225px", marginTop: "20px" }}>
                No products found
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductsPage;
