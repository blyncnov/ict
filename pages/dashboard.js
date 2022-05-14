import React, { useState } from "react";
import Navigations from "../components/dashboard/Navigations";
import Contents from "../components/dashboard/Contents";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [component, setComponent] = useState("Profile");

  const ShowComponent = (component) => {
    console.log(component);
    switch (component) {
      case "Profile":
        setComponent("Profile");
        break;
      case "Reports":
        setComponent("Reports");
        break;
      case "Lists":
        setComponent("Lists");
        break;
      default:
        setComponent("");
    }
  };
  return (
    <div className="dashboard">
      <Navigations
        ShowComponent={ShowComponent}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <Contents setIsOpen={setIsOpen} isOpen={isOpen} component={component} />
    </div>
  );
};

export default Dashboard;
