import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

function DataEntryFormIndex() {
  const { pathname } = useLocation();
  return (
    <div>
      <div className="md:p-5 w-full  md:w-10/12 mx-auto  ">
        <div className="mb-5">
          <h2 className="font-bold text-2xl text-amber-500">Data Entry Form</h2>
          <p className="text-sm text-gray-600">Fill the form below</p>
        </div>
        <nav className="border-b-2 border-gray-100 mb-3">
          <ul className="flex flex-row  ">
            <li
              className={`${
                pathname === "/data-entry/form" && "bg-primary text-white "
              }  rounded-l p-2 text-sm`}
            >
              <Link to={`/data-entry/form`}>Registration</Link>
            </li>
            <li
              className={`${
                pathname === "/data-entry/form/voucher" &&
                "bg-primary text-white  "
              }  rounded-r p-2 text-sm`}
            >
              <Link to={`/data-entry/form/voucher`}>Voucher Type</Link>
            </li>
          </ul>
        </nav>
        <div className="bg-white shadow-xl p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DataEntryFormIndex;
