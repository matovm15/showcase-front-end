import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAccessToken } from "./authSlice";

const RequireNoAuth = () => {
  const exceptionPaths = ["/find-freelancers"];
  const isLoggedIn = useSelector(selectAccessToken);
  const location = window.location.pathname;


  if (isLoggedIn && exceptionPaths.includes(location)) {
    return <Outlet />
  }

  if(isLoggedIn) return <Navigate to={"/dashboard"} />

  return <Outlet />; 
};

export default RequireNoAuth;
