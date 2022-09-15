import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "tw-elements";
import StorageWrapper from "./Store";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StorageWrapper>
    <App />
  </StorageWrapper>
);
