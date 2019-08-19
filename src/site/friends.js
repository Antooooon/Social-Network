import React from "react";
import a from "./friends.module.css";
import usersPhoto from "../img/users.png";
import { NavLink } from "react-router-dom";
import { useApi } from "../api";
let Friend = props => {
  return (
    <div>
      {props.array.map(i => (
        <span key={i} className={a.page} onClick={props.refreh}>
          {i}
        </span>
      ))}

      {props.users.map(u => (
        <div key={u.id}>
          <div className={a.ava}>
            <NavLink to={"./content/" + u.id}>
              <img src={u.photos.small != null ? u.photos.small : usersPhoto} />
            </NavLink>
          </div>
          <div>{u.name}</div>
          <div>Status: {u.status}</div>
          {u.add ? (
            <button
            disabled={props.butId.some(id=>id===u.id)}
              onClick={() => {
               props.unfollowThank(u.id)
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
            disabled={props.butId.some(id=>id===u.id)}
              onClick={() => {
                props.followThank(u.id)
              }}
            >
              Follow
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Friend;
