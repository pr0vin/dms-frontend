import React, { useEffect, useState } from "react";
import FiscalYearForm from "./FiscalYearForm";
import FiscalYearList from "./FiscalYearList";
import { useParams } from "react-router-dom";
import Modal from "../../helpers/Modal";

function FiscalYearIndex() {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (id) {
      setOpen(true);
    }
  }, [id]);
  return (
    <>
      <div className="">
        <div>
          <Modal open={open} onClose={handleOpen}>
            {open && (
              <div className="w-[400px] min-h-[50vh]">
                <FiscalYearForm handleOpen={handleOpen} />
              </div>
            )}
          </Modal>
        </div>

        <div className="  bg-white">
          <FiscalYearList handleOpen={handleOpen} open={open} />
        </div>
      </div>
    </>
  );
}

export default FiscalYearIndex;
