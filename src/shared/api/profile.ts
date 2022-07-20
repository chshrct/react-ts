import { instance } from './apiConfig';
import { ResponseType } from './auth';

export const profileApi = {
  getUserProfile(userId: number) {
    return instance.get<ProfileType>(`profile/${userId}`);
  },
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put<ResponseType>('profile/status', { status });
  },
};

// types

export type ProfileType = {
  aboutMe: string;
  contacts: {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    mainLink: string;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: {
    small: string;
    large: string;
  };
};
