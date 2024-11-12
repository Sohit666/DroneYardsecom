"use client";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, Button, Box, Grid, Paper, IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { RootState } from '../../store/store'; 
import { removeFromCart, updateQuantity,  emptyCart } from '../../store/cartslice';
import { useState, useEffect } from 'react';
import { Add, Remove } from '@mui/icons-material';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [open, setOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<string | null>(null);

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart({ id }));
    setOpen(false);
  };

  const handleOpenDialog = (id: string) => {
    setItemToRemove(id);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setItemToRemove(null);
  };

  const handleQuantityChange = (id: string, operation: 'increase' | 'decrease') => {
    dispatch(updateQuantity({ id, operation }));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  // Persist cart data in localStorage when the cartItems change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Container maxWidth="lg" sx={{ padding: { xs: 2, sm: 4 } }}>
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
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Paper elevation={3} sx={{
                padding: '20px',
                borderRadius: '12px',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                boxShadow: '0px 6px 12px rgba(0,0,0,0.1)',
              }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover' }}
                  />
                  <Typography variant="h6" color="textPrimary" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '5px' }}>
                    Price: ₹{item.price}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: '15px' }}>
                    <IconButton
                      onClick={() => handleQuantityChange(item.id, 'decrease')}
                      sx={{ backgroundColor: '#f0f0f0', '&:hover': { backgroundColor: '#e0e0e0' } }}
                    >
                      <Remove />
                    </IconButton>
                    <Typography variant="body2" color="textSecondary">{item.quantity}</Typography>
                    <IconButton
                      onClick={() => handleQuantityChange(item.id, 'increase')}
                      sx={{ backgroundColor: '#f0f0f0', '&:hover': { backgroundColor: '#e0e0e0' } }}
                    >
                      <Add />
                    </IconButton>
                  </Box>
                  <Typography variant="body1" color="textPrimary" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                    Total: ₹{item.price * item.quantity}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => handleOpenDialog(item.id)}
                    sx={{
                      marginTop: '10px',
                      backgroundColor: '#d32f2f',
                      '&:hover': { backgroundColor: '#c62828' },
                      color: 'white',
                      borderRadius: '20px',
                      fontWeight: 'bold',
                    }}
                  >
                    Remove
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
          
          {/* Total Price and Empty Cart */}
          <Grid item xs={12}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
            }}>
              <Typography variant="h5" color="textPrimary" sx={{ fontWeight: 'bold', marginRight: '20px' }}>
                Total Price: ₹{calculateTotalPrice()}
              </Typography>
              <Button
                variant="contained"
                onClick={handleEmptyCart}
                sx={{
                  backgroundColor: '#1976d2',
                  '&:hover': { backgroundColor: '#1565c0' },
                  color: 'white',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                }}
              >
                Empty Cart
              </Button>
            </Box>
          </Grid>

          {/* Checkout Button */}
          <Grid item xs={12}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '20px',
            }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#4caf50',
                  '&:hover': { backgroundColor: '#388e3c' },
                  color: 'white',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  padding: '10px 20px',
                }}
              >
                Proceed to Checkout
              </Button>
            </Box>
          </Grid>
        </Grid>
      )}

      {/* Dialog for Item Removal Confirmation */}
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Remove Item</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Are you sure you want to remove this item from your cart?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={() => itemToRemove && handleRemoveFromCart(itemToRemove)} color="secondary">
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Cart;
