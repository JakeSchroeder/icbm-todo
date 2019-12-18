import React, { useState } from "react";
import {
  Button,
  Form,
  FormLabel,
  // FormGroup,
  TextInput
} from "carbon-components-react";

import { Link } from "react-router-dom";

// import auth from "./auth";

import "../styles/login.scss";

export default () => {
  const [redirectToReferrer, setRedirect] = useState(false);

  return (
    <Form className="loginForm">
      <div className="formGrouping">
        <FormLabel>
          <h4>
            Log in to ICBM <strong>Todo</strong>
          </h4>
        </FormLabel>
        <p>Enter your username and password to log in to ICBM Todo service.</p>
      </div>

      <div className="formGrouping">
        <div className="input-wrapper">
          <TextInput
            autoComplete="username"
            id="userName"
            // invalid
            invalidText="A valid Username is required"
            className="--username"
            type="text"
            labelText="Username"
          />
        </div>
        <div className="input-wrapper">
          <TextInput.PasswordInput
            autoComplete="current-password"
            id="passWord"
            labelText="Password"
          />
        </div>
      </div>
      <Link className="registerLink" to="/register">
        Don't have an account?
      </Link>

      <Link to="/">
        <Button type="submit">Log in to Todo</Button>
      </Link>
    </Form>
  );
};
