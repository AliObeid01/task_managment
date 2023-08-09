import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3000' }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (newUser) => ({
        url: 'auth/signup',
        method: 'POST',
        body: newUser,
      }),
    }),
    signin: builder.mutation({
      query: (credentials) => ({
        url: 'auth/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useSignupMutation, useSigninMutation } = authApi;
