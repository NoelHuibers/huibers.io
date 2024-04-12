import AnimText from "./AnimText";
import { Button } from "~/components/ui/button";

const About = () => {
  return (
    <div className="w-1/2 space-y-2">
      <AnimText />
      <p className="text-slate-50">
        I&apos;m rewriting this page currently to make it more performant,
        cleaner, and more mobile friendly. As long as this is not finished the
        old page:
      </p>
      <div className="flex flex-row items-center space-x-2">
        <Button variant="outline" asChild>
          <a
            href="https://huibersold.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Oldpage
          </a>
        </Button>
      </div>
    </div>
  );
};

export default About;
