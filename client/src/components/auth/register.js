import React, { Component, useState } from "react";
import {
  Button,
  Form,
  FormLabel,
  // FormGroup,
  TextInput
} from "carbon-components-react";

import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

import "../../styles/form.scss";
import "../../styles/login.scss";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <>
        <Form className="loginForm" noValidate onSubmit={this.onSubmit}>
          <div className="formGrouping">
            <FormLabel>
              <h4>
                Register for ICBM <strong>Todo</strong>
              </h4>
            </FormLabel>
            <p>
              Enter a username and password to register for the ICBM Todo
              service.
            </p>
          </div>

          <div className="formGrouping">
            <div className="input-wrapper">
              <TextInput
                autoComplete="name"
                className="--name"
                type="text"
                labelText="Name"
                onChange={this.onChange}
                value={this.state.name}
                // invalidText={errors.name}
                id="name"
                name="name"
                invalidText={errors.name}
                invalid={!!errors.name}
              />
            </div>
            <div className="input-wrapper">
              <TextInput
                autoComplete="email"
                className="--email"
                type="email"
                labelText="Email"
                onChange={this.onChange}
                value={this.state.email}
                // invalidText={errors.email}
                id="email"
                invalidText={errors.email}
                invalid={!!errors.email}
              />
            </div>
            <div className="input-wrapper">
              <TextInput
                type="password"
                autoComplete="new-password"
                id="password"
                labelText="Password"
                onChange={this.onChange}
                value={this.state.password}
                // invalidText={errors.password}
                invalidText={errors.password}
                invalid={!!errors.password}
              />
            </div>
          </div>

          <Link className="registerLink" to="/login">
            Already have an account?
          </Link>

          <Button type="submit">Register for Todo</Button>
        </Form>
      </>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
