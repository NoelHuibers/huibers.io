"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const NavbarItems = (props: { closeNav: () => void }) => {
  const { closeNav } = props;
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
    "text-blueN hover:text-redN w-fit active:text-lightBlueN lg:text-lightBlueN lg:hover:text-redN lg:active:text-lightBlueN";
  const disabledColour =
    "text-blueN hover:text-redN w-fit active:text-lightBlueN lg:text-slate-100 lg:hover:text-redN lg:active:text-lightBlueN";

  return (
    <>
      <a
        href="#main"
        className={activeId === "main" ? enabledColour : disabledColour}
        onClick={closeNav}
      >
        .main()
      </a>
      <a
        href="#work"
        className={activeId === "work" ? enabledColour : disabledColour}
        onClick={closeNav}
      >
        .work()
      </a>
      <a
        href="#about"
        className={activeId === "about" ? enabledColour : disabledColour}
        onClick={closeNav}
      >
        .about()
      </a>
      <a
        href="#contact"
        className={activeId === "contact" ? enabledColour : disabledColour}
        onClick={closeNav}
      >
        .contact()
      </a>
      <a
        href="https://www.linkedin.com/in/huibers/"
        className="w-fit text-redN hover:text-blueN lg:hover:text-slate-100"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <FaLinkedinIn className="my-0.5 text-xl lg:my-0" />
      </a>
      <a
        href="https://github.com/NoelHuibers"
        className="w-fit text-redN hover:text-blueN lg:hover:text-slate-100"
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
