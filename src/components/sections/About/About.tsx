import { FaGithub } from "react-icons/fa6";
import AnimText from "./AnimText";

const About = () => {
  return (
    <div className="w-1/2 space-y-2">
      <AnimText />
      <p className="text-slate-50">
        I&apos;m rewriting this page currently to make it more performant,
        cleaner, and more mobile friendly. So here are some Links to projects:
      </p>
      <div className="flex flex-row items-center space-x-2">
        <p className="text-slate-50">
          <a
            href="https://huibersold.vercel.app/"
            className=" hover:text-redN"
            target="_blank"
            rel="noreferrer"
          >
            Oldpage
          </a>
        </p>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <p className="text-slate-50">
          <a
            href="https://nueslify.com/"
            className=" hover:text-redN"
            target="_blank"
            rel="noreferrer"
          >
            Nueslify
          </a>
        </p>
        <a
          href="https://github.com/NoelHuibers/nueslify"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-slate-50 hover:text-redN" />
        </a>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <p className="text-slate-50">
          <a
            href="https://hashi.rs/"
            className=" hover:text-redN"
            target="_blank"
            rel="noreferrer"
          >
            Hashiwokakero
          </a>
        </p>
        <a
          href="https://github.com/NoelHuibers/Hashiwokakero"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-slate-50 hover:text-redN" />
        </a>
      </div>
    </div>
  );
};

export default About;
