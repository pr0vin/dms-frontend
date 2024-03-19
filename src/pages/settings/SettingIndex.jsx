import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../layouts/Sidebar";
import Navbar from "../../layouts/Navbar";

function SettingIndex() {
  return (
    <div>
      <div className=" shadow-lg sticky top-0 z-[100] bg-white">
        <Navbar />
      </div>
      <div className="flex gap-2 max-w-screen-2xl mx-auto ">
        <div>
          {/* <nav className="bg-gray-300">
          <ul className="p-2 ">
            <li className="py-1">Profile</li>
            <li className="py-1">Company</li>
            <li className="py-1">Config</li>
          </ul>
        </nav> */}

          <Sidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SettingIndex;
