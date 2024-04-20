"use client";
import { useState, useEffect } from "react";
import TransformCard from "./TransformCard";
import { type AnimationControls, motion, useAnimation } from "framer-motion";

type Card = {
  id: number;
  control: AnimationControls;
  zIndex: number;
  title?: string;
  content?: string;
  github?: string;
  website?: string;
};

const Deck = () => {
  const [cards] = useState<Card[]>([
    {
      id: 0,
      control: useAnimation(),
      zIndex: 40,
      title: "Nueslify",
      content: "An AI Radio using Spotify",
      github: "https://github.com/NoelHuibers/nueslify",
      website: "https://nueslify.com/",
    },
    {
      id: 1,
      control: useAnimation(),
      zIndex: 30,
      title: "Hashiwokakero",
      content: "Japanese Puzzle Game",
      github: "https://github.com/NoelHuibers/Hashiwokakero",
      website: "https://hashi.rs/",
    },
    {
      id: 2,
      control: useAnimation(),
      zIndex: 20,
      title: "Landesgartenschau",
      content: "An App for Höxter 2023",
      github: "https://github.com/NoelHuibers/LGS2023",
    },
    {
      id: 3,
      control: useAnimation(),
      zIndex: 10,
      title: "Stockticker",
      content: "Track the DAX and Dow Jones",
      github: "https://github.com/NoelHuibers/stocki",
    },
  ]);

  const animationUp = async (card: Card) => {
    await card.control.start({ zIndex: 50 });
    await card.control.start({ y: -220, transition: { duration: 3 } });
    await card.control.start({
      y: -30,
      x: 15,
      transition: { duration: 2 },
      zIndex: 10,
    });
  };

  const animationTwo = async (card: Card) => {
    await card.control.start({
      y: -20,
      x: 5,
      transition: { duration: 2, delay: 3 },
      zIndex: 20,
    });
  };

  const animationThree = async (card: Card) => {
    await card.control.start({
      y: -10,
      x: -5,
      transition: { duration: 2, delay: 3 },
      zIndex: 30,
    });
  };

  const animationFour = async (card: Card) => {
    await card.control.start({
      y: 0,
      x: -15,
      transition: { duration: 2, delay: 3 },
      zIndex: 40,
    });
  };

  useEffect(() => {
    const startAnimations = () => {
      cards.forEach((card) => {
        switch (card.id) {
          case 0:
            void animationUp(card);
            card.id = 1;
            break;
          case 1:
            void animationTwo(card);
            card.id = 2;
            break;
          case 2:
            void animationThree(card);
            card.id = 3;
            break;
          case 3:
            void animationFour(card);
            card.id = 0;
            break;
          default:
            break;
        }
      });
    };

    startAnimations();

    const interval = setInterval(() => {
      startAnimations();
    }, 8000);

    return () => clearInterval(interval);
  }, [cards]);

  return (
    <>
      {cards.map((card) => (
        <motion.div
          className="absolute self-center"
          key={card.id}
          style={{ zIndex: card.zIndex }}
          animate={card.control}
        >
          <TransformCard
            title={card.title ?? ""}
            content={card.content ?? ""}
            rotate={0}
            github={card.github ?? ""}
            website={card.website ?? ""}
          />
        </motion.div>
      ))}
    </>
  );
};

export default Deck;
