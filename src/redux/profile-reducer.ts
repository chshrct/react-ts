import { ValuesType } from '../components/Profile/MyPosts/AddPostForm/AddPostForm';

import { ThunkApp } from './redux-store';

import { profileApi } from 'api/profile';
import { ZERO } from 'constant';

type MessageType = {
  id: number;
  message: string;
  likeCount: number;
};

export type ProfileStateType = {
  posts: MessageType[];
  profile: ProfileType | null;
  status: string;
};

enum ProfileActionsTypes {
  ADD_POST = 'ADD_POST',
  UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT',
  SET_PROFILE = 'SET_USER_PROFILE',
  SET_STATUS = 'SET_USER_STATUS',
}

type AddPostActionType = {
  type: ProfileActionsTypes.ADD_POST;
  value: ValuesType;
};
type SetUserProfileActionType = {
  type: ProfileActionsTypes.SET_PROFILE;
  profile: any;
};

type setUserStatusActionType = {
  type: ProfileActionsTypes.SET_STATUS;
  status: string;
};

export type RootProfileAction =
  | AddPostActionType
  | SetUserProfileActionType
  | setUserStatusActionType;

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
    { id: 1, message: 'hello', likeCount: 10 },
    { id: 2, message: 'hiho', likeCount: 5 },
  ],
  profile: null,
  status: '',
};

export const profileReducer = (
  state: ProfileStateType = initState,
  action: RootProfileAction,
): ProfileStateType => {
  switch (action.type) {
    case ProfileActionsTypes.ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 3,
            message: action.value.postMessage,
            likeCount: 0,
          },
        ],
      };
    case ProfileActionsTypes.SET_PROFILE:
      return { ...state, profile: action.profile };

    case ProfileActionsTypes.SET_STATUS:
      return { ...state, status: action.status };
    default:
      return { ...state };
  }
};

// action

export const addPost = (value: ValuesType): AddPostActionType => ({
  type: ProfileActionsTypes.ADD_POST,
  value,
});

export const setProfile = (profile: ProfileType): SetUserProfileActionType => ({
  type: ProfileActionsTypes.SET_PROFILE,
  profile,
});

export const setStatus = (status: string): setUserStatusActionType => ({
  type: ProfileActionsTypes.SET_STATUS,
  status,
});

// thunk

export const getProfile =
  (userId: number): ThunkApp =>
  dispatch => {
    profileApi.getUserProfile(userId).then(response => {
      dispatch(setProfile(response.data));
    });
  };

export const getStatus =
  (userId: number): ThunkApp =>
  dispatch => {
    profileApi.getStatus(userId).then(response => {
      dispatch(setStatus(response.data));
    });
  };

export const updateStatus =
  (status: string): ThunkApp =>
  dispatch => {
    profileApi.updateStatus(status).then(response => {
      if (response.data.resultCode === ZERO) dispatch(setStatus(status));
    });
  };
