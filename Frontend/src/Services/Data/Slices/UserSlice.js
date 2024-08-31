import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user : localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined,
        
    },
    reducers: {
        login: (state, action) => {
        
            state.user = action.payload
            
        },
        logout: (state) => {
            state.user = undefined;
            
        },
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
    },
});

export const {setUser} = userSlice.actions;