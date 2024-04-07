"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const RedoAnimText = () => {
  const textIndex = useMotionValue(0);
  const texts = [
    "Hello I'm Noel Huibers.",
    "Servus ich bin Noel Huibers.",
    "Salve nomen meum est Noel Huibers.",
    "Hola mi nombre es Noel Huibers.",
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] ?? "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest),
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    void animate(count, 60, {
      type: "tween",
      delay: 2,
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
  }, [count, textIndex, texts.length, updatedThisRound]);

  return <motion.span className="inline">{displayText}</motion.span>;
};

export default RedoAnimText;
