import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import usersReducer from "./users-reducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

let store = createStore(
  rootReducer,
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
