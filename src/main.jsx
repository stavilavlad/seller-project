import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <App />
    <ToastContainer autoClose="2000" position="bottom-right" />
  </>
);
