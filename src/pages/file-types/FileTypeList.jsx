import React from "react";
import { useFileCategory } from "../../context/FileCategoryProvider";
import { Link } from "react-router-dom";

function FileTypeList() {
  const { fileCategories } = useFileCategory();
  return (
    <div>
      {" "}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.N.
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                description
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {fileCategories?.map(({ id, name, description }, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th className="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {i + 1}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {name}
                </th>
                <td className="px-6 py-4 text-start">{description}</td>

                <td className="flex items-center px-6 py-4">
                  <Link
                    to={`/dashboard/settings/config/file-categories/${id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                  <span className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                    Remove
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FileTypeList;
