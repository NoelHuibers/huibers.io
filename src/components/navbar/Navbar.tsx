"use client";
import { useState } from "react";
import Logo from "./Logo";
import NavbarItems from "./NavbarItems";
import { motion } from "framer-motion";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const drawerVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <div className="fixed left-0 top-0 z-50 w-full  bg-opacity-75 px-6 py-4 backdrop-blur-lg sm:flex sm:items-center sm:justify-between sm:bg-transparent sm:backdrop-blur-none">
      <div className="flex w-full items-center justify-between lg:w-auto">
        <Logo />
        <Hamburger
          isOpen={isNavExpanded}
          toggle={() => setIsNavExpanded(!isNavExpanded)}
        />
      </div>
      <nav>
        <div className="hidden flex-row items-center justify-end space-x-4 sm:flex">
          <NavbarItems />
        </div>
        <motion.div
          initial="closed"
          animate={isNavExpanded ? "open" : "closed"}
          variants={drawerVariants}
          className="absolute right-0 top-full mt-2 flex w-full max-w-xs flex-col space-y-1 shadow-md sm:hidden"
        >
          <NavbarItems />
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
