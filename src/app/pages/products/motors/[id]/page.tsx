"use client";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Random from "../../../../Components/random";
import {
  Container,
  Typography,
  Box,
  Button,
  Rating,
  TextField,
  Grid,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress, // Import CircularProgress
} from '@mui/material';
import { Product } from '../../../../types/product';
import { addToCart } from '../../../../store/cartslice';
import Slider from 'react-slick';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CachedIcon from '@mui/icons-material/Cached';
import SecurityIcon from '@mui/icons-material/Security';
import PaymentIcon from '@mui/icons-material/Payment';
import VerifiedIcon from '@mui/icons-material/Verified';
import BuildIcon from '@mui/icons-material/Build';

const ProductDetailsPage = ({ params }: { params: { id: string } }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const { id } = params;

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${id}`);
          const data = await res.json();
          
          setProduct(data);
          setSelectedColor(data?.colors?.[0] || '');
        } catch (error) {
          console.error('Failed to fetch product:', error);
        }
      };

      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          name: product.name,
          description: product.desc,
          price: product.price,
          quantity,
          color: selectedColor,
          image: product.imageUrls?.[0] ?? '',
          weight: product.weight,
          dimensions: product.dimensions ?? { width: 0, height: 0, depth: 0 }, 
        })
      );
      console.log('Added to cart:', product.name, quantity, selectedColor);
    }
  };
  
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  // Loader
  if (!product) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress color="inherit" />
      </Container>
    );
  }

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true, 
    autoplay: true, 
    autoplaySpeed: 2000, 
    pauseOnHover: true,
  };
  
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        {/* Product Image Slider */}
        <Grid item xs={12} md={6}>
          <Slider {...sliderSettings}>
            {product.imageUrls?.map((imageUrl: string, index: number) => (
              <div key={index}>
                <img
                  src={imageUrl}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: 'auto', // Maintain aspect ratio
                    objectFit: 'contain', // Ensure images fit within the container
                    maxHeight: '500px', // Set a maximum height
                  }}
                />
              </div>
            ))}
          </Slider>
        </Grid>

        {/* Product Information */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 'bold',color:"black" }}>
            {product.name}
          </Typography>

          {/* Rating Placeholder */}
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <Rating value={0} readOnly precision={0.5} />
            <Typography variant="body2" sx={{ ml: 1,color:"black" }}>
              (0 reviews)
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mt: 2,color:"black"}}>
            {product.desc}
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold',color:"black" }}>
            Price: ₹{product.price}
          </Typography>

          {/* Additional Product Details */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{color:"black"}}>
              <strong>Dimensions:</strong> {`${product.dimensions?.width ?? 0} x ${product.dimensions?.height ?? 0} x ${product.dimensions?.depth ?? 0}`} cm
            </Typography>
            <Typography variant="body2"  sx={{color:"black"}}>
              <strong>Weight:</strong> {product.weight} kg
            </Typography>
            <Typography variant="body2"  sx={{color:"black"}}>
              <strong>Colors available:</strong> {product.colors ? product.colors.join(', ') : 'No colors available'}
            </Typography>
          </Box>

          {/* Select Color */}
          <Box sx={{ mt: 2 }}>
            <TextField
              select
              label="Select Color"
              value={selectedColor}
              onChange={handleColorChange}
              variant="outlined"
              fullWidth
            >
              {product.colors && product.colors.length > 0 ? (
                product.colors.map((color) => (
                  <MenuItem key={color} value={color}>
                    {color}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>No colors available</MenuItem>
              )}
            </TextField>
          </Box>

          {/* Quantity Selector */}
          <Box sx={{ mt: 2 }}>
            <TextField
              type="number"
              label="Quantity"
              value={quantity}
              onChange={handleQuantityChange}
              InputProps={{ inputProps: { min: 1 } }}
              variant="outlined"
              fullWidth
            />
          </Box>

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 4 }}
            onClick={handleAddToCart}
            fullWidth
          >
            Add to Cart
          </Button>

          {/* Why Choose DroneYards Section */}
          <Box sx={{ borderTop: '1px solid #e0e0e0', pt: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 ,color:"black"}}>
              Why choose DroneYards?
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CachedIcon color="primary" />
                </ListItemIcon>
                <ListItemText sx={{color:"black"}}
                  primary="7 days Service Centre Replacement"
                  secondary="Enjoy hassle-free replacement within 7 days at our service centers."
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <LocalShippingIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                sx={{color:"black"}}
                  primary="Free Delivery"
                  secondary="Fast and free delivery to your doorstep."
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <SecurityIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                sx={{color:"black"}}
                  primary="1 Year Warranty"
                  secondary="Get 1 year of warranty on all products."
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <PaymentIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                sx={{color:"black"}}
                  primary="Cash/Pay on Delivery"
                  secondary="Convenient payment options, including cash on delivery."
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <VerifiedIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                sx={{color:"black"}}
                  primary="Top Brand"
                  secondary="Purchase from top and trusted brands in the industry."
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <BuildIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                sx={{color:"black"}}
                  primary="Installation Available"
                  secondary="Installation services are available for selected products."
                />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
      <Random />
    </Container>
  );
};

export default ProductDetailsPage;
