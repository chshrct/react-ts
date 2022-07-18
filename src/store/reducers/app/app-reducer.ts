import { createSlice } from '@reduxjs/toolkit';

import { initializeApp } from './actions';
import { AppStateType } from './types';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isInitialized: false,
  } as AppStateType,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(initializeApp.fulfilled, state => {
      state.isInitialized = true;
    });
  },
});

export const appReducer = appSlice.reducer;
