import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoChevronDownSharp, IoSettingsOutline } from "react-icons/io5";
import { LuUserCircle2, LuHome, LuLogOut, LuSettings2 } from "react-icons/lu";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="mx-3 p-3">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold px-5 text-primary">DMS </h2>
          </div>
          <div className="md:block hidden">
            <nav className="bg-white ">
              <ul className="flex  flex-row gap-3">
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
                    to="/about"
                    activeClassName="active "
                    className={"link"}
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="relative cursor-pointer text-gray-700 ">
            <div onClick={handleOpen}>
              <LuUserCircle2 size={32} />
            </div>

            {open && (
              <ul
                onClick={handleOpen}
                className="absolute text-start right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10 cursor-pointer text-sm"
              >
                <li className="text-start p-2 border-b">
                  <h6 className="font-bold  capitalize">Pravin </h6>
                  <small className="text-xs ">pravin@gmail.com</small>
                  <small className="border border-blue-300 text-blue-300 rounded-full px-2 mx-2 ">
                    admin
                  </small>
                </li>

                <li
                  onClick={() => navigate(`/dashboard/settings`)}
                  className="p-2 flex gap-3 hover:bg-gray-100"
                >
                  <IoSettingsOutline size={18} />
                  <span>Settings</span>
                </li>

                <li className="p-2 flex gap-3 hover:bg-gray-100">
                  <LuLogOut size={18} />
                  <span>Log Out</span>{" "}
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
