import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div id="wrapper" style={{ paddingTop: "82px" }}>
      <Navbar />
      <div className="clearfix" />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
