import React from "react";
import { Link } from "react-router-dom";
const NavBtn = (props: { route: string; routeStr: string; icon: string }) => {
  return (
    <li>
      <Link to={props.route}>
        <button className="w-full h-16 hover:bg-slate-100 bg-slate-200">
          <h3 className="hidden md:block">{props.routeStr}</h3>
          <i className={"visible md:hidden " + props.icon}></i>
        </button>
      </Link>
    </li>
  );
};

export default NavBtn;
