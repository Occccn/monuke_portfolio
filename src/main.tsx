import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";

import Root from "./root.jsx";
const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
