"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TransformCard from "./TransformCard";
import Cards from "./Cards";

const WorkMobile = () => {
  const initialPositions = [
    { top: 0, right: 0, zIndex: 40 },
    { top: -10, right: -10, zIndex: 30 },
    { top: -20, right: -20, zIndex: 20 },
    { top: -30, right: -30, zIndex: 10 },
  ];

  const [positions, setPositions] = useState(initialPositions);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) => [
        { ...prev[1]! },
        { ...prev[2]! },
        { ...prev[3]! },
        { ...prev[0]! },
      ]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col space-y-[-180px] sm:hidden">
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          className="relative"
          animate={{
            top: `${pos.top}px`,
            right: `${pos.right}px`,
            zIndex: pos.zIndex,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <TransformCard
            title={Cards[index]!.title}
            content={Cards[index]!.content}
            rotate={0}
            github={Cards[index]!.github}
            website={Cards[index]!.website}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default WorkMobile;
