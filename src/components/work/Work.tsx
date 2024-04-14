import React from "react";
import TransformCard from "./TransformCard";
import WorkMobile from "./WorkMobile";
import Cards from "./Cards";

const Work = () => {
  return (
    <>
      <div className="hidden flex-row justify-center space-x-[-60px] sm:flex">
        {Cards.map((card, index) => (
          <TransformCard
            key={index}
            title={card.title}
            content={card.content}
            rotate={card.rotate}
            github={card.github}
            website={card.website}
          />
        ))}
      </div>
      <WorkMobile />
    </>
  );
};

export default Work;
