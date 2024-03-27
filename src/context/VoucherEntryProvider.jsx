import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const voucherContext = createContext();

const init = {
  voucherEntries: [],
  voucherEntry: {},
  voucherEntryLoading: false,
};

function VoucherEntryProvider({ children }) {
  const [data, setData] = useState({
    fiscal_year_id: "",
    file_category_id: "",
    branch_id: "",
    expense_type: "",
    voucher_date: "",
    ad_voucher_date: "",
    voudher_no: "",
    room_no: "",
    yark_no: "",
    caben_no: "",
    file_no: "",
    remarks: "",
    private: false,
  });
  const handleDateCahange = ({ adDate, bsDate }) => {
    setData({
      ...data,
      reg_date: bsDate,
      ad_reg_date: adDate,
    });
  };

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const [state, dispatch] = useReducer(reducer, init);

  const handleSubmit = async (data) => {
    try {
      const res = await axios.post(`/api/voucher-entries`, data);
      notifySuccess(res.data.message);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const handleUpdate = async (data, id) => {
    try {
      const res = await axios.put(`/api/voucher-entries/${id}`, data);
      notifySuccess(res.data.message);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`/api/voucher-entries/${id}`);
      notifySuccess(res.data.message);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const getEntries = async () => {
    try {
      const res = await axios.get(`/api/voucher-entries`, data);
      notifySuccess(res.data.message);
      dispatch({ type: "ALL", payload: res.data.data });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    getEntries();
  }, []);

  return (
    <voucherContext.Provider
      value={{
        ...state,
        data,
        handleDateCahange,
        handleDelete,
        handleSubmit,
        handleUpdate,
        handleInputChange,
      }}
    >
      {children}
    </voucherContext.Provider>
  );
}

const useVoucherEntry = () => {
  return useContext(voucherContext);
};

export { VoucherEntryProvider, useVoucherEntry };

const reducer = (state, action) => {
  switch (action.type) {
    case "ALL":
      return {
        ...state,
        voucherEntries: action.payload,
      };
    case "SINGLE":
      return {
        ...state,
        voucherEntry: action.payload,
      };

    default:
      return state;
  }
};
