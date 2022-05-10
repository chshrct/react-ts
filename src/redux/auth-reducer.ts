import { Reducer } from "redux";
import { authApi, LoginInfoType } from "../api/api";
import { ThunkApp } from "./redux-store";

enum ActionTypes {
  SET_USER_DATA = "SET_USER_DATA",
}

type SetUserDataAction = {
  type: ActionTypes.SET_USER_DATA;
  data: {
    userId: number | null;
    email: string | null;
    login: string | null;
  };
};

export type RootAuthAction = SetUserDataAction;
type StateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

const initialState: StateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer: Reducer<StateType, RootAuthAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.SET_USER_DATA:
      return { ...state, ...action.data, isAuth: !!action.data.userId };
    default:
      return state;
  }
};

export const setUserData = (
  userId: number | null,
  email: string | null,
  login: string | null
): SetUserDataAction => ({
  type: ActionTypes.SET_USER_DATA,
  data: {
    userId,
    email,
    login,
  },
});

//Thunk

export const auth = (): ThunkApp => (dispatch) => {
  authApi.me().then((response) => {
    response.data.resultCode === 0 &&
      dispatch(
        setUserData(
          response.data.data.id,
          response.data.data.email,
          response.data.data.login
        )
      );
  });
};
export const login =
  (loginInfo: LoginInfoType): ThunkApp =>
  (dispatch) => {
    authApi.login(loginInfo).then((response) => {
      response.data.resultCode === 0 && dispatch(auth());
    });
  };

export const logout = (): ThunkApp => (dispatch) => {
  authApi.logout().then((response) => {
    response.data.resultCode === 0 && dispatch(setUserData(null, null, null));
  });
};

export default authReducer;
