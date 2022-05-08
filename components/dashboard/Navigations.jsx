import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GiHumanTarget } from "react-icons/gi";
import { HiDocumentReport } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { DiHtml5Multimedia } from "react-icons/di";

const Navigations = () => {
  return (
    <div className="Nav__Left__section">
      <div className="showcase__section">
        <h2>ICT Dashboard</h2>
      </div>
      <div className="showcase__tabs">
        <div className="navigation__links">
          <AiOutlineHome />
          <li>Home</li>
        </div>
        <div className="navigation__links">
          <GiHumanTarget />
          <li>Profile</li>
        </div>
        <div className="navigation__links">
          <HiDocumentReport />
          <li>Reports</li>
        </div>
        <div className="navigation__links">
          <HiDocumentReport />
          <li>Lists</li>
        </div>
        <div className="navigation__links">
          <DiHtml5Multimedia />
          <li>Time</li>
        </div>
        <div className="navigation__links">
          <BsThreeDots />
          <li>Others</li>
        </div>
      </div>
    </div>
  );
};

export default Navigations;
