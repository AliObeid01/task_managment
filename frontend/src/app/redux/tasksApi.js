import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'http://127.0.0.1:3000';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsaW9iZWlkQGdtYWlsLmNvbSIsImlhdCI6MTY5MTY1MTMxOCwiZXhwIjoxNjkxNjg3MzE4fQ.O165d7geDGpv48s2ctwlQKaansw-DUKytqkdNsH_VeI';

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
    getTasks: builder.mutation({
        query: () => 'user/tasks',
    }),
    addTask: builder.mutation({
      query: (newTask) => ({
        url: 'user/add_task',
        method: 'POST',
        body: newTask,
      }),
    }),
    completeTask: builder.mutation({
      query: (task_id) => ({
        url: 'user/complete_task',
        method: 'POST',
        body: {task_id},
      }),
    }),
    deleteTask: builder.mutation({
      query: (task_id) => ({
        url: 'user/delete_task',
        method: 'POST',
        body:{ task_id: task_id}
      }),
    }),
  }),
});

export const { useGetTasksMutation, useAddTaskMutation, useCompleteTaskMutation, useDeleteTaskMutation } =
  tasksApi;
