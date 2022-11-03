import React from "react";
import Sidebar from "../components/freelancers/Sidebar";
import Layout from "../components/Layout";

const Freelancers = () => {
  return (
    <Layout>
      <div className="full-page-container" style={{ height: "707px" }}>
        <Sidebar />
      </div>
    </Layout>
  );
};

export default Freelancers;
