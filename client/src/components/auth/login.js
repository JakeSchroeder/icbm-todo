import React, { useState, Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Form,
  FormLabel,
  // FormGroup,
  TextInput
} from "carbon-components-react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

// import auth from "./auth";

import "../../styles/form.scss";
import "../../styles/login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }

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

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  // fillDemoEmail = () => {
  //   this.setState({ email: "test@test.com" });
  // };

  // fillDemoPassword = () => {
  //   this.setState({ password: "test123" });
  // };

  render() {
    const { errors } = this.state;

    return (
      <Form className="loginForm" noValidate onSubmit={this.onSubmit}>
        <div className="formGrouping">
          <FormLabel>
            <h4>
              Log in to ICBM <strong>Todo</strong>
            </h4>
          </FormLabel>
          <p>Enter your email and password to log in to ICBM Todo service.</p>
        </div>

        <div className="formGrouping">
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
        <Link className="registerLink" to="/register">
          Don't have an account?
        </Link>

        <Button type="submit">Log in to Todo</Button>
      </Form>
    );
  }
}

// const Login = () => {
//   const [redirectToReferrer, setRedirect] = useState(false);

// };

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);

// export default Login;
