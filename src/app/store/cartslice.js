import { createSlice } from '@reduxjs/toolkit';

const getInitialCartItems = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
  }
  return [];
};

const initialState = {
  cartItems: getInitialCartItems(),
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempProduct);
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;

      // Save to local storage
      if (typeof window !== 'undefined') {
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }
    },
    removeFromCart: (state, action) => {
      const nextCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      const removedItem = state.cartItems.find(item => item.id === action.payload.id);
      
      if (removedItem) {
        state.totalQuantity -= removedItem.quantity;
        state.totalPrice -= removedItem.price * removedItem.quantity;
      }
      state.cartItems = nextCartItems;

      // Save to local storage
      if (typeof window !== 'undefined') {
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      // Clear local storage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('cartItems');
      }
    }
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
