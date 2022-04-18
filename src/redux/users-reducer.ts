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
  isFetching: boolean;
  isFollowInProgress: number[];
};

enum UsersActionsTypes {
  setUsers = "SET_USERS",
  follow = "FOLLOW",
  unfollow = "UNFOLLOW",
  setCurrentPage = "SET_CURRENT_PAGE",
  setTotalUsersCount = "SET_TOTAL_USERS_COUNT",
  setFetchPreloader = "SET_FETCH_PRELOADER",
  setFollowInProgress = "SET_FOLLOW_IN_PROGRESS",
}
type followActionType = {
  type: UsersActionsTypes.follow;
  userId: number;
};
type unfollowActionType = {
  type: UsersActionsTypes.unfollow;
  userId: number;
};
type setUsersActionType = {
  type: UsersActionsTypes.setUsers;
  users: Array<UserType>;
};
type setCurrentPageActionType = {
  type: UsersActionsTypes.setCurrentPage;
  currentPage: number;
};
type setTotalUsersCountActionType = {
  type: UsersActionsTypes.setTotalUsersCount;
  totalUsersCount: number;
};
type setFetchPreloaderActionType = {
  type: UsersActionsTypes.setFetchPreloader;
  isFetching: boolean;
};

type setFollowInProgressActionType = {
  type: UsersActionsTypes.setFollowInProgress;
  userId: number;
  inProgress: boolean;
};

export type RootActionType =
  | setUsersActionType
  | followActionType
  | unfollowActionType
  | setCurrentPageActionType
  | setTotalUsersCountActionType
  | setFetchPreloaderActionType
  | setFollowInProgressActionType;

const initState: UsersStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowInProgress: [],
};

const usersReducer = (
  state: UsersStateType = initState,
  action: RootActionType
): UsersStateType => {
  switch (action.type) {
    case UsersActionsTypes.follow:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? { ...u, followed: true } : { ...u }
        ),
      };
    case UsersActionsTypes.unfollow:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? { ...u, followed: false } : { ...u }
        ),
      };
    case UsersActionsTypes.setUsers:
      return {
        ...state,
        users: action.users,
      };
    case UsersActionsTypes.setCurrentPage:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case UsersActionsTypes.setTotalUsersCount:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case UsersActionsTypes.setFetchPreloader:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case UsersActionsTypes.setFollowInProgress:
      return action.inProgress
        ? {
            ...state,
            isFollowInProgress: [...state.isFollowInProgress, action.userId],
          }
        : {
            ...state,
            isFollowInProgress: state.isFollowInProgress.filter(
              (el) => el !== action.userId
            ),
          };

    default:
      return state;
  }
};

export const setUsers = (users: Array<UserType>): setUsersActionType => {
  return {
    type: UsersActionsTypes.setUsers,
    users: users,
  };
};
export const follow = (userId: number): followActionType => {
  return {
    type: UsersActionsTypes.follow,
    userId: userId,
  };
};
export const unfollow = (userId: number): unfollowActionType => {
  return {
    type: UsersActionsTypes.unfollow,
    userId: userId,
  };
};
export const setCurrentPage = (
  currentPage: number
): setCurrentPageActionType => {
  return {
    type: UsersActionsTypes.setCurrentPage,
    currentPage,
  };
};
export const setTotalUsersCount = (
  totalUsersCount: number
): setTotalUsersCountActionType => {
  return {
    type: UsersActionsTypes.setTotalUsersCount,
    totalUsersCount,
  };
};
export const setFetchPreloader = (
  isFetching: boolean
): setFetchPreloaderActionType => {
  return {
    type: UsersActionsTypes.setFetchPreloader,
    isFetching,
  };
};

export const setFollowInProgress = (
  userId: number,
  inProgress: boolean
): setFollowInProgressActionType => ({
  type: UsersActionsTypes.setFollowInProgress,
  userId,
  inProgress,
});

export default usersReducer;
