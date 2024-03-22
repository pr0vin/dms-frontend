import React from "react";
import { useNavigate } from "react-router-dom";
import { useRegistrationEntry } from "../../context/RegistrationEntryProvider";
import axios from "axios";

function DataEntryList() {
  const navigate = useNavigate();
  const { regEntries } = useRegistrationEntry();

  const handleDecrypt = async (fileId) => {
    try {
      const response = await axios.get(
        `/api/registration-files/${fileId}/decrypt`
      );
      console.log(response.data);

      // Open the decrypted document in a new tab
      window.open(response.data, "_blank");
    } catch (error) {
      console.error("Error decrypting content:", error);
      // Handle error (e.g., display error message to the user)
    }
  };

  return (
    <div className="">
      <div className="mb-5">
        <h2 className="font-bold text-2xl text-primary">Files</h2>
        <p className="text-sm text-gray-600">Here is the list of files</p>
      </div>
      <div className="text-end my-3">
        <button
          className="myButton"
          onClick={() => navigate(`/data-entry/form`)}
        >
          {" "}
          Add new
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {/* <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th> */}
              <th scope="col" className="px-6 py-3">
                Registration Date
              </th>
              <th scope="col" className="px-6 py-3">
                Registration No
              </th>
              <th scope="col" className="px-6 py-3">
                Room No
              </th>

              <th scope="col" className="px-6 py-3">
                Caben No
              </th>
              <th scope="col" className="px-6 py-3">
                Yark No
              </th>
              <th scope="col" className="px-6 py-3">
                File No
              </th>
              <th scope="col" className="px-6 py-3">
                Remarks
              </th>
              <th scope="col" className="px-6 py-3">
                Download
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {regEntries?.map(
              (
                {
                  reg_date,
                  reg_no,
                  file_no,
                  caben_no,
                  yark_no,
                  room_no,
                  documents,
                  remarks,
                },
                i
              ) => (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  {/* <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td> */}
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {reg_date}
                  </th>
                  <td className="whitespace-pre px-6  py-4">{reg_no}</td>
                  <td className="whitespace-pre px-6  py-4">{room_no}</td>
                  <td className="whitespace-pre px-6  py-4">{caben_no}</td>
                  <td className="whitespace-pre px-6  py-4">{yark_no}</td>
                  <td className="whitespace-pre px-6  py-4">{file_no}</td>
                  <td className="whitespace-pre px-6  py-4">{remarks}</td>
                  <td className="whitespace-pre px-6 py-4">
                    {documents.map((document) => (
                      <button
                        key={document.id}
                        onClick={() => handleDecrypt(document.id)}
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        doc
                      </button>
                    ))}
                  </td>
                  <td className="flex items-center px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                    >
                      Remove
                    </a>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataEntryList;
