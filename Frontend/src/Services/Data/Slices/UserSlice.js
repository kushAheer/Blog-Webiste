import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user : {},
        token : null,
    },
    reducers: {
        login: (state, action) => {
        
            state.user = action.payload
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.user = {};
            state.token = null;
        },
    },
});