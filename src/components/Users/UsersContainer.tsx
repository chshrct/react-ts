import { Component, ReactNode } from 'react';

import { connect, ConnectedProps } from 'react-redux';

import { AppRootStateType } from '../../redux/redux-store';
import {
  followUser,
  getUsers,
  setFollowInProgress,
  unFollowUser,
} from '../../redux/users-reducer';
import {
  selectCurrentPage,
  selectIsFetching,
  selectIsFollowInProgress,
  selectPageSize,
  selectTotalUsersCount,
  selectUsers,
} from '../../redux/users-selectors';
import Preloader from '../../shared/Preloader/Preloader';

import Users from './Users';

class UsersAPIComponent extends Component<PropsFromRedux> {
  componentDidMount(): void {
    const { getUsers: getUsersProp, currentPage, pageSize } = this.props;
    getUsersProp(currentPage, pageSize);
  }

  onPageSelect = (page: number): void => {
    const { getUsers: getUsersProp, pageSize } = this.props;
    getUsersProp(page, pageSize);
  };

  render(): ReactNode {
    const {
      isFetching,
      isFollowInProgress,
      unFollowUser: unFollowUserProp,
      followUser: followUserProp,
      currentPage,
      pageSize,
      totalUsersCount,
      users,
    } = this.props;
    return (
      <>
        {isFetching && <Preloader />}
        <Users
          isFollowInProgress={isFollowInProgress}
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageSelect={this.onPageSelect}
          users={users}
          unFollowUser={unFollowUserProp}
          followUser={followUserProp}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppRootStateType) =>
  ({
    users: selectUsers(state),
    pageSize: selectPageSize(state),
    totalUsersCount: selectTotalUsersCount(state),
    currentPage: selectCurrentPage(state),
    isFetching: selectIsFetching(state),
    isFollowInProgress: selectIsFollowInProgress(state),
  } as const);

const mapDispatchToProps = {
  followUser,
  unFollowUser,
  setFollowInProgress,
  getUsers,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
const UsersContainer = connector(UsersAPIComponent);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default UsersContainer;
