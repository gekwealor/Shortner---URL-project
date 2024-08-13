import React from "react";
import Signout from "../authentication/Signout";
import { Link } from "react-router-dom";
interface showSidebarType {
  setDsiplaysidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ setDsiplaysidebar }: showSidebarType) => {
  return (
    <main className="w-full fixed h-screen mt-[85px] md:hidden z-20">
      <section className="w-full h-[500px] bg-orange-400">
        <div className="block">
          <Link
            to="/"
            onClick={() => setDsiplaysidebar(false)}
            className=" border-b-2 py-4 px-3 block font-medium md:block hover:bg-white hover:text-[orange-400] transition-all ease-out hover:font-bold"
          >
            Home
          </Link>
          <Link
            to="/Dashboard"
            onClick={() => setDsiplaysidebar(false)}
            className=" border-b-2 py-4 px-3 block font-medium  hover:bg-white hover:text-[orange-400] transition-all ease-out hover:font-bold"
          >
            Dashboard
          </Link>
          <Link
            to="/Faq"
            onClick={() => setDsiplaysidebar(false)}
            className=" border-b-2 py-4 px-3 block font-medium hover:bg-white hover:text-[orange-400] transition-all ease-out hover:font-bold"
          >
            Faq
          </Link>
          <Link
            to="/Price"
            onClick={() => setDsiplaysidebar(false)}
            className=" border-b-2 py-4 px-3 block font-medium hover:bg-white hover:text-[orange-400] transition-all ease-out hover:font-bold"
          >
            Pricing
          </Link>
          <Link
            to="/LoginSignup"
            onClick={() => setDsiplaysidebar(false)}
            className=" border-b-2 py-4 px-3 block hover:bg-white hover:text-[orange-400] transition-all ease-out hover:font-bold md:border-2 md:md:px-2 md:bg-black md:text-white md:hover:bg-indigo-950 md:py-1 md:rounded-md font-medium"
          >
            {" "}
            <Signout />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Sidebar;
