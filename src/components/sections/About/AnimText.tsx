import RedoAnimText from "./RedoAnimText";
import Cursor from "./Cursor";

const AnimText = () => {
  return (
    <div className="justif-center align-center flex text-lg text-slate-50 sm:text-4xl">
      <RedoAnimText />
      <Cursor />
    </div>
  );
};

export default AnimText;
