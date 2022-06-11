import { useDispatch } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

import appReducer, { RootAppAction } from './app-reducer';
import authReducer, { RootAuthAction } from './auth-reducer';
import { dialogsReducer, RootDialogsAction } from './dialogs-reducer';
import { profileReducer, RootProfileAction } from './profile-reducer';
import usersReducer, { RootUsersAction } from './users-reducer';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppRootActionType =
  | RootUsersAction
  | RootProfileAction
  | RootDialogsAction
  | RootAuthAction
  | RootAppAction;
export type ThunkApp = ThunkAction<void, AppRootStateType, unknown, AppRootActionType>;
export type TypedDispatch = ThunkDispatch<AppRootStateType, unknown, AppRootActionType>;

export const useAppDispatch = (): TypedDispatch => useDispatch<TypedDispatch>();

export default store;
