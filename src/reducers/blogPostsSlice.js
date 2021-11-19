// import createSlice
import { createSlice } from '@reduxjs/toolkit';

export const blogPostsSlice =createSlice({
    name: 'blogPosts',
    initialState: {
        allPosts: []
    },
    reducers: {
        fetchAllPosts: (state, action) => {
        }
    }
});

export const { fetchAllPosts } = blogPostsSlice.actions;

export default blogPostsSlice.reducer;
