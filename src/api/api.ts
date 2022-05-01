import axios from "axios";

export type LoginInfoType = 
  {
    email: string,
    password: string,
    rememberMe: boolean,
  }


const socialInstance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0`,
  withCredentials: true,
  headers: {
    "API-KEY": "45504c5e-aecb-4772-971c-a14a04809005",
  },
});

export const usersApi = {
  getUsers(currentPage: number = 1, pageSize: number = 5) {
    return socialInstance
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unFollow(userId: number) {
    return socialInstance.delete(`follow/${userId}`);
  },
  Follow(userId: number) {
    return socialInstance.post(`/follow/${userId}`, null);
  },
};

export const profileApi = {
  getUserProfile(userId: number) {
    return socialInstance.get(`profile/${userId}`);
  },
  getStatus(userId:number){
    return socialInstance.get(`profile/status/${userId}`)
  },
  updateStatus(status:string){
    return socialInstance.put('/profile/status',{status})
  }
};
export const authApi = {
  me() {
    return socialInstance.get('auth/me');
  },
  login(loginInfo:LoginInfoType){
    return socialInstance.post('/auth/login',loginInfo)
  }
};
