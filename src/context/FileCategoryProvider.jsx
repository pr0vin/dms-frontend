import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { notifyError, notifySuccess } from "../helpers/ToastMessage";

const FileCategoryContext = createContext();

const init = {
  fileCategoryLoading: true,
  fileCategories: [],
  fileCategory: {},
};

function FileCategoryProvider({ children }) {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, init);

  const handleSubmit = async (data) => {
    try {
      const res = await axios.post(`/api/file-categories`, data);
      getFileCategories();
      notifySuccess(res.data.message);
    } catch (error) {
      notifyError(error.response.data.message);
    }
  };
  const handleUpdate = async (data, id) => {
    try {
      const res = await axios.put(`/api/file-categories/${id}`, data);

      getFileCategories();
      notifySuccess(res.data.message);
      navigate(`/dashboard/settings/config/file-categories`);
    } catch (error) {
      notifyError(error.response.data.message);
    }
  };
  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const res = await axios.delete(`/api/file-categories/${id}`);
      getFileCategories();
      notifySuccess(res.data.message);
      navigate(`/dashboard/settings/config/file-categories`);
    } catch (error) {
      notifyError(error.response.data.message);
    }
  };

  const getFileCategories = async () => {
    try {
      const res = await axios.get(`/api/file-categories`);
      dispatch({ type: "ALL", payload: res.data.data });
      notifySuccess(res.data.message);
    } catch (error) {
      notifyError(error.response.data.message);
    }
  };
  const getFileCategory = async (id) => {
    try {
      const res = await axios.get(`/api/file-categories/${id}`);
      dispatch({ type: "SINGLE", payload: res.data.data });
    } catch (error) {
      notifyError(error.response.data.message);
    }
  };

  useEffect(() => {
    getFileCategories();
  }, []);

  return (
    <FileCategoryContext.Provider
      value={{
        ...state,
        handleDelete,
        handleSubmit,
        handleUpdate,
        getFileCategory,
      }}
    >
      {children}
    </FileCategoryContext.Provider>
  );
}

const useFileCategory = () => {
  return useContext(FileCategoryContext);
};

export { FileCategoryProvider, useFileCategory };

const reducer = (state, action) => {
  switch (action.type) {
    case "ALL":
      return {
        ...state,

        fileCategories: action.payload,
      };

    case "SINGLE":
      return {
        ...state,
        fileCategoryLoading: false,
        fileCategory: action.payload,
      };

    default:
      return state;
  }
};
