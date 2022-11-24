import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";

import "./index.css";

const rootElem = document.getElementById("root");
const root = ReactDOM.createRoot(rootElem);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
