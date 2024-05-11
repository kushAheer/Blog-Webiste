import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './Slices/UserSlice';

// Load state from localStorage
const preloadedState = {
  counter: JSON.parse(localStorage.getItem('user')) || {},
};

const store = configureStore({
  reducer: {
    counter: userSlice.reducer,
  },
  preloadedState,
});

// Save state to localStorage whenever it changes


export default store;