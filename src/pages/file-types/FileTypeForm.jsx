import React from "react";

function FileTypeForm() {
  return (
    <>
      <div className=" shadow-md rounded-lg bg-white  ">
        <div className=" p-3  text-xs text-gray-700 uppercase rounded-t-lg bg-gray-50">
          Add New
        </div>
        <form action="">
          <div className="md:grid grid-cols-4 gap-3  p-3">
            <div className="mb-3">
              <input
                type="text"
                name="type"
                placeholder="File Type"
                className="myInput"
              />
            </div>

            <div className="mb-3 col-span-2">
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="myInput"
              />
            </div>
            <div className="flex gap-2">
              <button className="myButton ">Add</button>

              <button className="myButtonOutline  ">Reset</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default FileTypeForm;
