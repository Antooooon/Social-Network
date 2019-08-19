import React from "react";
import s from "./header.module.css";
import usersPhoto from "../img/users.png";
const Header = props => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <img src={require("../img/socialNetwork.png")} />

        <div className={s.photo}>
          <img src={props.photo.large ? props.photo.large : usersPhoto} />
        </div>

        <div className={s.reg}>
          {props.auth ? (
            props.login
          ) : (
            <button
              onClick={() => {
                alert("hello");
              }}
              type="button"
              className="btn btn-secondary"
              data-toggle="tooltip"
              data-placement="left"
              title="Tooltip on left"
            >
              Registration
            </button>
          )}
        </div>
        <div className={s.sign}>
          {props.auth ? (
            props.email
          ) : (
            <button
              onClick={() => {
                alert("hello");
              }}
              type="button"
              className="btn btn-secondary"
              data-toggle="tooltip"
              data-placement="left"
              title="Tooltip on left"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
