import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: null,
        username: null,
        token : null,
    },
    reducers: {
        login: (state, action) => {
        
            state.id = action.payload.id;
            state.username = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});