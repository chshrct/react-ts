import { Component, ReactNode } from 'react';

import { connect, ConnectedProps } from 'react-redux';

import {
  selectCurrentPage,
  selectIsFetching,
  selectIsFollowInProgress,
  selectPageSize,
  selectTotalUsersCount,
  selectUsers,
} from '../../store/reducers/users/users-selectors';

import Users from './Users';

import Preloader from 'shared/ui/Preloader/Preloader';
import { AppRootStateType, followUser, getUsers, unFollowUser } from 'store';

class UsersAPIComponent extends Component<PropsFromRedux> {
  componentDidMount(): void {
    const { getUsers: getUsersProp, currentPage, pageSize } = this.props;
    getUsersProp({ currentPage, pageSize });
  }

  onPageSelect = (currentPage: number): void => {
    const { getUsers: getUsersProp, pageSize } = this.props;
    getUsersProp({ currentPage, pageSize });
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
  getUsers,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
const UsersContainer = connector(UsersAPIComponent);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default UsersContainer;
