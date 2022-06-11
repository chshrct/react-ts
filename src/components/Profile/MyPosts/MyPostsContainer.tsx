import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import { addPost } from '../../../redux/profile-reducer';
import { AppRootStateType } from '../../../redux/redux-store';

import { ValuesType } from './AddPostForm/AddPostForm';
import MyPosts from './MyPosts';

const mapStateToProps = (state: AppRootStateType) =>
  ({
    posts: state.profilePage.posts,
  } as const);

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({
    addPost: (value: ValuesType) => {
      dispatch(addPost(value));
    },
  } as const);

const connector = connect(mapStateToProps, mapDispatchToProps);
export type MyPostsProps = ConnectedProps<typeof connector>;
const MyPostsContainer = connector(MyPosts);

export default MyPostsContainer;
