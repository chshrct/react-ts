import { Reducer } from "redux";
import { ThunkAction } from "redux-thunk";
import { authApi } from "../api/api";
import { AppStateType } from "./redux-store";

enum ActionTypes {
  SET_USER_DATA = "SET_USER_DATA",
}

type SetUserDataAction = {
  type: ActionTypes.SET_USER_DATA;
  data: {
    userId: number;
    email: string;
    login: string;
  };
};

type RootActionType = SetUserDataAction;
type ThunkActionType = ThunkAction<void, AppStateType, unknown, RootActionType>;

type StateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth:boolean;
};

const initialState: StateType = {
  userId: null,
  email: null,
  login: null,
  isAuth:false,
};

const authReducer: Reducer<StateType, RootActionType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.SET_USER_DATA:
      return {...state, ...action.data , isAuth:true};
    default:
      return state;
  }
};

export const setUserData = (userId: number, email: string, login: string):SetUserDataAction => ({
  type: ActionTypes.SET_USER_DATA,
  data: {
    userId,
    email,
    login,
  },
});


//Thunk

export const AuthUser = ():ThunkActionType => dispatch => {
  authApi.me().then((resolve) => {
    resolve.data.resultCode === 0 &&
      dispatch(setUserData(
        resolve.data.data.id,
        resolve.data.data.email,
        resolve.data.data.login
      ))
  });
}

export default authReducer;
