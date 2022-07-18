import { createSlice } from '@reduxjs/toolkit';

import { getAuthUserData, logout } from './actions';
import { AuthStateType } from './types';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    id: null,
    email: null,
    login: null,
    isAuth: false,
  } as AuthStateType,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAuthUserData.fulfilled, (state, action) => {
      Object.assign(state, action.payload);
      state.isAuth = true;
    });

    builder.addCase(logout.fulfilled, (state, action) => {
      Object.assign(state, action.payload);
      state.isAuth = false;
    });
  },
});

export const authReducer = authSlice.reducer;
