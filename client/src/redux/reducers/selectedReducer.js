/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const selectedSlice = createSlice({
  name: 'selected',
  initialState: 1,
  reducers: {
    setSelected: (state, action) => action.payload,
  },
});

export const { setSelected } = selectedSlice.actions;

export default selectedSlice.reducer;
