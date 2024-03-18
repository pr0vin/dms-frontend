import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import DataEntryList from "../pages/DataEntry/DataEntryList";

function Index() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className=" w-full h-screen">
        <div>
          <div className="text-sm">Welcome to</div>
          <div className="text-center text-blue-500">DMS</div>

          <button
            className="underline text-blue-500"
            onClick={() => navigate(`/data-entry/form`)}
          >
            new{" "}
          </button>
        </div>
      </div>

      <DataEntryList />
    </div>
  );
}

export default Index;
