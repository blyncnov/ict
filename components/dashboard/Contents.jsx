import React from "react";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";

import { FaBars } from "react-icons/fa";

import { MdAdminPanelSettings } from "react-icons/md";

import DashboardOverview from "../DashboardContent/DashboardOverview";
import Reports from "../DashboardContent/Reports";
import Lists from "../DashboardContent/Lists";

const Contents = ({ setIsOpen, isOpen, component }) => {
  const BarHandlerFunction = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Content__Right__section">
      <div className="profile__navigation">
        <div className="mobile__Profile__logo">
          <h1 className="icon">
            <FaBars onClick={BarHandlerFunction} />
          </h1>
          <h1>Student Dashboard</h1>
        </div>
        <div className="profile__content">
          <div className="profile__grid">
            <h2>
              <IoIosNotifications />
            </h2>
            <h2>
              <IoMdSettings />
            </h2>
            <h2>
              <MdAdminPanelSettings />
            </h2>
          </div>
        </div>
      </div>

      {/* Render All Componnets to be View Here */}
      <div className="all__content__section">
        {component === "Profile" && <DashboardOverview />}
        {component === "Lists" && <Lists />}
        {component === "Reports" && <Reports />}
      </div>
      {/* Render All Componnets to be View Ends Here */}
    </div>
  );
};

export default Contents;
