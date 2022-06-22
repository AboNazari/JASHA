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
    text: "Towards sustainable and a better world for everyone, where youth have chance to exchange toughts and ideas.",
  },
  {
    id: 2,
    icon: <TV className="w-10" />,
    title: "Educate yourself and your community",
    text: "You can contribute to the educating your community by posting your thoughts and ideas in the concerned topics.",
  },
  {
    id: 3,
    icon: <Like className="w-10" />,
    title: "Dont feel bad being online",
    text: "Your time is the most valuebale resource of yours and humanity in general. you can learn and grow using this asset of yours.",
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
    <div
      id="Benifits"
      className="flex flex-col justify-center items-center mt-10 px-[10vw]"
    >
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
