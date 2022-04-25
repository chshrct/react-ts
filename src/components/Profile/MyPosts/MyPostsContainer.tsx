import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addPost, updateNewPost } from "../../../redux/profile-reducer";
import { AppStateType } from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onPostChange: (text: string) => {
      dispatch(updateNewPost(text));
    },
    addPost: () => {
      dispatch(addPost());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
