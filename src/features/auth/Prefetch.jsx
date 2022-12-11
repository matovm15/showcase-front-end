import { store } from "../../app/store";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Prefetch = () => {
  useEffect(() => {
    // subscribe to any listeners

    return () => {
      // cleanup
      // unsubscribe from any listeners
    };
  }, []);
  return <Outlet />;
};

export default Prefetch;
