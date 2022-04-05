import { connect } from "react-redux";
import {
  addPost,
  updateNewPost,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const mapStateToProps = (state: any) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onPostChange: (text: string) => {
      dispatch(updateNewPost(text));
    },
    addPost:()=>{
      dispatch(addPost())
    }
  };
};

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
