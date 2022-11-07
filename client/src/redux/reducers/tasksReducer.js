/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    setTasks: (state, action) => action.payload,
    addTask: (state, action) => [...state, action.payload],
    deleteTask: (state, action) => state.filter((task) => task.id !== action.payload),
    updateTask: (state, action) => state.map((task) => (task.id === action.payload.id ? action.payload : task)),
    checked: (state, action) => state.map((el) => {
      if (el.id === action.payload) {
        return { ...el, checked: !el.checked };
      }
      return el;
    }),
  },
});

export const {
  setTasks, deleteTask, addTask, updateTask, checked,
} = tasksSlice.actions;

export default tasksSlice.reducer;
