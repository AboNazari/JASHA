import React from "react";
import BenefitCard from "../components/BenefitCard";
import { ReactComponent as Team } from "../icons/team.svg";
import { ReactComponent as TV } from "../icons/tv.svg";
import { ReactComponent as Like } from "../icons/like.svg";
import { ReactComponent as Plus } from "../icons/plus.svg";

const cardList = [
  {
    id: 1,
    icon: <Team className="w-10" />,
    title: "A Movement not just an App",
    text: "Towards sustainable and a better world for everyone, where the knowledge will be free and open source.",
  },
  {
    id: 2,
    icon: <TV className="w-10" />,
    title: "Nothing fake, Real Life Social Media",
    text: "Stories you share will come from real life, no filter, no pulish, no edite. Reality is beautiful.",
  },
  {
    id: 3,
    icon: <Like className="w-10" />,
    title: "Dont feel bad being online",
    text: "Your time is the most valuebale resource of humanity. It should be used to create something better for future generations.",
  },
  {
    id: 4,
    icon: <Plus className="w-10" />,
    title: "You are bringing Change by joining us",
    text: "We are you and toghether we can empower thousands of real life heros who fights for environemnt, health and life.",
  },
];

const Benefits = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 px-[10vw]">
      <h1 className="font-primary text-3xl mb-10">Our Benefits</h1>
      <div className="w-full lg:w-4/5 xl:w-3/5 grid sm:grid-cols-2 gap-5">
        {cardList.map((card) => (
          <BenefitCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
