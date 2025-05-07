import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './Slices/UserSlice';
import { postSlice } from './Slices/PostSlice';


const store = configureStore({
  reducer: {
    users : userSlice.reducer,
    posts: postSlice.reducer,
  },
  
});




export default store;