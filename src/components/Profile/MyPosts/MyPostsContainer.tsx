import { Dispatch } from '@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';

import { addPost } from '../../../store/reducers/profile/profile-reducer';

import { ValuesType } from './AddPostForm/AddPostForm';
import MyPosts from './MyPosts';

import { AppRootStateType } from 'store';

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
