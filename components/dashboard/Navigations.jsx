import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GiHumanTarget } from "react-icons/gi";
import { HiDocumentReport } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { DiHtml5Multimedia } from "react-icons/di";

const Navigations = ({ setIsOpen, isOpen, ShowComponent }) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={isOpen ? "Nav__Left__section is_opened" : "Nav__Left__section"}
    >
      <div className="showcase__section">
        <h2>ICT Dashboard</h2>
      </div>
      <div className="showcase__tabs">
        <div className="navigation__links">
          <AiOutlineHome />
          <li onClick={() => ShowComponent("Profile")}>Home</li>
        </div>
        <div className="navigation__links">
          <GiHumanTarget />
          <li onClick={() => ShowComponent("Profile")}>Profile</li>
        </div>
        <div className="navigation__links">
          <HiDocumentReport />
          <li onClick={() => ShowComponent("Reports")}>Reports</li>
        </div>
        <div className="navigation__links">
          <HiDocumentReport />
          <li onClick={() => ShowComponent("Lists")}>Lists</li>
        </div>
        <div className="navigation__links">
          <DiHtml5Multimedia />
          <li onClick={() => ShowComponent("Time")}>Time</li>
        </div>
        <div className="navigation__links">
          <BsThreeDots />
          <li onClick={() => ShowComponent("Others")}>Others</li>
        </div>
      </div>
    </div>
  );
};

export default Navigations;
