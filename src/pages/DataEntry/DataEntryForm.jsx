import React, { useState } from "react";
import { ExpenseType, FileTypes, fiscalYears } from "../../jsons/Data";

function DataEntryForm() {
  const [data, setData] = useState({
    fiscal_year: "",
    file_type: "",
    expense_type: "",
    reg_date: "",
    reg_no: "",
    voucher_no: "",
    room_no: "",
    yark_no: "",
    caben_no: "",
    file_no: "",
    remarks: "",
    private: false,
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDrop = (event) => {
    event.preventDefault();
    const newFile = event.dataTransfer.files[0];
    setFile(newFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileInputChange = (event) => {
    const newFile = event.target.files[0];
    setFile(newFile);
  };

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckBoxChange = (e) => {
    setData({
      ...data,
      private: !data.private,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };

  const setEmpty = () => {
    setData({
      ...data,
      fiscal_year: "",
      file_type: "",
      expense_type: "",
      reg_date: "",
      reg_no: "",
      voucher_no: "",
      room_no: "",
      yark: "",
      caben_no: "",
      file_no: "",
      remarks: "",
    });

    setFile("");
  };

  return (
    <div className="p-5 w-full  md:w-10/12 mx-auto bg-white shadow-xl">
      <div className="mb-5">
        <h2 className="font-bold text-2xl text-amber-500">Data Entry Form</h2>
        <p className="text-sm text-gray-600">Fill the form below</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className=" md:grid grid-cols-2  gap-3">
          <div className="w-full md:w-10/12 ">
            <div className="mb-5">
              <label htmlFor="reg_date" className="myLabel">
                Registration Date
              </label>

              <input
                id="reg_date"
                type="text"
                placeholder="Registration Date"
                name="reg_date"
                onChange={handleInputChange}
                value={data.reg_date}
                className="myInput"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="" className="myLabel">
                Registration No.
              </label>

              <input
                type="text"
                placeholder="Registration No."
                name="reg_no"
                onChange={handleInputChange}
                value={data.reg_no}
                className="myInput"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="voucher_no" className="myLabel">
                Voucher No.
              </label>

              <input
                type="text"
                placeholder="Voucher No."
                name="voucher_no"
                onChange={handleInputChange}
                value={data.voucher_no}
                className="myInput"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="room_no" className="myLabel">
                Room No.
              </label>

              <input
                type="text"
                placeholder="Room No"
                name="room_no"
                value={data.room_no}
                onChange={handleInputChange}
                className="myInput"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="yark_no" className="myLabel">
                Yark No.
              </label>

              <input
                type="text"
                placeholder="Yark No."
                name="yark_no"
                value={data.yark_no}
                onChange={handleInputChange}
                className="myInput"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="caben_no" className="myLabel">
                Caben No.
              </label>

              <input
                type="text"
                placeholder="Caben No."
                name="caben_no"
                value={data.caben_no}
                onChange={handleInputChange}
                className="myInput"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="file_no" className="myLabel">
                File No.
              </label>

              <input
                type="text"
                placeholder="File No."
                name="file_no"
                value={data.file_no}
                onChange={handleInputChange}
                className="myInput"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="privacy" className="myLabel">
                Privacy
              </label>

              <div className="flex items-center gap-2">
                <input
                  id="privacy_checkbox"
                  type="checkbox"
                  name="privacy"
                  value={data.private}
                  onChange={handleCheckBoxChange}
                />
                <label htmlFor="privacy_checkbox" className="text-gray-600">
                  private
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="md:w-10/12 w-full">
              <div className="mb-5">
                <label htmlFor="fiscal_year" className="myLabel">
                  Fiscal Year
                </label>

                <select
                  className="mySelect"
                  name="fiscal_year"
                  value={data.fiscal_year}
                  onChange={handleInputChange}
                  id="fiscal_year"
                >
                  <option value="">Select Fiscal Years</option>

                  {fiscalYears?.map(({ year, id }, i) => (
                    <option key={i} value={id}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-5">
                <label htmlFor="expense_type" className="myLabel">
                  Expenese Type
                </label>

                <select
                  className="mySelect"
                  name="expense_type"
                  value={data.expense_type}
                  onChange={handleInputChange}
                  id="expense_type"
                >
                  <option value="">Select Expense Type</option>

                  {ExpenseType?.map(({ type, id }, i) => (
                    <option key={i} value={id}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-5">
                <label htmlFor="file_type" className="myLabel">
                  FIle Type
                </label>

                <select
                  className="mySelect"
                  name="file_type"
                  value={data.file_type}
                  onChange={handleInputChange}
                  id="file_type"
                >
                  <option value="">Select File Type</option>
                  {FileTypes?.map(({ type, id }, i) => (
                    <option key={i} value={id}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 mt-5"
              >
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600  hover:underline hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        onChange={handleFileInputChange}
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
              {file && (
                <div>
                  <p className="text-xs p-2">file:{file.name}</p>
                </div>
              )}

              <div className="my-5">
                <label htmlFor="remarks" className="myLabel">
                  Remarks
                </label>

                <input
                  type="text"
                  placeholder="Remarks"
                  name="remarks"
                  value={data.remarks}
                  onChange={handleInputChange}
                  className="myInput"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between  gap-10 my-16">
          <button type="reset" className="myButtonOutline md:px-20 px-10">
            Clear
          </button>
          <button type="submit" className="myButton md:px-20 px-10">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default DataEntryForm;
