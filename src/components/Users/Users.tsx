import React from "react";
import { UsersPropsType } from "./UsersContainer";

const Users: React.FC<UsersPropsType> = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        avatarUrl: "https://static.dw.com/image/60788701_101.jpg",
        fullname: "Semen",
        status: "Im Senior Developer",
        follow: true,
        location: {
          country: "Georgia",
          city: "Tbilisi",
        },
      },
      {
        id: 2,
        avatarUrl: "https://static.dw.com/image/60788701_101.jpg",
        fullname: "Yauheni",
        status: "Im Junior Developer",
        follow: true,
        location: {
          country: "Georgia",
          city: "Tbilisi",
        },
      },
      {
        id: 3,
        avatarUrl: "https://static.dw.com/image/60788701_101.jpg",
        fullname: "Anna",
        status: "Im Project Manager",
        follow: false,
        location: {
          country: "World",
          city: "Any City",
        },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.avatarUrl} alt="avatar" width={"100px"} />
            </div>
            <div>
              {u.follow ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullname}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
