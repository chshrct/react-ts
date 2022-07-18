import { createSlice } from '@reduxjs/toolkit';

import { followUser, getUsers, unFollowUser } from './actions';
import { UsersStateType } from './types';

import { ONE, USER_NOT_FOUND } from 'constant';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowInProgress: [],
  } as UsersStateType,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUsers.pending, (state, { meta }) => {
      const { currentPage } = meta.arg;

      state.isFetching = true;
      state.currentPage = currentPage;
    });

    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      const { totalUsersCount, users } = payload;

      state.isFetching = false;
      state.users = users;
      state.totalUsersCount = totalUsersCount;
    });

    builder.addCase(followUser.pending, (state, { meta }) => {
      const { userId } = meta.arg;

      state.isFollowInProgress.push(userId);
    });

    builder.addCase(followUser.fulfilled, (state, { payload }) => {
      const { userId } = payload;
      const userIndex = state.users.findIndex(user => user.id === userId);
      const userIdIndex = state.isFollowInProgress.findIndex(id => id === userId);

      if (userIndex !== USER_NOT_FOUND) state.users[userIndex].followed = true;

      if (userIdIndex !== USER_NOT_FOUND)
        state.isFollowInProgress.splice(userIdIndex, ONE);
    });

    builder.addCase(unFollowUser.pending, (state, { meta }) => {
      const { userId } = meta.arg;

      state.isFollowInProgress.push(userId);
    });

    builder.addCase(unFollowUser.fulfilled, (state, { payload }) => {
      const { userId } = payload;
      const userIndex = state.users.findIndex(user => user.id === userId);
      const userIdIndex = state.isFollowInProgress.findIndex(id => id === userId);

      if (userIndex !== USER_NOT_FOUND) state.users[userIndex].followed = false;
      if (userIdIndex !== USER_NOT_FOUND)
        state.isFollowInProgress.splice(userIdIndex, ONE);
    });
  },
});

export const usersReducer = usersSlice.reducer;
