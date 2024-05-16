import {createSlice} from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        file : {}
    },
    reducers: {
        addFile: (state, action) => {
            state.file = action.payload
        },
    },
});