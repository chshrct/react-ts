import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import LoginForm from './LoginForm/LoginForm';

import { AppRootStateType } from 'store';

const Login: FC = () => {
  const isAuth = useSelector<AppRootStateType>(state => state.auth.isAuth);

  if (isAuth) return <Navigate to="/profile" />;

  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
