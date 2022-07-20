import { UserType } from 'shared/api/users';
import { AppRootStateType } from 'store';

export const selectUsers = (state: AppRootStateType): UserType[] => state.usersPage.users;

export const selectPageSize = (state: AppRootStateType): number =>
  state.usersPage.pageSize;

export const selectTotalUsersCount = (state: AppRootStateType): number =>
  state.usersPage.totalUsersCount;

export const selectCurrentPage = (state: AppRootStateType): number =>
  state.usersPage.currentPage;

export const selectIsFetching = (state: AppRootStateType): boolean =>
  state.usersPage.isFetching;

export const selectIsFollowInProgress = (state: AppRootStateType): number[] =>
  state.usersPage.isFollowInProgress;
