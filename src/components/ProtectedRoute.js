import React from "react";

import { auth } from "./auth";
import { Route, Redirect } from "react-router-dom";

export default ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={props =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
