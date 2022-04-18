import { Component } from "react";
import { connect } from "react-redux";
import { usersApi } from "../../api/api";
import { AppStateType } from "../../redux/redux-store";
import {
  follow,
  setCurrentPage,
  setFetchPreloader,
  setFollowInProgress,
  setTotalUsersCount,
  setUsers,
  unfollow,
} from "../../redux/users-reducer";
import Preloader from "../../shared/Preloader/Preloader";
import Users from "./Users";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;

type MapDispatchToPropsType = typeof mapDispatchToProps;

export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType;

class UsersAPIComponent extends Component<UsersPropsType> {
  onPageSelect = (page: number) => {
    this.props.setFetchPreloader(true);
    this.props.setCurrentPage(page);
    usersApi.getUsers(page, this.props.pageSize).then((data) => {
      this.props.setFetchPreloader(false);
      this.props.setUsers(data.items);
    });
  };

  componentDidMount() {
    this.props.setFetchPreloader(true);
    usersApi
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setFetchPreloader(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
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
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          setFollowInProgress={this.props.setFollowInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
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
  setUsers,
  follow,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  setFetchPreloader,
  setFollowInProgress,
};
const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIComponent);

export default UsersContainer;
