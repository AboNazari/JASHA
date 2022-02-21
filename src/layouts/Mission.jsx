import React, { useEffect } from "react";
import Button from "../components/Button";
import Img from "../images/Char1.jpg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Mission = () => {
  const leftSlide = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: -100 },
  };
  const rightSlide = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: 100 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="w-full h-full lg:h-screen overflow-hidden flex flex-col md:flex-row md:items-center p-10 md:pr-0">
      <motion.div
        variants={leftSlide}
        animate={controls}
        initial="hidden"
        className="md:w-1/2 lg:w-3/5 md:mr-10 lg:px-10 xl:px-36"
      >
        <h1
          ref={ref}
          className="text-2xl sm:text-4xl font-primary text-center mb-5"
        >
          Jasha - Live
        </h1>
        <p className="text-text text-base tracking-wide leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum
          culpa ut quisquam vel molestiae, deleniti voluptatum eveniet amet quo
          facere ea quia aperiam dolores.
        </p>
        <Button text="Readmore..." />
      </motion.div>
      <motion.div
        variants={rightSlide}
        animate={controls}
        initial="hidden"
        className="mt-10 block md:w-1/2 lg:w-2/5 md:p-20"
      >
        <div className="flex flex-col items-center px-10 sm:px-36 md:px-0 lg:px-5 xl:px-16">
          <h1 className="text-xl font-primary mb-3">Warrior of the week</h1>
          <img src={Img} alt="" />
          <h3 className="mt-5 text-base font-primary">Something cool</h3>
          <span className="text-text ">Liam Nissan</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Mission;
