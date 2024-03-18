import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-white p-3 shadow-xl">
        <ul className="flex flex-row gap-3">
          <li>
            <NavLink
              to={"/"}
              className={(isActive) => (isActive ? "active link" : "link")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/faq"}
              className={(isActive) => (isActive ? "active link" : "link")}
            >
              FAQ
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
