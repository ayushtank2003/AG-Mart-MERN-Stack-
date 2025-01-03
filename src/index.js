import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";
import { makeServer } from "./server";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Call make Server
if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}
console.log('Current Environment:', process.env.NODE_ENV);

root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
