import React, { useState } from "react";
import Modal from "../helpers/Modal";

function DeleteModal({ deleteItem, show, handleShow }) {
  return (
    <div>
      {/* Delete Modal */}
      <div>
        <Modal open={show} onClose={handleShow}>
          <div className="text-center w-full">
            <div className="mx-auto my-4 w-48">
              <h3 className="text-lg font-black text-gray-800">
                Confirm Delete
              </h3>
              <p className="text-sm text-gray-500">
                Are you sure you want to delete this item?
              </p>
            </div>
            <div className="flex gap-4">
              <button
                className="border border-red-300 w-full"
                onClick={handleShow}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white hover:bg-red-800 w-full px-2"
                onClick={deleteItem}
              >
                Delete
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default DeleteModal;
