"use client";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid, Typography, Button, ButtonGroup, Slider, Box, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { addToCart } from '../../../store/cartslice';
import { useFilterProducts } from '../../../hooks/useFilterProducts'; // Import the custom hook
import { Product } from '../../../types/product';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch the products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();

        // Filter and map products
        const filteredProducts = data.filter((product: Product) => product.type === 'Batteries');
        const productsWithImages = filteredProducts.map((product: Product) => ({
          ...product,
          image: `/static/${product.name.replace(' ', '').toLowerCase()}.jpg`,
        }));

        setProducts(productsWithImages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Use the custom hook to filter products
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
      <Typography variant="h4" align="center" gutterBottom color="textPrimary" sx={{ fontWeight: 'bold', marginBottom: '20px', marginTop:"10px" }}>
        Batteries
      </Typography>

      <Grid container spacing={4}>
        {/* Filters Sidebar */}
        <Grid item xs={12} md={3}>
          <Box sx={{ padding: '10px', border: '2px solid black', borderRadius: '8px', backgroundColor: 'white', height: 'auto', marginLeft: "-100px" }}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Filters
            </Typography>

            {/* Name Filter */}
            <TextField
              label="Search by Name"
              variant="outlined"
              fullWidth
              value={filterName}
              onChange={(e) => handleNameFilterChange(e.target.value)}
              sx={{ marginBottom: '20px' }}
            />

            {/* Type Filter */}
            <FormControl fullWidth sx={{ marginBottom: '20px' }}>
              <InputLabel>Filter by Type</InputLabel>
              <Select
                value={filterType}
                onChange={(e) => handleTypeFilterChange(e.target.value)}
                label="Filter by Type"
              >
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
              onChange={(e, newValue) => handlePriceChange(newValue as number[])}
              valueLabelDisplay="auto"
              min={0}
              max={100000}
              sx={{ color: 'black' }}
            />
            <Typography variant="body2" color="textSecondary" align="center">
              ₹{priceRange[0]} - ₹{priceRange[1]}
            </Typography>

            {/* Sorting Buttons */}
            <Typography gutterBottom sx={{ marginTop: '20px' }}>Sort By</Typography>
            <ButtonGroup variant="contained" fullWidth>
              <Button
                onClick={() => handleSort('alphabetical')}
                sx={{
                  backgroundColor: sortOption === 'alphabetical' ? 'black' : 'white',
                  color: sortOption === 'alphabetical' ? 'white' : 'black',
                  border: '1px solid black',
                }}
              >
                Name
              </Button>
              <Button
                onClick={() => handleSort('price')}
                sx={{
                  backgroundColor: sortOption === 'price' ? 'black' : 'white',
                  color: sortOption === 'price' ? 'white' : 'black',
                  border: '1px solid black',
                }}
              >
                Price
              </Button>
            </ButtonGroup>
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
                      borderRadius: '8px',
                      padding: '15px',
                      backgroundColor: 'white',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                    <Typography variant="h6" color="textPrimary" sx={{ marginTop: '10px', fontWeight: 'bold' }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '10px' }}>
                      {product.description}
                    </Typography>
                    <Typography variant="body1" color="textPrimary" sx={{ fontWeight: 'bold' }}>
                      Price: ₹{product.price}
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => handleAddToCart(product)}
                      sx={{ marginTop: '10px', backgroundColor: 'black', color: 'white' }}
                    >
                      Buy
                    </Button>
                  </Box>
                </Grid>
              ))
            ) : (
              <Typography variant="h6" color="textSecondary" style={{marginLeft:"225px", marginTop:"20px"}} >
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
