import React from "react";
import { Outlet } from "react-router-dom";

function DataEntryIndex() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default DataEntryIndex;
