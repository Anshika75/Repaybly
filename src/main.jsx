import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "tw-elements";
import StorageWrapper from "./Store";
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <StorageWrapper>
      <App />
    </StorageWrapper>
  </BrowserRouter>
);
