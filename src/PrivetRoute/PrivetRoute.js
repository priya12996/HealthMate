
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Context/Authprovider";

const PrivetRoute = ({ children, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: location } }}
          />
        )
      }
    />
  );
};

export default PrivetRoute;

/* if (!isLoading) {
    return (<LoadingScreen></LoadingScreen>);
} */