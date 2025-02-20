"use client";
import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
  return (
    <Typewriter
      words={["Blockchain", "Software", "AI", "Game"]}
      loop={false}
      cursor
      cursorStyle=""
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={2500}
    />
  );
};

export default TypewriterEffect;
