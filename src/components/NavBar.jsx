import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 shadow-sm">
      <div className="flex flex-wrap justify-between items-center px-4 lg:px-14 lg:py-6 py-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-6" alt="koinX" />
        </a>
        <div className="flex items-center space-x-6">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-whit">
              <li>
                <a href="#" className="block py-2 px-3 text-black md:p-0">
                  Crypto Taxes
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-black md:p-0">
                  Free Tools
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-black md:p-0">
                  Resource Center
                </a>
              </li>
              <li>
                <a className="text-white bg-[#0052fe] hover:bg-[#0052fe] focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-6 py-2 text-center">
                  Get started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
