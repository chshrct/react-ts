import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getProfile, getStatus, updateStatus } from './actions';
import { ProfileStateType } from './types';

import { ValuesType } from 'pages/Profile/MyPosts/AddPostForm/AddPostForm';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    posts: [
      { id: 1, message: 'hello', likeCount: 10 },
      { id: 2, message: 'hiho', likeCount: 5 },
    ],
    profile: null,
    status: '',
  } as ProfileStateType,
  reducers: {
    addPost(state, { payload }: PayloadAction<ValuesType>) {
      const { postMessage } = payload;

      state.posts.push({
        id: 3,
        message: postMessage,
        likeCount: 0,
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      const { profile } = payload;
      state.profile = profile;
    });

    builder.addCase(getStatus.fulfilled, (state, { payload }) => {
      const { status } = payload;
      state.status = status;
    });

    builder.addCase(updateStatus.fulfilled, (state, { payload }) => {
      const { status } = payload;
      state.status = status;
    });
  },
});

export const profileReducer = profileSlice.reducer;
export const { addPost } = profileSlice.actions;
