import React from "react";
import { Link, Navigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const DashDropDownMenu = () => {
  return (
    <div class="dropdown">
      <div
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <FaRegUserCircle />
      </div>

      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a class="dropdown-item">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default DashDropDownMenu;
