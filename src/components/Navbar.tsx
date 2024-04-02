"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "./Logo";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="fixed left-0 top-0 z-50 w-full  bg-opacity-75 px-6 py-4 backdrop-blur-lg sm:flex sm:items-center sm:justify-between sm:bg-transparent sm:backdrop-blur-none">
      <div className="flex w-full justify-between lg:w-auto">
        <Logo />
        <button
          onClick={() => setIsNavExpanded(!isNavExpanded)}
          className="sm:hidden"
        >
          <FaBars className="text-slate-100" />
        </button>
      </div>
      <nav
        className={`${isNavExpanded ? "flex" : "hidden"} absolute right-0 top-full mt-2 flex-col items-end  px-4 py-2 shadow-md sm:static sm:top-auto sm:mt-0 sm:flex sm:w-auto sm:flex-row sm:items-center sm:justify-end sm:space-x-4 sm:bg-transparent sm:p-0 sm:shadow-none`}
      >
        <NavbarItems />
      </nav>
    </div>
  );
};

export default Navbar;
