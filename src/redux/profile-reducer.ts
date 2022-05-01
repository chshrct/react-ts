import { ThunkAction } from "redux-thunk";
import { profileApi } from "../api/api";
import { AppStateType } from "./redux-store";

type MessageType = {
  id: number;
  message: string;
  likeCount: number;
};

type ProfileStateType = {
  posts: MessageType[];
  newPostText: string;
  profile: ProfileType | null;
  status: string;
};

enum ProfileActionsTypes {
  ADD_POST = "ADD_POST",
  UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT",
  SET_PROFILE = "SET_USER_PROFILE",
  SET_STATUS = "SET_USER_STATUS",
}

type AddPostActionType = {
  type: ProfileActionsTypes.ADD_POST;
};
type UpdateNewPostActionType = {
  type: ProfileActionsTypes.UPDATE_NEW_POST_TEXT;
  text: string;
};
type SetUserProfileActionType = {
  type: ProfileActionsTypes.SET_PROFILE;
  profile: any;
};

type setUserStatusActionType = {
  type: ProfileActionsTypes.SET_STATUS;
  status: string;
};

type RootActionType =
  | AddPostActionType
  | UpdateNewPostActionType
  | SetUserProfileActionType
  | setUserStatusActionType;

type ThunkActionType = ThunkAction<void, AppStateType, unknown, RootActionType>;
type contacts = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
type photos = {
  small: string;
  large: string;
};

export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: contacts;
  photos: photos;
};

const initState: ProfileStateType = {
  posts: [
    { id: 1, message: "hello", likeCount: 10 },
    { id: 2, message: "hiho", likeCount: 5 },
  ],
  newPostText: "LolXd",
  profile: null,
  status: "",
};

export const profileReducer = (
  state: ProfileStateType = initState,
  action: RootActionType
) => {
  switch (action.type) {
    case ProfileActionsTypes.ADD_POST:
      let newMessage = {
        id: 3,
        message: state.newPostText,
        likeCount: 0,
      };
      state.posts.push(newMessage);
      state.newPostText = "";
      return { ...state };
    case ProfileActionsTypes.UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return { ...state };
    case ProfileActionsTypes.SET_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return { ...state };
    case ProfileActionsTypes.SET_STATUS:
      return { ...state, status: action.status };
  }
};

//Action

export const addPost = (): AddPostActionType => ({
  type: ProfileActionsTypes.ADD_POST,
});

export const updateNewPost = (text: string): UpdateNewPostActionType => ({
  type: ProfileActionsTypes.UPDATE_NEW_POST_TEXT,
  text,
});

export const setProfile = (
  profile: ProfileType
): SetUserProfileActionType => ({
  type: ProfileActionsTypes.SET_PROFILE,
  profile,
});

export const setStatus = (status: string): setUserStatusActionType => ({
  type: ProfileActionsTypes.SET_STATUS,
  status,
});

//Thunk

export const getProfile =
  (userId: number): ThunkActionType =>
  (dispatch) => {
    profileApi.getUserProfile(userId).then((response) => {
      dispatch(setProfile(response.data));
    });
  };

export const getStatus =
  (userId: number): ThunkActionType =>
  (dispatch) => {
    profileApi.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };

export const updateStatus =
  (status: string): ThunkActionType =>
  (dispatch) => {
    profileApi.updateStatus(status).then(response=>{
      if(response.data.resultCode===0) dispatch(setStatus(status))
    })
  };
