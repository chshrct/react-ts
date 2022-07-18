import { createAsyncThunk } from '@reduxjs/toolkit';

import { usersApi } from 'api/users';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (payload: { currentPage: number; pageSize: number }) => {
    const { currentPage, pageSize } = payload;
    const response = await usersApi.getUsers(currentPage, pageSize);

    return { users: response.items, totalUsersCount: response.totalCount };
  },
);

export const followUser = createAsyncThunk(
  'users/followUser',
  async (payload: { userId: number }) => {
    const { userId } = payload;

    await usersApi.follow(userId);

    return { userId };
  },
);

export const unFollowUser = createAsyncThunk(
  'users/unFollowUser',
  async (payload: { userId: number }) => {
    const { userId } = payload;

    await usersApi.unFollow(userId);

    return { userId };
  },
);
