import { instance } from './apiConfig';
import { ResponseType } from './auth';

import { ERROR, PAGE_SIZE } from 'constant';

export const usersApi = {
  getUsers(currentPage: number = ERROR, pageSize: number = PAGE_SIZE) {
    return instance
      .get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  unFollow(userId: number) {
    return instance.delete<ResponseType>(`follow/${userId}`);
  },
  follow(userId: number) {
    return instance.post<ResponseType>(`follow/${userId}`, null);
  },
  checkFollow(userId: number) {
    return instance.get<boolean>(`follow/${userId}`);
  },
};

// types

export type UserType = {
  name: string;
  id: number;
  uniqueUrlName: string | null;
  photos: {
    small: string | null;
    large: string | null;
  };
  status: string | null;
  followed: boolean;
};

type GetUsersType = {
  items: UserType[];
  totalCount: number;
  error: string | null;
};
