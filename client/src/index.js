import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./Routing";
import "../src/index.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
