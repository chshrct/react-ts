import { AppRootStateType } from "./redux-store";

export const selectUsers = (state:AppRootStateType) => state.usersPage.users
export const selectPageSize = (state:AppRootStateType) => state.usersPage.pageSize
export const selectTotalUsersCount = (state:AppRootStateType) => state.usersPage.totalUsersCount
export const selectCurrentPage = (state:AppRootStateType) => state.usersPage.currentPage
export const selectIsFetching = (state:AppRootStateType) => state.usersPage.isFetching
export const selectIsFollowInProgress = (state:AppRootStateType) => state.usersPage.isFollowInProgress