import React, { useEffect, useState } from "react";
import { useFiscalYear } from "../../context/FiscalYearProvider";
import { BiEdit, BiPlus, BiTrash } from "react-icons/bi";
import { IoMoveSharp } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
import {
  convertEnglishToNepaliUnicode,
  convertToNepaliUnicode,
} from "../../helpers/UnicodeToEnglish";
import DeleteModal from "../../components/DeleteModal";
function FiscalYearList({ handleOpen, open }) {
  const navigate = useNavigate();
  const { fiscalYears, handleDelete, handleSaveOrder } = useFiscalYear();

  const length = fiscalYears && fiscalYears.length;
  const num = convertToNepaliUnicode(length);

  const [makeChange, setMakeChange] = useState(false);
  const [orderedFiscalYears, setOrderedFiscalYears] = useState([]);

  useEffect(() => {
    // Initialize orderedFiscalYears with the initial fiscal years
    setOrderedFiscalYears(fiscalYears);
  }, [fiscalYears]);

  const handleMakeOrder = () => {
    setMakeChange(!makeChange);
  };

  const handleDragStart = (e, index) => {
    // Store the index of the dragged item
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    // Get the index of the dragged item
    const draggedIndex = Number(e.dataTransfer.getData("text/plain"));
    // If the dragged item is not over itself
    if (draggedIndex !== index) {
      const updatedFiscalYears = [...orderedFiscalYears];
      // Remove the dragged item from its original position
      const draggedItem = updatedFiscalYears.splice(draggedIndex, 1)[0];
      // Move the dragged item to the new position
      updatedFiscalYears.splice(index, 0, draggedItem);
      // Update orderedFiscalYears state with the new order
      setOrderedFiscalYears(updatedFiscalYears);
    }
  };

  const handleDragEnd = () => {
    // Reset makeChange state to false after dragging ends
    // setMakeChange(false);
  };
  const onDragEnd = (result, provided) => {
    // Handle drag and drop logic here
  };

  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const deleteItem = (e) => {
    handleDelete(e, deleteId);
    handleShow();
    setDeleteId(0);
  };

  return (
    <div>
      <div className=" flex p-3  items-center justify-between gap-5 ">
        <div className="hading gap-5 items-center heading">
          <h2 className="">आर्थिक वर्षहरू </h2>
        </div>
        <div className="flex gap-3">
          {!makeChange && (
            <div>
              <button
                onClick={handleMakeOrder}
                className="flex myButtonOutline text-primary border-0  "
              >
                Manage Order
              </button>
            </div>
          )}
          {!open && (
            <button onClick={handleOpen} className="flex myButton ">
              <BiPlus size={20} />
              <span>नयाँ</span>
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col overflow-x-scroll   p-2">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full min-h-[60vh] text-center text-sm font-light">
                <thead className="font-medium border-b border-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      सि.न.
                    </th>

                    <th scope="col" className="px-6 py-4">
                      आर्थिक वर्ष
                    </th>
                    <th scope="col" className="px-6 py-4">
                      सुरु मिति
                    </th>
                    <th scope="col" className="px-6 py-4">
                      समाप्त मिति
                    </th>
                    <th scope="col" className="px-6 py-4"></th>
                    <th scope="col" className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {orderedFiscalYears?.map(
                    ({ id, year, startDate, endDate, status }, i) => {
                      // const sn = convertToNepaliUnicode(i + 1);
                      return (
                        <tr
                          key={id}
                          draggable
                          onDragStart={(e) => handleDragStart(e, i)}
                          onDragOver={(e) => handleDragOver(e, i)}
                          onDragEnd={handleDragEnd}
                        >
                          <td className="whitespace-nowrap flex items-center justify-center py-4 font-medium">
                            {makeChange ? (
                              <span>
                                <IoMoveSharp size={18} />
                              </span>
                            ) : (
                              <span>{i + 1}</span>
                            )}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {year}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {startDate}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {endDate}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {status == true && (
                              <span className="text-green-600">Active</span>
                            )}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="flex gap-2">
                              <BiEdit
                                onClick={() =>
                                  navigate(
                                    `/dashboard/config/fiscal-year/${id}`
                                  )
                                }
                                className="text-blue-300"
                                size={23}
                              />
                              <BiTrash
                                onClick={() => {
                                  handleShow();
                                  setDeleteId(id);
                                }}
                                className="text-red-300"
                                size={23}
                              />
                            </div>{" "}
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {makeChange && (
        <div className="flex gap-3  px-3 mt-5">
          <button
            className="myButtonOutline text-red-300"
            onClick={handleMakeOrder}
          >
            Cancel
          </button>
          <button
            className="myButton"
            onClick={() => {
              handleSaveOrder(orderedFiscalYears);
              handleMakeOrder();
            }}
          >
            Save Order
          </button>
        </div>
      )}

      <div>
        <DeleteModal
          show={show}
          handleShow={handleShow}
          deleteItem={deleteItem}
        />
      </div>
    </div>
  );
}

export default FiscalYearList;
