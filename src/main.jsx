import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { FiscalYearProvider } from "./context/FiscalYearProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FiscalYearProvider>
          <App />
        </FiscalYearProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
