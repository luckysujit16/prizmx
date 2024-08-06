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
          <Link to="/user/profile" className="dropdown-item">Profile</Link>
        </li>
        <li>
          <Link to="#" className="dropdown-item">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default DashDropDownMenu;
