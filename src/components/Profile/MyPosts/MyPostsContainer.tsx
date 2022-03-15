import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";


function MyPostsContainer() {
  return (
    <StoreContext.Consumer>
      {(store:any) => {
          const state = store.getState()
          const onPostChange = (text: string) => {
            store.dispatch(updateNewPostActionCreator(text));
          };
          const addPost = () => {
            store.dispatch(addPostActionCreator());
          };
          return (
        <MyPosts
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText}
          onPostChange={onPostChange}
          addPost={addPost}
        />
      )}}
    </StoreContext.Consumer>
  );
}

export default MyPostsContainer;
