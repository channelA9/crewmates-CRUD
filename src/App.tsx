import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import "./App.css";
import NavBtn from "./components/NavBtn";

function App() {
  return (
    <div className="App bg-slate-200">
      <div className="place-items-start flex flex-row-reverse md:flex-row  place-content-start">
        <nav className="h-fit w-fit overflow-x-scroll md:overflow-x-hidden">
          <ul className="h-screen w-16 md:w-48 lg:w-64 z-0 flex-none">
            <NavBtn route="" routeStr="Dashboard" icon="fa-solid fa-house" />
            <NavBtn route="other" routeStr="Other" icon="fa-solid fa-gauge"/>
          </ul>
        </nav>
        <main className="min-w-screen md:min-w-fit min-h-screen flex-grow bg-slate-100 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
