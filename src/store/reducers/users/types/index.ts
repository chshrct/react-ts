import { UserType } from 'shared/api/users';

export type UsersStateType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  isFollowInProgress: number[];
};
