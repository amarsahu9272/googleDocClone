import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers";
import Signup from "./pages/signup/Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routers />
      {/* <Signup /> */}
    </BrowserRouter>
  </React.StrictMode>
);
