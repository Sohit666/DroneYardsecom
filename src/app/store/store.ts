// store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartslice';

const store = configureStore({
  reducer: {
    cart: cartReducer,  // Ensure the cartReducer is added here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
