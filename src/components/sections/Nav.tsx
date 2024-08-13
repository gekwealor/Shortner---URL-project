import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStaylinked } from "react-icons/fa";
import Signout from "../authentication/Signout";
import Sidebar from "./Sidebar";

const Nav = () => {
  const [displaySidebar, setDsiplaysidebar] = useState(false);

  return (
    <>
      {displaySidebar && <Sidebar setDsiplaysidebar={setDsiplaysidebar} />}
      {
        <div className="w-full fixed z-20">
          <main className="flex py-6 md:w-[90%] w-full md:border-2 border-b md:rounded-full bg-white m-auto px-[1rem] justify-between items-center">
            <header className="flex items-center space-x-2">
              <FaStaylinked color="#f9a826" size={40} />
              <span className="text-xl font-bold text-[#f9a826]">Tiny-Lnk</span>
            </header>

            <div className="flex items-center space-x-5">
              <Link to="/" className="hidden font-medium md:block">
                Home
              </Link>
              <Link to="/Dashboard" className="hidden font-medium md:block">
                Dashboard
              </Link>
              <Link to="/Faq" className="hidden font-medium md:block">
                Faq
              </Link>
              <Link to="/Price" className="hidden font-medium md:block">
                Pricing
              </Link>
              <Link
                to="/LoginSignup"
                className="hidden md:border-2 md:md:px-2 md:bg-black md:text-white md:hover:bg-indigo-950 md:py-1 md:rounded-md font-medium md:block"
              >
                {" "}
                <Signout />
              </Link>
              {displaySidebar && (
                <h5
                  onClick={() => setDsiplaysidebar((state) => !state)}
                  className="font-bold text-2xl border-2 px-3 cursor-pointer rounded-md"
                >
                  X
                </h5>
              )}
              {!displaySidebar && (
                <svg
                  onClick={() => setDsiplaysidebar((state) => !state)}
                  className="block cursor-pointer md:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </div>
          </main>
        </div>
      }
    </>
  );
};

export default Nav;
