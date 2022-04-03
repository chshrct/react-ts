export type UserType = {
  name: string;
  id: number;
  uniqueUrlName: null;
  photos: {
    small: string;
    large: string;
  };
  status: null;
  followed: boolean;
};

export type UsersStateType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
};

enum UsersActionsType {
  setUsers = "SET_USERS",
  follow = "FOLLOW",
  unfollow = "UNFOLLOW",
  setCurrentPage = "SET_CURRENT_PAGE",
  setTotalUsersCount = 'SET_TOTAL_USERS_COUNT'
}
type followActionType = {
  type: UsersActionsType.follow;
  userId: number;
};
type unfollowActionType = {
  type: UsersActionsType.unfollow;
  userId: number;
};
type setUsersActionType = {
  type: UsersActionsType.setUsers;
  users: Array<UserType>;
};
type setCurrentPageActionType = {
  type: UsersActionsType.setCurrentPage;
  currentPage: number;
};
type setTotalUsersCountActionType = {
  type: UsersActionsType.setTotalUsersCount;
  totalUsersCount: number;
};

export type RootActionType =
  | setUsersActionType
  | followActionType
  | unfollowActionType
  | setCurrentPageActionType
  | setTotalUsersCountActionType;

const initialState: UsersStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 2,
};

const usersReducer = (
  state: UsersStateType = initialState,
  action: RootActionType
): UsersStateType => {
  switch (action.type) {
    case UsersActionsType.follow:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? { ...u, followed: true } : { ...u }
        ),
      };
    case UsersActionsType.unfollow:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? { ...u, followed: false } : { ...u }
        ),
      };
    case UsersActionsType.setUsers:
      return {
        ...state,
        users: action.users,
      };
    case UsersActionsType.setCurrentPage:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case UsersActionsType.setTotalUsersCount:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };

    default:
      return state;
  }
};

export const setUsersAC = (users: Array<UserType>): setUsersActionType => {
  return {
    type: UsersActionsType.setUsers,
    users: users,
  };
};
export const followAC = (userId: number): followActionType => {
  return {
    type: UsersActionsType.follow,
    userId: userId,
  };
};
export const unfollowAC = (userId: number): unfollowActionType => {
  return {
    type: UsersActionsType.unfollow,
    userId: userId,
  };
};
export const setCurrentPageAC = (
  currentPage: number
): setCurrentPageActionType => {
  return {
    type: UsersActionsType.setCurrentPage,
    currentPage,
  };
};
export const setTotalUsersCountAC = (
  totalUsersCount: number
): setTotalUsersCountActionType => {
  return {
    type: UsersActionsType.setTotalUsersCount,
    totalUsersCount,
  };
};

export default usersReducer;
