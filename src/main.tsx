import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";

import Other from "./routes/Other";
import Dashboard from "./routes/Dashboard";
import Board from "./components/Board";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="" element={<Dashboard/>} />
        <Route path="other" element={<Other/>}>
          <Route index element={<h3>Please select another from the Dashboard.</h3>} />
          <Route path=":id" element={<Board/>} />  
        </Route>
        <Route path="*" element={<h3>???</h3>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
