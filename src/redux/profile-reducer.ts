const ADD_POST = "ADD-POST";
const UPADATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  posts: [
    { id: 1, message: "hello", likeCount: 10 },
    { id: 2, message: "hiho", likeCount: 5 },
  ],
  newPostText: "LolXd",
};

export const profileReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST:
      let newMessage = {
        id: 3,
        message: state.newPostText,
        likeCount: 0,
      };
      state.posts.push(newMessage);
      state.newPostText = "";
      return state;
    case UPADATE_NEW_POST_TEXT:
      state.newPostText = action.newPostText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (text: string) => ({
  type: UPADATE_NEW_POST_TEXT,
  newPostText: text,
});
