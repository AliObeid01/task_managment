import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './authApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },

});
