import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppState } from "../../redux/redux-store";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
  const isAuth = useSelector<AppState>((state) => state.auth.isAuth);

  if (isAuth) return <Navigate to={"/profile"} />;

  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
