import React from "react";
import { NavLink } from "react-router-dom";
import { UserType } from "../../redux/users-reducer";
import s from "./Users.module.css";

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageSelect: (page: number) => void;
  users: UserType[];
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
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
                <button onClick={() => unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => follow(u.id)}>Follow</button>
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
