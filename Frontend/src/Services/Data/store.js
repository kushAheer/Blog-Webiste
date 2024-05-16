import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './Slices/UserSlice';
import { postSlice } from './Slices/PostSlice';
// Load state from localStorage
const preloadedState = {
  counter: JSON.parse(localStorage.getItem('user')) || {},
};

const store = configureStore({
  reducer: {
    counter: userSlice.reducer,
    counter: postSlice.reducer,
  },
  preloadedState,
});

// Save state to localStorage whenever it changes


export default store;