import React from "react";
import Navigations from "../components/dashboard/Navigations";
import Contents from "../components/dashboard/Contents";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navigations />
      <Contents />
    </div>
  );
};

export default Dashboard;
