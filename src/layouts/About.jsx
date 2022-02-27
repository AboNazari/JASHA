import React, { useEffect, useState } from "react";
import TeamCard from "../components/TeamCard";

import { motion } from "framer-motion";

import Img from "../images/person.jpg";

const Members = [
  {
    id: 1,
    image: Img,
    name: " Expert",
    role: "IT Advisor",
  },
  {
    id: 2,
    image: Img,
    name: "Expert",
    role: "Well Being Advisor",
  },
  {
    id: 3,
    image: Img,
    name: " Expert",
    role: "Eco Advisor",
  },
  {
    id: 4,
    image: Img,
    name: " Expert",
    role: "Development Advisor",
  },
];

const About = () => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  console.log(screenSize.dynamicWidth);

  const attributes =
    screenSize.dynamicWidth > 1023
      ? {
          dragConstraints: { right: 0, left: -700 },
          whileTap: { cursor: "grabbing" },
          dragElastic: 0.2,
          drag: "x",
        }
      : {};

  let movile_attributes = {
    dragConstraints: { right: 0, left: -700 },
    whileTap: { cursor: "grabbing" },
    dragElastic: 0.2,
    drag: "x",
  };
  if (screenSize.dynamicWidth > 767) {
    if (screenSize.dynamicWidth > 1023) {
      movile_attributes = null;
    } else {
      movile_attributes = {
        dragConstraints: { right: 0, left: -330 },
        whileTap: { cursor: "grabbing" },
        dragElastic: 0.2,
        drag: "x",
      };
    }
  } else {
    movile_attributes = {
      dragConstraints: { right: 0, left: -700 },
      whileTap: { cursor: "grabbing" },
      dragElastic: 0.2,
      drag: "x",
    };
  }

  return (
    <div className="py-36 my-10 px-10 h-full overflow-x-hidden">
      <motion.div
        {...attributes}
        className="grid grid-cols-1 lg:grid-cols-2 w-full"
      >
        <div className="lg:col-span-1 lg:px-10 xl:px-20 mb-10">
          <h1 className="font-primary text-7xl lg:ml-10 xl:ml-20 ">
            Our Advisors
          </h1>
          <p className="text-text text-xl lg:ml-20 xl:ml-36 mt-6">
            We have a diverse team of domain experts in the respective fields as
            advisors!
          </p>
        </div>
        <motion.div {...movile_attributes} className="lg:col-span-1 flex w-fit">
          {Members.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
