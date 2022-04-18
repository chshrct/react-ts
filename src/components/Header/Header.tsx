import { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

type PropsType = {
  login: string | null;
  email: string | null;
  isAuth:boolean
};

const Header: FC<PropsType> = (props) => {
  return (
    <header className={classes.header}>
      <img
        src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg"
        alt="apple"
      />
      {props.isAuth ? (
        props.login
      ) : (
        <div>{<NavLink to={"#s"}>Login</NavLink>}</div>
      )}
    </header>
  );
};

export default Header;
