/* eslint-disable */
"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const MainAnimation = () => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animationContainer.current) return;
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "animation.json",
    });
    anim.setSpeed(1.5);
    return () => anim.destroy();
  }, []);

  return <div ref={animationContainer} className="h-10/12 w-10/12"></div>;
};

export default MainAnimation;
