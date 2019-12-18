import React from "react";
// import "./styles/global.scss";
import Layout from "./components/layout";
import Todos from "./components/todos";
import Login from "./components/login";
import Register from "./components/register";
import Privacy from "./components/privacy";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <ProtectedRoute exact path="/" component={Todos} />
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/privacy">
              <Privacy />
            </Route>
            <Route path="/">404</Route>
            {/* <Todos /> */}
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
