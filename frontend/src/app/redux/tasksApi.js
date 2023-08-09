import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const API_BASE_URL = 'http://127.0.0.1:3000';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsaW9iZWlkQGdtYWlsLmNvbSIsImlhdCI6MTY5MTYwOTE0NywiZXhwIjoxNjkxNjQ1MTQ3fQ.d4YRGGH8_XMeS10bKDQkG7h2iIuaQIKmR4XaunOjEZM';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${ACCESS_TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTasks: builder.query({
        query: () => 'user/tasks',
    }),
    addTask: builder.mutation({
      query: (newTask) => ({
        url: 'tasks',
        method: 'POST',
        body: newTask,
      }),
    }),
    completeTask: builder.mutation({
      query: (taskId) => ({
        url: `tasks/${taskId}/complete`,
        method: 'PATCH',
      }),
    }),
    deleteTask: builder.mutation({
      query: (taskId) => ({
        url: `tasks/${taskId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetTasksQuery, useAddTaskMutation, useCompleteTaskMutation, useDeleteTaskMutation } =
  tasksApi;
