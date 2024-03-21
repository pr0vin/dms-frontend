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
        <div className="">
          <div className="heading">
            <h2>Fiscal Year</h2>
            <small>fiscal years are listed here</small>
          </div>

          <div className="my-5">
            <FiscalYearForm handleOpen={handleOpen} />
          </div>
        </div>

        <div className="">
          <FiscalYearList handleOpen={handleOpen} open={open} />
        </div>
      </div>
    </>
  );
}

export default FiscalYearIndex;
