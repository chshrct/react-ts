import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { addPost } from "../../../redux/profile-reducer";
import { AppRootStateType } from "../../../redux/redux-store";
import { ValuesType } from "./AddPostForm/AddPostForm";
import MyPosts from "./MyPosts";

const mapStateToProps = (state: AppRootStateType) => {
  return {
    posts: state.profilePage.posts,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addPost: (value: ValuesType) => {
      dispatch(addPost(value));
    },
  };
};
const connector = connect(mapStateToProps, mapDispatchToProps);
export type MyPostsProps = ConnectedProps<typeof connector>;
const MyPostsContainer = connector(MyPosts);

export default MyPostsContainer;
