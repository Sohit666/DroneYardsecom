// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Ensure the import matches the file name

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
