import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold px-5 text-primary">DMS </h2>
        </div>
        <div>
          <nav className="bg-white p-3 ">
            <ul className="flex flex-row gap-3">
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="active "
                  className={"link"}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/data-entry"
                  activeClassName="active "
                  className={"link"}
                >
                  Data Entry
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/faq"
                  activeClassName="active "
                  className={"link"}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
