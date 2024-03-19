import React, { useState } from "react";
import { ExpenseType, FileTypes, fiscalYears } from "../../../jsons/Data";

function DataVoucherForm() {
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
  const [files, setFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const MAX_FILE_SIZE = 10 * 1024 * 1024;

  const handleDrop = (event) => {
    event.preventDefault();
    const newFiles = Array.from(event.dataTransfer.files);
    setFiles([...files, ...newFiles]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileInputChange = (event) => {
    const newFiles = Array.from(event.target.files);
    handleFiles(newFiles);
  };

  const handleFiles = (newFiles) => {
    const allowedFiles = newFiles.filter((file) => file.size <= MAX_FILE_SIZE);
    const oversizedFiles = newFiles.filter((file) => file.size > MAX_FILE_SIZE);

    if (oversizedFiles.length > 0) {
      setErrorMessage("File size exceeds the maximum limit (10MB).");
    } else {
      setErrorMessage("");
      setFiles([...files, ...allowedFiles]);
    }
  };

  const handleFileRemove = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
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
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });

    console.log(formData);
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
      voucher_date: "",
      room_no: "",
      yark: "",
      caben_no: "",
      file_no: "",
      remarks: "",
    });
  };

  return (
    <div className=" w-full  ">
      <form onSubmit={handleSubmit}>
        <div className="py-2 font-bold text-gray-400 text-lg mb-5">
          दर्ता विवरण
        </div>
        <div className=" md:grid grid-cols-2  gap-3">
          <div className="w-full md:w-10/12 ">
            <div className="mb-5">
              <label htmlFor="voucher_no" className="myLabel">
                Voucher No.
              </label>

              <input
                type="text"
                name="voucher_no"
                onChange={handleInputChange}
                value={data.voucher_no}
                className="myInput"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="voucher_date" className="myLabel">
                voucher date
              </label>

              <input
                type="text"
                name="voucher_date"
                value={data.voucher_date}
                onChange={handleInputChange}
                className="myInput"
              />
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
            </div>
          </div>
        </div>

        {/* files */}

        <hr className="my-5 text-primary" />
        <div className="py-2 font-bold text-gray-400 text-lg mb-5 ">
          फाइलहरूको विवरण
        </div>
        <div className=" md:grid grid-cols-2  gap-3">
          <div className="w-full md:w-10/12 ">
            <div className="mb-5">
              <div className="mb-5">
                <label htmlFor="file_no" className="myLabel">
                  File No.
                </label>

                <input
                  type="text"
                  name="file_no"
                  value={data.file_no}
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
                  name="caben_no"
                  value={data.caben_no}
                  onChange={handleInputChange}
                  className="myInput"
                />
              </div>
              <label htmlFor="room_no" className="myLabel">
                Room No.
              </label>

              <input
                type="text"
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
                name="yark_no"
                value={data.yark_no}
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
            <div className="my-5">
              <label htmlFor="remarks" className="myLabel">
                Remarks
              </label>

              <input
                type="text"
                placeholder="write something"
                name="remarks"
                value={data.remarks}
                onChange={handleInputChange}
                className="myInput "
              />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="md:w-10/12 w-full">
              <div className="mb-5">
                <label htmlFor="file_type" className="myLabel">
                  File Type
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
                        multiple
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
              {errorMessage && (
                <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
              )}
              <div className="mt-4 grid grid-cols-2 gap-4">
                {files?.map((file, index) => (
                  <div key={index} className="p-2 bg-gray-100 rounded-md">
                    <p className="text-xs">{file.name}</p>
                    <button
                      onClick={() => handleFileRemove(index)}
                      className="text-xs text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=" md:flex justify-end  gap-10 my-16">
          <button type="reset" className="myButtonOutline  px-16">
            Clear
          </button>
          <button type="submit" className="myButton  px-16">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default DataVoucherForm;
