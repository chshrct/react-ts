import axios from "axios";

const social = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0`,
  withCredentials: true,
  headers: {
    "API-KEY": "45504c5e-aecb-4772-971c-a14a04809005",
  },
});

export const usersApi = {
  getUsers(currentPage: number = 1, pageSize: number = 5) {
    return social
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  deleteFollow(userId:number){
    return social
    .delete(
      `follow/${userId}`,
    )
  },
  putFollow(userId:number){
    return  social
    .post(
      `/follow/${userId}`,
      null,
    )
  }
};
