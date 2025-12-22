"use client";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const drawerVariants: Variants = {
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
    <div className="fixed top-0 left-0 z-100 flex h-fit w-full flex-col lg:flex-row lg:items-center lg:justify-between">
      <div
        className={
          isNavExpanded
            ? "z-50 flex w-full items-center justify-between bg-transparent px-6 pt-4 pb-2 lg:w-auto lg:bg-transparent lg:backdrop-blur-none"
            : "bg-opacity-75 flex w-full items-center justify-between px-6 pt-4 pb-2 backdrop-blur-lg lg:w-auto lg:bg-transparent lg:backdrop-blur-none"
        }
      >
        <Logo isNavExpaned={isNavExpanded} />
        <Hamburger
          isOpen={isNavExpanded}
          toggle={() => setIsNavExpanded(!isNavExpanded)}
        />
      </div>
      <nav>
        <div className="hidden flex-row items-center justify-end space-x-4 px-6 pt-4 pb-2 lg:flex">
          <NavbarItems closeNav={() => setIsNavExpanded(false)} />
        </div>

        <motion.div
          initial="closed"
          animate={isNavExpanded ? "open" : "closed"}
          variants={drawerVariants}
          className={
            "absolute top-0 z-40 flex w-full flex-col space-y-2 rounded-l-xl bg-white px-6 pt-14 pb-4 lg:hidden"
          }
        >
          <NavbarItems closeNav={() => setIsNavExpanded(false)} />
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
