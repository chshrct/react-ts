import { combineReducers } from '@reduxjs/toolkit';

import { appReducer } from './app/app-reducer';
import { authReducer } from './auth/auth-reducer';
import { dialogsReducer } from './dialogs/dialogs-reducer';
import { profileReducer } from './profile/profile-reducer';
import { usersReducer } from './users/users-reducer';

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});
