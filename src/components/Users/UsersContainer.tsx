import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../redux/redux-store";
import {
  followAC,
  RootActionType,
  setUsersAC,
  unfollowAC,
  UserType,
} from "../../redux/users-reducer";
import Users from "./Users";

type MapStateToPropsType = {
  users: UserType[];
};

type MapDispatchToPropsType = {
  setUsers: (users: Array<UserType>) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};

export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<RootActionType>
): MapDispatchToPropsType => {
  return {
    setUsers: (users: Array<UserType>) => {
      dispatch(setUsersAC(users));
    },
    follow: (userId: number) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
