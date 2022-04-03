import axios from "axios";
import React, { useEffect } from "react";
import { UsersPropsType } from "./UsersContainer";

const Users: React.FC<UsersPropsType> = (props) => {
  useEffect(() => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });
  });

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={
                  u.photos.small !== null
                    ? u.photos.small
                    : "https://cdn-icons-png.flaticon.com/512/147/147142.png"
                }
                alt="avatar"
                width={"100px"}
              />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
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
