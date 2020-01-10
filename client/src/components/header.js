import React from "react";
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

import { Link } from "react-router-dom";

// import { auth } from "./auth";

const LogIcon = ({ logType, iconType }) => {
  return (
    <HeaderGlobalAction aria-label={logType} onClick={null}>
      {iconType}
    </HeaderGlobalAction>
  );
};

const UIHeader = ({ auth }) => {
  const isLoggedIn = auth.isAuthenticated;

  let button;

  if (!isLoggedIn) {
    button = (
      <Link to="/login">
        <LogIcon logType="Log in" iconType={<Login20 />} />
      </Link>
    );
  } else {
    button = (
      <Link to="/login">
        <LogIcon logType="Log out" iconType={<Logout20 />} />
      </Link>
    );
  }

  return (
    <>
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
          {button}
        </HeaderGlobalBar>
      </Header>
    </>
  );
};

UIHeader.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(UIHeader);
