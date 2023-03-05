import { React, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";
import "../index.css";

let Navbar = () => {
  let activeClassName =
    "text-xl uppercase font-bold tracking-wide transition-colors duration-200 text-yellow-500  border-b-4 border-green-700 ";
  let inactiveClassname =
    "text-xl uppercase font-bold tracking-wide text-green-600 transition-colors duration-200 hover:text-yellow-500 hover:border-b-4 hover:border-green-700";
  return (
    <div>
      <div className="border-b-4 fixed h-28 bg-yellow-50 right-0 left-0 z-40  py-6">
        <div className="relative flex  w-full px-24 lg:flex-nowrap justify-around ">
          <ul className="flex items-center mx-16 gap-16 space-x-10 lg:flex">
            <li>
              <NavLink
                to="/order"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassname
                }
              >
                How To Order
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassname
                }
              >
                Our Menu
              </NavLink>
            </li>
          </ul>

          <img src={logo}></img>

          <ul className="mx-16 gap-16 flex items-center space-x-10 lg:flex">
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassname
                }
              >
                Sulkhans News
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassname
                }
              >
                About Sulkhans
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
