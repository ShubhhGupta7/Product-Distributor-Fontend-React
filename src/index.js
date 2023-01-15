import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ApplicationStatusContextProvider } from "./store/status-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApplicationStatusContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApplicationStatusContextProvider>
  </React.StrictMode>
);
