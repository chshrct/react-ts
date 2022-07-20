import { createAsyncThunk } from '@reduxjs/toolkit';

import { profileApi } from 'shared/api/profile';
import { CONFIRMED } from 'shared/constant';

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async (payload: { userId: number }) => {
    const { userId } = payload;
    const response = await profileApi.getUserProfile(userId);
    const profile = response.data;

    return { profile };
  },
);

export const getStatus = createAsyncThunk(
  'profile/getStatus',
  async (payload: { userId: number }) => {
    const { userId } = payload;
    const response = await profileApi.getStatus(userId);
    const status = response.data;

    return { status };
  },
);

export const updateStatus = createAsyncThunk(
  'profile/updateStatus',
  async (payload: { status: string }, { rejectWithValue }) => {
    const { status } = payload;
    const response = await profileApi.updateStatus(status);
    const { resultCode } = response.data;

    return resultCode === CONFIRMED ? { status } : rejectWithValue('error');
  },
);
