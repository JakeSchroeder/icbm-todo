import React from "react";
import "../styles/layout.scss";

import { Content } from "carbon-components-react";
import UIHeader from "./header";
// import SidePanel from "./side-panel";
// import Side from "./side";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <UIHeader />
      {/* <Side /> */}
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;
