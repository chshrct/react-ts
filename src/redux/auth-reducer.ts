import { Reducer } from "redux";
import { ThunkAction } from "redux-thunk";
import { authApi, LoginInfoType } from "../api/api";
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

export const authUser = ():ThunkActionType => dispatch => {
  authApi.me().then((response) => {
    response.data.resultCode === 0 &&
      dispatch(setUserData(
        response.data.data.id,
        response.data.data.email,
        response.data.data.login
      ))
  });
}
export const loginUser = (loginInfo:LoginInfoType):ThunkActionType => dispatch => {
  authApi.login(loginInfo).then(response=>{
    response.data.resultCode === 0 &&
    dispatch(setUserData(
      response.data.data.id,
      response.data.data.email,
      response.data.data.login
    ))
  })
}

export default authReducer;
