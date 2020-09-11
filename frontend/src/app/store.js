import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import authReducer from '../features/auth/authSlice';

export default configureStore({
  reducer: {
    auth:authReducer
  },
  middleware:[...getDefaultMiddleware(), logger]
});