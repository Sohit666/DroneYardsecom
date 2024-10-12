import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from './store'; // Adjust the import according to your file structure
import { Product } from '../types/product'; // Adjust the import based on your folder structure

// Define the CartItem based on Product
interface CartItem {
  id: string; // Ensure the id matches the product structure
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  color: string;
  weight: number; // Added if relevant
  dimensions: { width: number; height: number; depth: number }; // Adjust based on your product structure
}

// Initial state without loading from localStorage
const initialState = {
  items: [] as CartItem[], // Start with an empty cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartFromLocalStorage(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload; // Set the cart items from localStorage
    },
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        // Update the quantity of the existing item
        existingItem.quantity += action.payload.quantity;
      } else {
        // Add a new item to the cart
        state.items.push(action.payload);
      }

      // Save the updated cart to local storage
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromCart(state, action: PayloadAction<{ id: string }>) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      
      // Save the updated cart to local storage
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
  },
});

// Load cart items from local storage on client side
const loadCartFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
};

// This action can be dispatched from a component to set the cart items after initial rendering
export const loadCart = () => (dispatch: AppDispatch) => {
  const cartItems = loadCartFromLocalStorage();
  dispatch(cartSlice.actions.setCartFromLocalStorage(cartItems));
};

export const { addToCart, removeFromCart, setCartFromLocalStorage } = cartSlice.actions;
export default cartSlice.reducer;
