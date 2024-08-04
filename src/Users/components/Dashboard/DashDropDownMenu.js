import React from "react";
import { Link, Navigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const DashDropDownMenu = () => {
  return (
    <div className="dropdown">
      <div
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <FaRegUserCircle />
      </div>

      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a className="dropdown-item">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default DashDropDownMenu;
