import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartslice';

// Create a store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

// Create a type for the dispatch function
export type AppDispatch = typeof store.dispatch;

export default store;
