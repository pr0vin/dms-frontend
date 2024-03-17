import React from "react";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div className="flex items-center justify-center w-full h-screen">
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
    </div>
  );
}

export default Index;
