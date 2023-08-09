import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import { tasksApi } from './tasksApi';
import tasksReducer from './tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksApi.middleware,authApi.middleware),

});
