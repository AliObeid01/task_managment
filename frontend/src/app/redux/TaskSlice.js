import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    completedTasks: [],
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    setCompletedTasks: (state, action) => {
      state.completedTasks = action.payload;
    },
    completeTask: (state, action) => {
      const taskId = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        const completedTask = state.tasks.splice(taskIndex, 1)[0];
        state.completedTasks.push(completedTask);
      }
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      state.completedTasks = state.completedTasks.filter(
        (task) => task.id !== taskId
      );
    },
  },
});

export const {
  setTasks,
  setCompletedTasks,
  completeTask,
  deleteTask,
} = tasksSlice.actions;

export const selectTasks = (state) => state.tasks.tasks;
export const selectCompletedTasks = (state) => state.tasks.completedTasks;

export default tasksSlice.reducer;
