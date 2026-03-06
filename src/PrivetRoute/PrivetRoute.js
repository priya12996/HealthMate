import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/Authprovider";

const PrivetRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return children;
};

export default PrivetRoute;
