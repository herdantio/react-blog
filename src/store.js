import { configureStore } from '@reduxjs/toolkit'
import blogPostsReducer from './reducers/blogPostsSlice'

export default configureStore({
  reducer: {
      blogPosts: blogPostsReducer,
  },
})