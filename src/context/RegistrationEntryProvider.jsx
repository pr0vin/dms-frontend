import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { notifySuccess } from "../helpers/ToastMessage";
import { useNavigate } from "react-router-dom";

const RegistrationEntryContext = createContext();

const init = {
  regEntries: [],
  regEntry: {},
};
function RegistrationEntryProvider({ children }) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fiscal_year_id: "",
    file_category_id: "",
    branch_id: "",
    expense_type: "",
    reg_date: "",
    ad_reg_date: "",
    reg_no: "",
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

  const setEmpty = () => {
    setData({
      ...data,
      fiscal_year_id: "",
      file_category_id: "",
      branch_id: "",
      expense_type: "",
      reg_date: "",
      ad_reg_date: "",
      reg_no: "",
      room_no: "",
      yark_no: "",
      caben_no: "",
      file_no: "",
      remarks: "",
      private: false,
    });
  };

  const [state, dispatch] = useReducer(reducer, init);

  const handleSubmit = async (data) => {
    try {
      const res = await axios.post(`/api/entries`, data);
      notifySuccess(res.data.message);
      setEmpty();
      getEntries();
      navigate(`/data-entry`);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const handleUpdate = async (data, id) => {
    try {
      const res = await axios.put(`/api/entries/${id}`, data);
      notifySuccess(res.data.message);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`/api/entries/${id}`);
      notifySuccess(res.data.message);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const getEntries = async () => {
    try {
      const res = await axios.get(`/api/entries`, data);
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
    <RegistrationEntryContext.Provider
      value={{
        ...state,
        handleSubmit,
        handleDateCahange,
        handleInputChange,
        handleDelete,
        handleUpdate,
        data,
      }}
    >
      {children}
    </RegistrationEntryContext.Provider>
  );
}

const useRegistrationEntry = () => {
  return useContext(RegistrationEntryContext);
};
export { RegistrationEntryProvider, useRegistrationEntry };

const reducer = (state, action) => {
  switch (action.type) {
    case "ALL":
      return {
        ...state,
        regEntries: action.payload,
      };
    case "SINGLE":
      return {
        ...state,
        regEntry: action.payload,
      };

    default:
      return state;
  }
};
