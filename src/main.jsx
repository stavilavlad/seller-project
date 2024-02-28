import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { store } from "./store.js";
import { Provider } from "react-redux";
const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
    <ToastContainer autoClose="2000" position="bottom-right" />
  </Provider>
);
