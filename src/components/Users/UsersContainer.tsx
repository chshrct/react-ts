import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppRootStateType } from "../../redux/redux-store";
import {
  followUser,
  getUsers,
  setFollowInProgress,
  unFollowUser,
} from "../../redux/users-reducer";
import { selectCurrentPage, selectIsFetching, selectIsFollowInProgress, selectPageSize, selectTotalUsersCount, selectUsers } from "../../redux/users-selectors";
import Preloader from "../../shared/Preloader/Preloader";
import Users from "./Users";

class UsersAPIComponent extends Component<PropsFromRedux> {
  onPageSelect = (page: number) => {
    this.props.getUsers(page, this.props.pageSize);
  };

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  render() {
    return (
      <>
        {this.props.isFetching && <Preloader />}
        <Users
          isFollowInProgress={this.props.isFollowInProgress}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageSelect={this.onPageSelect}
          users={this.props.users}
          unFollowUser={this.props.unFollowUser}
          followUser={this.props.followUser}
          setFollowInProgress={this.props.setFollowInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppRootStateType) => {
  return {
    users: selectUsers(state),
    pageSize: selectPageSize(state),
    totalUsersCount: selectTotalUsersCount(state),
    currentPage: selectCurrentPage(state),
    isFetching: selectIsFetching(state),
    isFollowInProgress: selectIsFollowInProgress(state),
  };
};

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
