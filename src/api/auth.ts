import { instance } from './apiConfig';

export const authApi = {
  me() {
    return instance.get<ResponseType<AuthMeResponseType>>('auth/me');
  },
  login(loginInfo: LoginInfoType) {
    return instance.post<ResponseType<{ userId: number }>>('auth/login', loginInfo);
  },
  logout() {
    return instance.delete<ResponseType>('auth/login');
  },
  getCaptcha() {
    return instance.get<{ url: string }>('security/get-captcha-url');
  },
};

// types

export type LoginInfoType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type ResponseType<T = {}> = {
  resultCode: number;
  messages: string[];
  fieldsErrors: string[];
  data: T;
};

type AuthMeResponseType = {
  id: number;
  email: string;
  login: string;
};
