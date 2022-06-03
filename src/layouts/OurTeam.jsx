import React, { useEffect, useState } from "react";
import TeamCard from "../components/TeamCard";

import { motion } from "framer-motion";

import abo from "../images/team/abo1.jpg";
import parker from "../images/team/parker1.jpg";
import iska from "../images/team/iska1.jpg";
import zakir from "../images/team/zakir1.jpg";
import aizhamal from "../images/team/aizhamal1.jpg";
import ayana from "../images/team/ayan1.jpg";
import muniza from "../images/team/muniza1.jpg";
import img from "../images/person.jpg";
const Members = [
  {
    id: 1,
    image: abo,
    name: "Abdullah ",
    role: "Project Manager",
  },

  {
    id: 3,
    image: parker,
    name: "Parker ",
    role: "Creative Team Lead",
  },
  {
    id: 4,
    image: iska,
    name: "Iskander ",
    role: "Creative Designer",
  },

  {
    id: 5,
    image: aizhamal,
    name: "Aizhamal ",
    role: "Product Manager",
  },
  {
    id: 6,
    image: zakir,
    name: "Zakir Hussain ",
    role: "Finance Officer",
  },
  {
    id: 7,
    image: ayana,
    name: " Aynana ",
    role: "Social Media Manager",
  },
  {
    id: 8,
    image: muniza,
    name: "Muniza ",
    role: "Content Creator ",
  },
];

const OurTeam = () => {
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

  const attributes =
    screenSize.dynamicWidth > 1023
      ? {
          dragConstraints: { right: 0, left: -2050 },
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
    <div id="about" className="py-36 my-10 px-10 h-full overflow-x-hidden">
      <motion.div
        {...attributes}
        className="grid grid-cols-1 lg:grid-cols-2 w-full"
      >
        <div className="lg:col-span-1 lg:px-10 xl:px-20 mb-10">
          <h1 className="font-primary text-7xl lg:ml-10 xl:ml-20 ">
            Our Young Team
          </h1>
          <p className="text-text text-xl lg:ml-20 xl:ml-36 mt-6">
            We have a diverse team of young enthusiastic students who dreams to
            make the world a better place for everyone.
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

export default OurTeam;
