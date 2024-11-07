"use client";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { RootState } from '../../store/store'; // Correctly import RootState
import { removeFromCart } from '../../store/cartslice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveFromCart = (id: string) => {
      dispatch(removeFromCart({ id }));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom color="textPrimary" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6" color="textSecondary" align="center">
          Your cart is empty.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {cartItems.map(item => (
            <Grid item xs={12} sm={6} md={4} key={item.name}>
              <Box
                sx={{
                  border: '2px solid black',
                  borderRadius: '8px',
                  padding: '15px',
                  backgroundColor: 'white',
                }}
              >
                <img
                  src={item.image} // Display the product image
                  alt={item.name}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
                <Typography variant="h6" color="textPrimary" sx={{ fontWeight: 'bold' }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Price: ₹{item.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Quantity: {item.quantity}
                </Typography>
                <Typography variant="body1" color="textPrimary" sx={{ fontWeight: 'bold' }}>
                  Total: ₹{item.price * item.quantity}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => handleRemoveFromCart(item.id)}
                  sx={{ marginTop: '10px', backgroundColor: 'black', color: 'white' }}
                >
                  Remove
                </Button>
              </Box>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant="h6" color="textPrimary" align="right" sx={{ fontWeight: 'bold' }}>
              Total Price: ₹{calculateTotalPrice()}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Cart;
