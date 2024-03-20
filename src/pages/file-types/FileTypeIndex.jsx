import React from "react";
import FileTypeList from "./FileTypeList";
import FileTypeForm from "./FileTypeForm";

function FileTypeIndex() {
  return (
    <>
      <div className="heading">
        <h2>File Types</h2>
        <small>categories of files are listed here</small>
      </div>
      <div className="my-5 ">
        <FileTypeForm />
      </div>
      <div>
        <FileTypeList />
      </div>
    </>
  );
}

export default FileTypeIndex;
