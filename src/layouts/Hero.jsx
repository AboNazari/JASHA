import React from "react";
import { motion } from "framer-motion";
//icons
import { ReactComponent as HeroSvg } from "../icons/hero.svg";

const Hero = () => {
  return (
    <div className="pt-[calc(50px+8.33333vw)] overflow-hidden h-auto flex flex-col lg:flex-row justify-between">
      <div className="w-full lg:w-3/5 px-10 mt-36 font-primary">
        <div className="overflow-hidden mb-4 lg:mb-10">
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-text text-xl sm:text-3xl md:text-4xl lg:text-3xl"
          >
            Let's improve
          </motion.h3>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-8xl md:text-9xl lg:text-8xl"
          >
            The world to be more...
          </motion.h1>
        </div>
      </div>
      <motion.div
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="w-full lg:w-2/5"
      >
        <HeroSvg width="100%" />
      </motion.div>
    </div>
  );
};

export default Hero;
