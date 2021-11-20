// import createSlice
import { createSlice } from '@reduxjs/toolkit';

export const authSlice =createSlice({
    name: 'blogPosts',
    initialState: {
        allPosts: []
    },
    reducers: {
        fetchAllPosts: (state, action) => {
        }
    }
});

export const { fetchAllPosts } = authSlice.actions;

export default authSlice.reducer;