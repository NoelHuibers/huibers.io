"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const NavbarItems = () => {
  const [activeId, setActiveId] = useState("main");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const enabledColour =
    "text-lightBlueN hover:text-redN active:text-lightBlueN";
  const disabledColour =
    "text-slate-100 hover:text-redN active:text-lightBlueN";

  return (
    <>
      <a
        href="#main"
        className={activeId === "main" ? enabledColour : disabledColour}
      >
        .main()
      </a>
      <a
        href="#work"
        className={activeId === "work" ? enabledColour : disabledColour}
      >
        .work()
      </a>
      <a
        href="#about"
        className={activeId === "about" ? enabledColour : disabledColour}
      >
        .about()
      </a>
      <a
        href="#contact"
        className={activeId === "contact" ? enabledColour : disabledColour}
      >
        .contact()
      </a>
      <a
        href="https://www.linkedin.com/in/huibers/"
        className="text-redN hover:text-slate-100"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <FaLinkedinIn className="text-xl" />
      </a>
      <a
        href="https://github.com/NoelHuibers"
        className="text-redN hover:text-slate-100"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <FaGithub className="text-xl" />
      </a>
    </>
  );
};

export default NavbarItems;
