import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BenefitCard = ({ card }) => {
  const slide = {
    visible: {
      opacity: 1,
      translateX: 0,
      translateY: 0,
      transition: { duration: 0.2, delay: card.id * 0.2 },
    },
    hidden: {
      opacity: 0,
      translateX: card.id % 2 === 0 ? -50 : 50,
      translateY: -50,
    },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      variants={slide}
      initial="hidden"
      animate={controls}
      className="p-10 py-16 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <span>{card.icon}</span>
      <h3 className="text-xl my-5">{card.title}</h3>
      <p className="text-text leading-5 tracking-wide">{card.text}</p>
    </motion.div>
  );
};

export default BenefitCard;
