import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cases from "./pages/Cases";
import Straps from "./pages/Straps";
import PowerBanks from "./pages/PowerBanks";
import Cables from "./pages/Cables";
import MagSafe from "./pages/MagSafe";
import Charger from "./pages/Charger";

import "./index.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="cases" element={<Cases />}></Route>
          <Route path="straps" element={<Straps />}></Route>
          <Route path="power_banks" element={<PowerBanks />}></Route>
          <Route path="cables" element={<Cables />}></Route>
          <Route path="magsafe" element={<MagSafe />}></Route>
          <Route path="charger" element={<Charger />}></Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
