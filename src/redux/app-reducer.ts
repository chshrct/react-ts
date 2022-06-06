import { getAuthUserData } from "./auth-reducer";
import { ThunkApp } from "./redux-store";

enum AppActionsTypes {
  initializedSuccessfully = "APP/INITIALIZED_SUCCESSFULLY",
}

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action: RootAppAction) => {
  switch (action.type) {
    case AppActionsTypes.initializedSuccessfully:
      return { ...state, initialized: true };

    default:
      return state;
  }
};

//actions

export const setSuccessfulInitialization = () =>
  ({
    type: AppActionsTypes.initializedSuccessfully,
  } as const);

//thunks

export const initializeApp = (): ThunkApp => (dispatch) => {
  //@ts-ignore
  dispatch(getAuthUserData()).then(() => {
    dispatch(setSuccessfulInitialization());
  });
};

export default appReducer;

//types

type setSuccessfulInitializationActionType = ReturnType<
  typeof setSuccessfulInitialization
>;

export type RootAppAction = setSuccessfulInitializationActionType;
