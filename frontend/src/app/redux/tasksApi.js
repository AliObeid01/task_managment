import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => 'tasks',
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
