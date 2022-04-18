import { Reducer } from "redux";

enum ActionTypes {
  SET_USER_DATA = "SET_USER_DATA",
}

type SetUserDataAction = {
  type: ActionTypes.SET_USER_DATA;
  data: {
    id: number;
    email: string;
    login: string;
  };
};

type RootAction = SetUserDataAction;

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

const authReducer: Reducer<StateType, RootAction> = (
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

export const setUserData = (userId: number, email: string, login: string) => ({
  type: ActionTypes.SET_USER_DATA,
  data: {
    userId,
    email,
    login,
  },
});

export default authReducer;
