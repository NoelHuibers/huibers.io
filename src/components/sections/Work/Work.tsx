import React from "react";
import TransformCard from "./TransformCard";

const Work = () => {
  return (
    <div className="flex flex-row justify-center space-x-[-60px]">
      <TransformCard
        title={"Nueslify"}
        content={"An AI Radio using Spotify"}
        rotate={-10}
        github="https://github.com/NoelHuibers/nueslify"
        website="https://nueslify.com/"
      />
      <TransformCard
        title={"Hashiwokakero"}
        content={"Japanese Puzzle Game"}
        rotate={10}
        github="https://github.com/NoelHuibers/Hashiwokakero"
        website="https://hashi.rs/"
      />
      <TransformCard
        title={"Landesgartenschau"}
        content={"An App for Höxter 2023"}
        rotate={5}
        github="https://github.com/NoelHuibers/LGS2023"
        website={null}
      />
      <TransformCard
        title={"Stockticker"}
        content={"Track the DAX and Dow Jones"}
        rotate={-15}
        github="https://github.com/NoelHuibers/stocki"
        website={null}
      />
    </div>
  );
};

export default Work;
