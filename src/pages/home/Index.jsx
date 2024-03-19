import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../layouts/Navbar";
import Sidebar from "../../layouts/Sidebar";

function Index() {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" shadow-lg sticky top-0 z-[99] bg-white">
        <Navbar />
      </div>
      <div className="flex gap-2 max-w-screen-2xl mx-auto ">
        <div>
          <Sidebar />
        </div>
        <div className="container mx-auto px-4 py-8 min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Index;
