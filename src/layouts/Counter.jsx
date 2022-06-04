import React from "react";
import { ReactComponent as People } from "../images/peopleW.svg";
const Counter = ({ setShow, number }) => {
  return (
    <div
      id="Counter"
      className="flex justify-center items-center w-full h-screen flex-col bg-[#F0F6F1] mt-10"
    >
      <div className="flex gap-8 ">
        <div className="flex font-primary mb-24 flex-col ">
          <span className="text-3xl text-primary shadow-xl bg-white pl-10 h-[3rem] w-[30rem] rounded-tl-3xl">
            people who already joined us...
          </span>
          <h3 className="text-[15rem] border-[1rem] border-primary rounded-b-3xl rounded-tr-3xl text-center px-10 bg-white text-primary">
            {number}
          </h3>
        </div>
        <div className="flex flex-col justify-center bg-primary rounded-3xl h-[70%] m-auto px-20 mb-24 shadow-2xl shadow-solid">
          <p className="text-4xl text-center pt-8 text-white tracking-wider font-primary font-semibold leading-loose">
            Become part of the <br /> movement!
          </p>
          <button
            onClick={() => setShow(true)}
            className="px-16 py-5 m-auto font-primary rounded-full bg-white text-black text-4xl"
          >
            JOIN US
          </button>
        </div>
      </div>
      {/* bottom section */}
      <div className="bg-white px-20 py-10 rounded-2xl shadow-2xl flex w-[68%] justify-between">
        <People className="w-1/3" />
        <div className="w-2/3">
          <h3 className="text-4xl text-primary pb-6 font-primary ">
            What's our movement?
          </h3>
          <p className="text-xl">
            Jasha is intended to be a community-based social media platform
            which encourages social change through a userbase that publishes
            posts about conscious living. The reason that we opted for this term
            was that the word "Jasha” is taken from Kyrgyz origin which means
            easygoing, highly sociable and having deep affection for life. As
            environmental activists are concerned about the negative impacts of
            human action have caused grievous influence on the planet and its
            inhabitants therefore Jasha’s friendly nature helps make lots of
            eco-friendly friends in life and argues for implementations of
            sustainable territories. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
