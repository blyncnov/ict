import React, { useState } from "react";
import Navigations from "../components/dashboard/Navigations";
import Contents from "../components/dashboard/Contents";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="dashboard">
      <Navigations setIsOpen={setIsOpen} isOpen={isOpen} />
      <Contents setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

export default Dashboard;
