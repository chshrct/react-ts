import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';
import { ReduxPropsHeader } from './HeaderContainer';

const Header: FC<ReduxPropsHeader> = ({ isAuth, login, logout }) => {
  return (
    <header className={classes.header}>
      <img
        src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg"
        alt="apple"
      />
      {isAuth ? (
        <div>
          <div>{login}</div>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <NavLink to="/login">Login</NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
