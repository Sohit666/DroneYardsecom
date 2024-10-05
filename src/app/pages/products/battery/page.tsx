"use client";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { Container, Grid, Typography, Button, ButtonGroup, Slider, Box, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { addToCart } from '../../../store/cartslice'; 

interface Product {
  id: number;
  name: string;
  description: string;
  type: string;
  price: number;
  image: string;
}

const ProductsPage = () => {
  const dispatch = useDispatch(); 
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState<string>('alphabetical');
  const [priceRange, setPriceRange] = useState<number[]>([0, 100000]); 
  const [filterName, setFilterName] = useState<string>(''); 
  const [filterType, setFilterType] = useState<string>(''); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();

        const filteredProducts = data.filter((product: Product) => product.type === 'Drones');

        const productsWithImages = filteredProducts.map((product: Product) => ({
          ...product,
          image: `/static/${product.name.replace(' ', '').toLowerCase()}.jpg`,
        }));

        setProducts(productsWithImages);
        setFilteredProducts(productsWithImages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSort = (option: string) => {
    const sortedProducts = [...filteredProducts];

    if (option === 'alphabetical') {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === 'price') {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    setSortOption(option);
    setFilteredProducts(sortedProducts);
  };

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const handleNameFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterName(event.target.value);
  };

  const handleTypeFilterChange = (event: SelectChangeEvent<string>) => {
    setFilterType(event.target.value);
  };

  useEffect(() => {
    const filteredByPriceAndType = products.filter(
      (product) =>
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (filterType === '' || product.type === filterType) &&
        (filterName === '' || product.name.toLowerCase().includes(filterName.toLowerCase()))
    );
    setFilteredProducts(filteredByPriceAndType);
  }, [priceRange, filterType, filterName, products]);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ 
      name: product.name, 
      description: product.description, 
      price: product.price, 
      quantity: 1,
      image: product.image 
    }));
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom color="textPrimary" sx={{ fontWeight: 'bold', marginBottom: '20px', marginTop:"10px" }}>
        Batteries
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box sx={{ padding: '10px', border: '2px solid black', borderRadius: '8px', backgroundColor: 'white', height: 'auto', marginLeft: "-100px" }}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Filters
            </Typography>

            <TextField
              label="Search by Name"
              variant="outlined"
              fullWidth
              value={filterName}
              onChange={handleNameFilterChange}
              sx={{ marginBottom: '20px' }}
            />

            <FormControl fullWidth sx={{ marginBottom: '20px' }}>
              <InputLabel>Filter by Type</InputLabel>
              <Select
                value={filterType}
                onChange={handleTypeFilterChange}
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

            <Typography gutterBottom>Price Range</Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={100000}
              sx={{ color: 'black' }}
            />
            <Typography variant="body2" color="textSecondary" align="center">
              ₹{priceRange[0]} - ₹{priceRange[1]}
            </Typography>

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

        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
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
                      sx={{ marginTop: '10px', backgroundColor: 'black', color: 'white', width: '100%' }} // Full width for buttons
                    >
                      Buy
                    </Button>
                  </Box>
                </Grid>
              ))
            ) : (
              <Typography variant="h6" color="textSecondary" align="center">
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
