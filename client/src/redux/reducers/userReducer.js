// import { LOGOUT, SET_AUTH } from '../types';

// export default function userReducer(state = {}, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case SET_AUTH:
//       return payload;
//     case LOGOUT:
//       return {};
//     default:
//       return state;
//   }
// }

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'user',
  initialState: { loading: true },
  reducers: {
    setAuthUser: (state, action) => action.payload,
    // eslint-disable-next-line no-unused-vars
    logoutUser: (state) => ({}),
  },
});

export const { setAuthUser, logoutUser } = usersSlice.actions;

export default usersSlice.reducer;
