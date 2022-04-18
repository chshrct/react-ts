import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { usersApi } from "../../api/api";
import { UserType } from "../../redux/users-reducer";
import s from "./Users.module.css";

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  users: UserType[];
  isFollowInProgress: number[];
  onPageSelect: (page: number) => void;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
  setFollowInProgress: (userId: number, inProgress: boolean) => void;
};

const Users: React.FC<PropsType> = (props) => {
  const {
    totalUsersCount,
    pageSize,
    currentPage,
    users,
    follow,
    unfollow,
    onPageSelect,
  } = props;
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={s.pagination}>
        {pages.map((page) => (
          <span
            key={page}
            className={currentPage === page ? s.selected : ""}
            onClick={() => onPageSelect(page)}
          >
            {page}
          </span>
        ))}
      </div>
      {users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img
                  src={
                    u.photos.small !== null
                      ? u.photos.small
                      : "https://cdn-icons-png.flaticon.com/512/147/147142.png"
                  }
                  alt="avatar"
                  width={"100px"}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.isFollowInProgress.includes(u.id)}
                  onClick={() => {
                    props.setFollowInProgress(u.id, true);
                    usersApi.deleteFollow(u.id).then((response) => {
                      unfollow(u.id);
                      props.setFollowInProgress(u.id, false);
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                disabled={props.isFollowInProgress.includes(u.id)}
                  onClick={() => {
                    props.setFollowInProgress(u.id, true);
                    usersApi.putFollow(u.id).then((response) => {
                      follow(u.id);
                      props.setFollowInProgress(u.id, false);
                    });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
