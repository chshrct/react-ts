import React from 'react';

import { NavLink } from 'react-router-dom';

import { UserType } from '../../redux/users-reducer';

import s from './Users.module.css';

import { ONE } from 'constant';

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  users: UserType[];
  isFollowInProgress: number[];
  onPageSelect: (page: number) => void;
  unFollowUser: (userId: number) => void;
  followUser: (userId: number) => void;
};

const Users: React.FC<PropsType> = props => {
  const {
    totalUsersCount,
    pageSize,
    currentPage,
    users,
    followUser,
    unFollowUser,
    onPageSelect,
    isFollowInProgress,
  } = props;
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i += ONE) {
    pages.push(i);
  }
  return (
    <div>
      <div className={s.pagination}>
        {pages.map(page => (
          <span
            aria-hidden="true"
            role="button"
            key={page}
            className={currentPage === page ? s.selected : ''}
            onClick={() => onPageSelect(page)}
          >
            {page}
          </span>
        ))}
      </div>
      {users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img
                  src={
                    u.photos.small !== null
                      ? u.photos.small
                      : 'https://cdn-icons-png.flaticon.com/512/147/147142.png'
                  }
                  alt="avatar"
                  width="100px"
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  type="button"
                  disabled={isFollowInProgress.includes(u.id)}
                  onClick={() => {
                    unFollowUser(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  type="button"
                  disabled={isFollowInProgress.includes(u.id)}
                  onClick={() => {
                    followUser(u.id);
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
              <div>u.location.country</div>
              <div>u.location.city</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
