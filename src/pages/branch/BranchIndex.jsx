import React from "react";
import BranchForm from "./BranchForm";
import BranchList from "./BranchList";

function BranchIndex() {
  return (
    <div>
      {" "}
      <div className="heading">
        <h2>Branch</h2>
        <small>categories of files are listed here</small>
      </div>
      <div className="my-5 ">
        <BranchForm />
      </div>
      <div>
        <BranchList />
      </div>
    </div>
  );
}

export default BranchIndex;
