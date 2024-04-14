import { motion } from "framer-motion";

const Hamburger = (props: { isOpen: boolean; toggle: () => void }) => {
  const topLine = {
    opened: {
      rotate: 45,
      translateY: 11,
    },
    closed: {
      rotate: 0,
      translateY: 0,
    },
  };

  const bottomLine = {
    opened: {
      rotate: -45,
      translateY: -11,
    },
    closed: {
      rotate: 0,
      translateY: 0,
    },
  };

  const middleLine = {
    opened: {
      opacity: 0,
    },
    closed: {
      opacity: 1,
    },
  };

  const lineColorClass = props.isOpen
    ? "bg-redN h-0.5 w-full rounded-lg"
    : "bg-slate-100 h-0.5 w-full rounded-lg";

  return (
    <button
      onClick={props.toggle}
      className="flex h-6 w-8 flex-col items-center justify-between sm:hidden"
    >
      <motion.div
        className={lineColorClass}
        variants={topLine}
        initial={false}
        animate={props.isOpen ? "opened" : "closed"}
      />
      <motion.div
        className={lineColorClass}
        variants={middleLine}
        initial={false}
        animate={props.isOpen ? "opened" : "closed"}
      />
      <motion.div
        className={lineColorClass}
        variants={bottomLine}
        initial={false}
        animate={props.isOpen ? "opened" : "closed"}
      />
    </button>
  );
};

export default Hamburger;
