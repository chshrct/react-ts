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

export const addPost = (): AddPostActionType => ({
  type: ProfileActionsTypes.addPost,
});

export const updateNewPost = (text: string): UpdateNewPostActionType => ({
  type: ProfileActionsTypes.updateNewPostText,
  text,
});

export const setUserProfile = (profile: any): SetUserProfileActionType => ({
  type: ProfileActionsTypes.setUserProfile,
  profile,
});
