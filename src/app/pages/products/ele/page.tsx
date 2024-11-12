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
  Modal,
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
  const [selectedColor] = useState<string>('');


  const [isMobile, setIsMobile] = useState(false); // Mobile detection state
  const [openFilterModal, setOpenFilterModal] = useState(false); // State to open modal

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Detect mobile screen
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Listen for window resize

    // Fetch products data
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`);
        const data = await res.json();
        const filteredProds = data.filter((prod: Product) => prod.type === 'Electronic');
        const prodsWithImages = filteredProds.map((prod: Product) => ({
          ...prod,
          image: (prod.imageUrls ?? [])[0] || '', 
        }));
        setProducts(prodsWithImages);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();

    return () => window.removeEventListener('resize', handleResize);
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

  // Modal handling
  const handleOpenModal = () => setOpenFilterModal(true);
  const handleCloseModal = () => setOpenFilterModal(false);

  return (
    <Container maxWidth="lg" sx={{ padding: 2 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4, mt: 2,color:"black" }}>
       Electronics
      </Typography>

      {isMobile && (
        <Button
          onClick={handleOpenModal}
          variant="contained"
          color="primary"
          sx={{ marginBottom: 2, color: 'white', bgcolor: 'black', '&:hover': { bgcolor: 'grey' } }}
        >
          Open Filters
        </Button>
      )}

      {/* Filters Modal for mobile */}
      <Modal
        open={openFilterModal}
        onClose={handleCloseModal}
        aria-labelledby="mobile-filter-modal"
        aria-describedby="mobile-filters"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            padding: 4,
            borderRadius: 2,
            boxShadow: 24,
            width: '80%', // Responsive width
            maxWidth: 400,
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: 2 ,color:"black"}}>
            Filters
          </Typography>
          {/* Filter content */}
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
            <Select value={selectedColor} onChange={(e) => handleColorChange(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Red">Red</MenuItem>
              <MenuItem value="Blue">Blue</MenuItem>
              <MenuItem value="Green">Green</MenuItem>
            </Select>
          </FormControl>

          <Typography gutterBottom sx={{color:"black"}}>Price Range</Typography>
          <Slider
            value={priceRange}
            onChange={(e, newVal) => handlePriceChange(newVal as number[])}
            valueLabelDisplay="auto"
            min={0}
            max={100000}
            sx={{ mb: 2 }}
          />
          <Typography align="center" variant="body2" sx={{color:"black"}}>
            ₹{priceRange[0]} - ₹{priceRange[1]}
          </Typography>

          <Button
            onClick={handleCloseModal}
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Close Filters
          </Button>
        </Box>
      </Modal>

      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          {/* Desktop Filters Sidebar */}
          {!isMobile && (
            <Box sx={{ padding: 3, border: '2px solid #ddd', borderRadius: 2, bgcolor: 'white', boxShadow: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold',color:"black" }}>
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
                <Select value={selectedColor} onChange={(e) => handleColorChange(e.target.value)}>
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="Red">Red</MenuItem>
                  <MenuItem value="Blue">Blue</MenuItem>
                  <MenuItem value="Green">Green</MenuItem>
                </Select>
              </FormControl>

              <Typography gutterBottom sx={{color:"black"}}>Price Range</Typography>
              <Slider
                value={priceRange}
                onChange={(e, newVal) => handlePriceChange(newVal as number[])}
                valueLabelDisplay="auto"
                min={0}
                max={100000}
                sx={{ mb: 2 }}
              />
              <Typography align="center" variant="body2" sx={{color:"black"}}>
                ₹{priceRange[0]} - ₹{priceRange[1]}
              </Typography>
            </Box>
          )}
        </Grid>

        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Box
                    sx={{
                      border: '2px solid #ddd',
                      borderRadius: 2,
                      padding: 3,
                      bgcolor: 'white',
                      height: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': { transform: 'scale(1.05)', boxShadow: 3 },
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
                      <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', cursor: 'pointer', fontSize: { xs: '1rem', sm: '1.125rem' } , color:"black"}}>
                        {truncateText(product.name, 15)}
                      </Typography>
                    </Link>
                    <Typography variant="body2" sx={{ mb: 2, fontSize: { xs: '0.875rem', sm: '1rem' ,color:"black"} }}>
                      {truncateText(product.desc, 50)}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' ,color:"black"}}>
                      Price: ₹{product.price}
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => handleAddToCart(product)}
                      sx={{ mt: 2, bgcolor: 'black', color: 'white', '&:hover': { bgcolor: 'grey' } }}
                    >
                      Buy
                    </Button>
                  </Box>
                </Grid>
              ))
            ) : (
              <Typography variant="h6" sx={{ width: '100%', textAlign: 'center', marginTop: '20px',color:"black" }}>
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
