import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppRootStateType } from "../../redux/redux-store";
import {
  followUser,
  getUsers,
  setFollowInProgress,
  unFollowUser,
} from "../../redux/users-reducer";
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowInProgress: state.usersPage.isFollowInProgress,
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
