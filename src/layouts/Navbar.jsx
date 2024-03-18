import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={(isActive) => (isActive ? "active link" : "link")}
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
