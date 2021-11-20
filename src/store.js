import { configureStore } from '@reduxjs/toolkit'
import blogPostsReducer from './reducers/blogPostsSlice'
import authReducer from './reducers/authSlice'

export default configureStore({
  reducer: {
      blogPosts: blogPostsReducer,
      auth: authReducer
  },
})