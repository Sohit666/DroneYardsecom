// cartslice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define CartItem interface
interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  color: string;
  weight: number;
  dimensions: { width: number; height: number; depth: number };
}

// Ensure `initialState.items` is always initialized as an empty array
const initialState = {
  items: [] as CartItem[],  // Ensure items is always an array
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,  // Always ensure state is properly initialized
  reducers: {
    setCartFromLocalStorage(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload || [];  // Safely assign the payload to state.items
    },
    addToCart(state, action: PayloadAction<CartItem>) {
      // Ensure state.items is initialized correctly before attempting to access it
      if (!state.items) state.items = [];

      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        // Update the quantity of the existing item
        existingItem.quantity += action.payload.quantity;
      } else {
        // Add a new item to the cart
        state.items.push(action.payload);
      }

      // Save updated cart to localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeFromCart(state, action: PayloadAction<{ id: string }>) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    updateQuantity(state, action: PayloadAction<{ id: string, operation: 'increase' | 'decrease' }>) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        if (action.payload.operation === 'increase') {
          existingItem.quantity += 1;
        } else if (action.payload.operation === 'decrease' && existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        }
      }

      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    emptyCart(state) {
      state.items = [];  // Empty the cart
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    }
  },
});

const loadCartFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
};

import { AppDispatch } from './store'; // Ensure you import the correct type for dispatch

export const loadCart = () => (dispatch: AppDispatch) => {
  const cartItems = loadCartFromLocalStorage();
  dispatch(cartSlice.actions.setCartFromLocalStorage(cartItems));
};

export const { addToCart, removeFromCart, setCartFromLocalStorage, updateQuantity, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
