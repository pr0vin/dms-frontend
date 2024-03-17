import React from "react";

function DataEntryForm() {
  return (
    <div>
      <div>Fill the form below</div>

      <form action="">
        <div className="mb-2">
          <label htmlFor="" className="myLabel">
            Fiscal Year
          </label>

          <input type="text" placeholder="FiscalYear" name="fiscal_year" />
        </div>
        <div className="mb-2">
          <label htmlFor="" className="myLabel">
            File Type
          </label>

          <input type="text" placeholder="FiscalYear" name="fiscal_year" />
        </div>
        <div className="mb-2">
          <label htmlFor="" className="myLabel">
            Expense Type
          </label>

          <input type="text" placeholder="FiscalYear" name="fiscal_year" />
        </div>
      </form>
    </div>
  );
}

export default DataEntryForm;
