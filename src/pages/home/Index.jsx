import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../layouts/Navbar";

function Index() {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="shadow-lg sticky top-0 z-10 bg-white">
        <Navbar />
      </div>

      <div className="container mx-auto px-4 py-8 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default Index;
