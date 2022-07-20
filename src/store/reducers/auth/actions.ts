import { createAsyncThunk } from '@reduxjs/toolkit';
import { FormikHelpers } from 'formik';

import { authApi, LoginInfoType as LoginDataType } from 'shared/api/auth';
import { CONFIRMED } from 'shared/constant';

export const getAuthUserData = createAsyncThunk(
  'auth/getAuthUserData',
  async (payload, { rejectWithValue }) => {
    const response = await authApi.me();
    const { data, resultCode } = response.data;
    const { id, email, login } = data;
    return resultCode === CONFIRMED ? { id, email, login } : rejectWithValue('error');
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (
    payload: {
      loginData: LoginDataType;
      actions: FormikHelpers<{
        email: string;
        password: string;
        rememberMe: boolean;
      }>;
    },
    { dispatch },
  ) => {
    const { actions, loginData } = payload;
    actions.setSubmitting(true);
    const response = await authApi.login(loginData);
    const { resultCode } = response.data;
    if (resultCode === CONFIRMED) dispatch(getAuthUserData());
    actions.setSubmitting(false);
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (payload, { rejectWithValue }) => {
    const response = await authApi.logout();
    const { resultCode } = response.data;
    return resultCode === CONFIRMED
      ? { id: null, email: null, login: null }
      : rejectWithValue('error');
  },
);
