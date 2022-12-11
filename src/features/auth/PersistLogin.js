import { Outlet, Link, Navigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useRefreshTokenMutation } from "./authApiSlice";
import usePersist from "../../hooks/usePersist";
import { useSelector } from "react-redux";
import { selectAccessToken } from "./authSlice";

const PersistLogin = () => {
  const [persist] = usePersist();
  const token = useSelector(selectAccessToken);
  const effectRan = useRef(false);

  const [trueSuccess, setTrueSuccess] = useState(false);

  const [refreshToken, { isUninitialized, isLoading, isSuccess, isError }] =
    useRefreshTokenMutation();

  useEffect(() => {
    if (effectRan.current || process.env.NODE_ENV === "development") return;
    effectRan.current = true;
    if (token) {
      refreshToken();
    } else {
      persist();
    }

    return () => (effectRan.current = false);
  }, [token, refreshToken, persist]);

  let content = null;
  if (!persist) {
    content = <Outlet />;
  } else if (isUninitialized) {
    content = <Outlet />;
  } else if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = <Outlet />;
  } else if (isError) {
    content = <Navigate to="/login" />;
  }
};

export default PersistLogin;
