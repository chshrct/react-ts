import { postType } from "../Profile";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsContainerPropsType = {
  store: any;
};

function MyPostsContainer(props: MyPostsContainerPropsType) {
  const state = props.store.getState();

  const onPostChange = (text: string) => {
    props.store.dispatch(updateNewPostActionCreator(text));
  };
  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  return (
    <MyPosts
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
      onPostChange={onPostChange}
      addPost={addPost}
    />
  );
}

export default MyPostsContainer;
