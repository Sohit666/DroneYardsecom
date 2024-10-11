"use client";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { Container, Grid, Typography, Button, Box, Slider, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { addToCart } from '../../../store/cartslice';
import { useFilterProducts } from '../../../hooks/useFilterProducts';
import { Product } from '../../../types/product';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/products');
        const data = await res.json();
        const filteredProds = data.filter((prod: Product) => prod.type === 'Motors');
        const prodsWithImages = filteredProds.map((prod: Product) => ({
          ...prod,
          image: `/static/${prod.name.replace(' ', '').toLowerCase()}.jpg`,
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
    sortOption,
    handleSort,
    priceRange,
    handlePriceChange,
    filterName,
    handleNameFilterChange,
    filterType,
    handleTypeFilterChange,
  } = useFilterProducts(products);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: 1,
      image: product.image,
    }));
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4, mt: 2 }}>
        Motors
      </Typography>

      <Grid container spacing={4}>
        {/* Filters Sidebar */}
        <Grid item xs={12} md={3}>
          <Box sx={{ padding: 2, border: '2px solid black', borderRadius: 1, bgcolor: 'white' }}>
            <Typography variant="h6" gutterBottom>
              Filters
            </Typography>
            {/* Name Filter */}
            <TextField
              label="Search by Name"
              variant="outlined"
              fullWidth
              value={filterName}
              onChange={(e) => handleNameFilterChange(e.target.value)}
              sx={{ mb: 3 }}
            />
            {/* Type Filter */}
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

            {/* Price Range Slider */}
            <Typography gutterBottom>Price Range</Typography>
            <Slider
              value={priceRange}
              onChange={(e, newVal) => handlePriceChange(newVal as number[])}
              valueLabelDisplay="auto"
              min={0}
              max={100000}
            />
            <Typography align="center" variant="body2">
              ₹{priceRange[0]} - ₹{priceRange[1]}
            </Typography>

            {/* Sort Buttons */}
            <Typography gutterBottom sx={{ mt: 3 }}>Sort By</Typography>
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
                      transition: 'transform 0.3s',
                      '&:hover': { transform: 'scale(1.05)' },
                    }}
                  >
                    <Link href={`/pages/products/motors/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: '100%', height: 'auto', borderRadius: 8, cursor: 'pointer' }}
                      />
                    </Link>
                    <Link href={`/pages/products/motors/${product.id}`}>
                      <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', cursor: 'pointer' }}>
                        {product.name}
                      </Typography>
                    </Link>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {product.description}
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
