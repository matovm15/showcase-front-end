import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAccessToken } from "./authSlice";

const RequireAuth = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectAccessToken);

  if (!isLoggedIn) {
    return window.location.assign(`/login?redirect=${location.pathname}`);
  }

  return <Outlet />;
};

export default RequireAuth;
