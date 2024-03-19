import React from "react";
import { Outlet } from "react-router-dom";

function SettingIndex() {
  return (
    <div className="flex gap-2 p-5 ">
      <div>
        <nav>
          <ul className="p-2 ">
            <li className="py-1">Profile</li>
            <li className="py-1">Company</li>
            <li className="py-1">Config</li>
          </ul>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default SettingIndex;
