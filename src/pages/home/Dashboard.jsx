import React from "react";

function Dashboard() {
  return (
    <div>
      {" "}
      <div className=" w-full h-[60vh] flex justify-center items-center">
        <div className="text-center">
          <div className="font-bold">Welcome !!</div>
          <div className="text-center text-primary text-3xl my-3">
            Data Management System
          </div>
          <p className="italic text-sm text-gray-400">
            secure and relaible data management
          </p>

          <div className="mt-5">
            <button className="myButton">join Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
