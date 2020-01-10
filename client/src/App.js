import React from "react";
// import "./styles/global.scss";
import Layout from "./components/layout";
import Todos from "./components/todos";
import Privacy from "./components/privacy";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

// Utils
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// Components
import Register from "./components/auth/register";
import Login from "./components/auth/login";
// import PrivateRoute from "./components/private-route/PrivateRoute";
// import Layout from "./components/dashboard/Layout";
// import NotFound from "./components/404/404";
import privacy from "./components/privacy";

// Check for token to keep user logged in
if (localStorage.jwtTokenTeams) {
  // Set auth token header auth
  const token = JSON.parse(localStorage.jwtTokenTeams);
  setAuthToken(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./";
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Layout>
            <Switch>
              <ProtectedRoute exact path="/" component={Todos} />
              <Route exact path="/login" component={Login} />

              <Route exact path="/register" component={Register} />

              <Route exact path="/privacy" component={privacy} />

              <Route path="/">404/</Route>
            </Switch>
          </Layout>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
