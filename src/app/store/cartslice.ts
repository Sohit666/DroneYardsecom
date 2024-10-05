import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from './store'; // Adjust the import according to your file structure

interface CartItem {
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string; // Include image property
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
      const existingItem = state.items.find(item => item.name === action.payload.name);

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
    removeFromCart(state, action: PayloadAction<{ name: string }>) {
      state.items = state.items.filter(item => item.name !== action.payload.name);
      
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
