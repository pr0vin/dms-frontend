import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "../../layouts/Sidebar2";
import { IoSettingsOutline } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";

function SettingIndex() {
  const settingLinks = {
    name: "settings",
    icon: IoSettingsOutline,
    menus: ["fiscal year", "file types", "branch"],
  };
  return (
    <div>
      {/* <div>
        <div className="mb-5">
          <h2 className="font-bold text-2xl text-primary">Settings</h2>
          <p className="text-sm text-gray-600">change Your details here.</p>
        </div>
      </div> */}
      <div className="md:flex gap-5 max-w-screen-2xl mx-auto   ">
        <div className="md:w-10/12 w-full md:px-10 ">
          <Outlet />
        </div>
        <div className="mt-14 flex-grow">
          <div className="flex gap-2 ">
            <LuSettings2 size={24} className="text-primary" />
            <h2 className="text-md">Configuration</h2>
          </div>
          {/* <Sidebar /> */}

          <div className=" my-3 border-secondary">
            <ul>
              {settingLinks.menus?.map((menu, i) => (
                <li key={i} className="pl-8">
                  <NavLink
                    to={`/dashboard/settings/config/${menu
                      .split(` `)
                      .join(`-`)
                      .toLowerCase()}`}
                    className={({ isActive }) =>
                      isActive
                        ? "link  bg-gray-100 active text-sm  capitalize "
                        : "link text-sm  !bg-transparent capitalize"
                    }
                  >
                    {menu}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingIndex;
