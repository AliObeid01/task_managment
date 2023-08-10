import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import { tasksApi } from './tasksApi';

export const store = configureStore({
  reducer: {
    [tasksApi.reducerPath]: tasksApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksApi.middleware,authApi.middleware),

});
