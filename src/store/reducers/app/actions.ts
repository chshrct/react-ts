import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAuthUserData } from '../auth';

export const initializeApp = createAsyncThunk(
  'app/initializeApp',
  async (payload, { dispatch }) => {
    dispatch(getAuthUserData());
  },
);
