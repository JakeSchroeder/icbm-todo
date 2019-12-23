import React from "react";
import {
  Button,
  Form,
  FormLabel,
  // FormGroup,
  TextInput
} from "carbon-components-react";

import { Link } from "react-router-dom";

import "../styles/form.scss";
import "../styles/login.scss";

export default () => (
  <>
    <Form className="loginForm">
      <div className="formGrouping">
        <FormLabel>
          <h4>
            Register for ICBM <strong>Todo</strong>
          </h4>
        </FormLabel>
        <p>
          Enter a username and password to register for the ICBM Todo service.
        </p>
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
            autoComplete="new-password"
            id="passWord"
            labelText="Password"
          />
        </div>
        <div className="input-wrapper">
          <TextInput.PasswordInput
            autoComplete="new-password"
            id="confirmPassWord"
            labelText="Confirm Password"
          />
        </div>
      </div>

      <Link className="registerLink" to="/login">
        Already have an account?
      </Link>

      <Link to="/">
        <Button type="submit">Register for Todo</Button>
      </Link>
    </Form>
  </>
);
