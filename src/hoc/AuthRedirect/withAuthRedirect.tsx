import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppState } from "../../redux/redux-store";



export function withAuthRedirect<T extends {}>(Component: React.ComponentType<T>){

  const RedirectComponent = (props:T) => {
    const auth = useSelector<AppState>(state=>state.auth.isAuth)
    if(!auth) return <Navigate to={'/login'}/>
    return <Component {...props}/>
  }
  return RedirectComponent
};
