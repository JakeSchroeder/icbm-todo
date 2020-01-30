import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Header,
  HeaderName,
  // SkipToContent,
  HeaderGlobalAction,
  HeaderGlobalBar
} from "carbon-components-react";

import {
  // Search20,
  // Notification20,
  // AppSwitcher20,
  Logout20,
  Login20
} from "@carbon/icons-react";

import { Link, withRouter } from "react-router-dom";

import { logoutUser } from "../actions/authActions";

// import { auth } from "./auth";

class UIHeader extends Component {
  onLogoutClick = e => {
    this.props.logoutUser(this.props.history);
    window.location.href = "/";
  };

  render() {
    return (
      <Header aria-label="ICBM Platform Name">
        <HeaderName href="/" prefix="ICBM">
          Todo
        </HeaderName>
        {/* <SkipToContent/> */}
        <HeaderGlobalBar>
          {/* <HeaderGlobalAction aria-label="Search" onClick={null}>
        <Search20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="Notifications" onClick={null}>
        <Notification20 />
      </HeaderGlobalAction> */}
          <HeaderGlobalAction aria-label="Log out" onClick={this.onLogoutClick}>
            <Logout20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(
  connect(mapStateToProps, { logoutUser })(withRouter(UIHeader))
);
