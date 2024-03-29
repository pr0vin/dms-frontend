import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { FiscalYearProvider } from "./context/FiscalYearProvider.jsx";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { FileCategoryProvider } from "./context/FileCategoryProvider.jsx";
import { RegistrationEntryProvider } from "./context/RegistrationEntryProvider.jsx";
import { VoucherEntryProvider } from "./context/VoucherEntryProvider.jsx";

const API_URL = import.meta.env.VITE_API_URL;
axios.defaults.baseURL = API_URL;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <FiscalYearProvider>
          <FileCategoryProvider>
            <RegistrationEntryProvider>
              <VoucherEntryProvider>
                <App />
              </VoucherEntryProvider>
            </RegistrationEntryProvider>
          </FileCategoryProvider>
        </FiscalYearProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
