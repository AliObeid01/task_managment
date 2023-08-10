import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token = localStorage.getItem('token');
const API_BASE_URL = 'http://127.0.0.1:3000';
const ACCESS_TOKEN = token;

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
    getTask: builder.mutation({
      query: (task_id) => ({
        url: 'user/task',
        method: 'POST',
        body: { task_id: task_id},
      }),
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
        body: { task_id: task_id},
      }),
    }),
    deleteTask: builder.mutation({
      query: (task_id) => ({
        url: 'user/delete_task',
        method: 'POST',
        body:{ task_id: task_id}
      }),
    }),
    editTask: builder.mutation({
      query: (editTask) => ({
        url: 'user/edit_task',
        method: 'POST',
        body: editTask
      }),
    }),
    filterTasks: builder.mutation({
      query: (due_date) => ({
        url: 'user/filter',
        method: 'POST',
        body: { due_date: due_date}
      }),
    }),
    getCompletedTasks: builder.mutation({
      query: () => ({
        url: 'user/completed_tasks',
      }),
    }),
  }),
});

export const { useGetTasksMutation, useGetTaskMutation, useAddTaskMutation, useCompleteTaskMutation, useDeleteTaskMutation, useEditTaskMutation, useFilterTasksMutation, useGetCompletedTasksMutation } =
  tasksApi;
