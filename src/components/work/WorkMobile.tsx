"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useMemo } from "react";
import TransformCard from "./TransformCard";

type CardData = {
  id: number;
  zIndex: number;
  title: string;
  content: string;
  github: string;
  website?: string;
};

const cardData: CardData[] = [
  {
    id: 0,
    zIndex: 40,
    title: "Nueslify",
    content: "An AI Radio using Spotify",
    github: "https://github.com/NoelHuibers/nueslify",
    website: "https://nueslify.com/",
  },
  {
    id: 1,
    zIndex: 30,
    title: "Hashiwokakero",
    content: "Japanese Puzzle Game",
    github: "https://github.com/NoelHuibers/Hashiwokakero",
    website: "https://hashi.rs/",
  },
  {
    id: 2,
    zIndex: 20,
    title: "Landesgartenschau",
    content: "An App for Höxter 2023",
    github: "https://github.com/NoelHuibers/Landesgartenschau2023",
  },
  {
    id: 3,
    zIndex: 10,
    title: "Stockticker",
    content: "Track the DAX and Dow Jones",
    github: "https://github.com/NoelHuibers/stocki",
  },
];

const Deck = () => {
  const control0 = useAnimation();
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();

  const controls = useMemo(
    () => [control0, control1, control2, control3],
    [control0, control1, control2, control3],
  );

  useEffect(() => {
    let currentOrder = [0, 1, 2, 3];

    const animationUp = async (control: ReturnType<typeof useAnimation>) => {
      await control.start({ zIndex: 50 });
      await control.start({ y: -220, transition: { duration: 1.2 } });
      await control.start({
        y: -30,
        x: 15,
        transition: { duration: 0.9 },
        zIndex: 10,
      });
    };

    const animationTwo = async (control: ReturnType<typeof useAnimation>) => {
      await control.start({
        y: -20,
        x: 5,
        transition: { duration: 0.9, delay: 1.2 },
        zIndex: 20,
      });
    };

    const animationThree = async (control: ReturnType<typeof useAnimation>) => {
      await control.start({
        y: -10,
        x: -5,
        transition: { duration: 0.9, delay: 1.2 },
        zIndex: 30,
      });
    };

    const animationFour = async (control: ReturnType<typeof useAnimation>) => {
      await control.start({
        y: 0,
        x: -15,
        transition: { duration: 0.9, delay: 1.2 },
        zIndex: 40,
      });
    };

    const startAnimations = () => {
      currentOrder.forEach((cardIndex, position) => {
        const control = controls[cardIndex];
        if (!control) return;

        switch (position) {
          case 0:
            void animationUp(control);
            break;
          case 1:
            void animationTwo(control);
            break;
          case 2:
            void animationThree(control);
            break;
          case 3:
            void animationFour(control);
            break;
        }
      });
      currentOrder = [
        currentOrder[3]!,
        currentOrder[0]!,
        currentOrder[1]!,
        currentOrder[2]!,
      ];
    };

    startAnimations();
    const interval = setInterval(startAnimations, 5000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <>
      {cardData.map((card, index) => (
        <motion.div
          className="absolute self-center"
          key={card.id}
          style={{ zIndex: card.zIndex }}
          animate={controls[index]}
        >
          <TransformCard
            title={card.title}
            content={card.content}
            rotate={0}
            github={card.github}
            website={card.website ?? null}
          />
        </motion.div>
      ))}
    </>
  );
};

export default Deck;
