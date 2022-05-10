import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import authReducer, { RootAuthAction } from "./auth-reducer";
import { dialogsReducer, RootDialogsAction } from "./dialogs-reducer";
import { profileReducer, RootProfileAction } from "./profile-reducer";
import usersReducer, { RootUsersAction } from "./users-reducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type RootAction =
  | RootUsersAction
  | RootProfileAction
  | RootDialogsAction
  | RootAuthAction;
export type ThunkApp = ThunkAction<void, AppState, unknown, RootAction>;

export default store;
