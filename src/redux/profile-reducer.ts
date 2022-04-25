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
  profile: any;
};

enum ProfileActionsTypes {
  addPost = "ADD_POST",
  updateNewPostText = "UPDATE_NEW_POST_TEXT",
  setUserProfile = "SET_USER_PROFILE",
}

type AddPostActionType = {
  type: ProfileActionsTypes.addPost;
};
type UpdateNewPostActionType = {
  type: ProfileActionsTypes.updateNewPostText;
  text: string;
};
type SetUserProfileActionType = {
  type: ProfileActionsTypes.setUserProfile;
  profile: any;
};

type RootActionType =
  | AddPostActionType
  | UpdateNewPostActionType
  | SetUserProfileActionType;

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

type ProfileType = {
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
};

export const profileReducer = (
  state: ProfileStateType = initState,
  action: RootActionType
) => {
  switch (action.type) {
    case ProfileActionsTypes.addPost:
      let newMessage = {
        id: 3,
        message: state.newPostText,
        likeCount: 0,
      };
      state.posts.push(newMessage);
      state.newPostText = "";
      return { ...state };
    case ProfileActionsTypes.updateNewPostText:
      state.newPostText = action.text;
      return { ...state };
    case ProfileActionsTypes.setUserProfile:
      return { ...state, profile: action.profile };
    default:
      return { ...state };
  }
};

//Action

export const addPost = (): AddPostActionType => ({
  type: ProfileActionsTypes.addPost,
});

export const updateNewPost = (text: string): UpdateNewPostActionType => ({
  type: ProfileActionsTypes.updateNewPostText,
  text,
});

export const setUserProfile = (
  profile: ProfileType
): SetUserProfileActionType => ({
  type: ProfileActionsTypes.setUserProfile,
  profile,
});

//Thunk

export const getUserProfile =
  (userId: number): ThunkActionType =>
  (dispatch) => {
    profileApi.getUserProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
