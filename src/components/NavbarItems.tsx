import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const NavbarItems = () => {
  return (
    <>
      <a href="#main" className="hover:text-redN text-slate-100">
        .main()
      </a>
      <a href="#work" className="hover:text-redN text-slate-100">
        .work()
      </a>
      <a href="#about" className="hover:text-redN text-slate-100">
        .about()
      </a>
      <a href="#contact" className="hover:text-redN text-slate-100">
        .contact()
      </a>
      <a
        href="https://www.linkedin.com/in/huibers/"
        className="text-redN hover:text-slate-100"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://github.com/NoelHuibers"
        className="text-redN hover:text-slate-100"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <FaGithub />
      </a>
    </>
  );
};

export default NavbarItems;
