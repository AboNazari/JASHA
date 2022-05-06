import React from "react";
import { ReactComponent as Lightning } from "../icons/lightning.svg";
import person from "../images/Char1.jpg";

const Warrior = () => {
  return (
    <div className="w-full text-black lg:mb-[10rem]">
      <div className="w-3/4 m-auto text-dark mb-20">
        <div className="flex flex-col w-[10rem]">
          <Lightning className="m-auto" />
          <div className=" bg-primary w-[11rem] h-[6px] mt-4"></div>
        </div>
        <h3 className="text-5xl tracking-wider pt-7">WARRIOR OF A WEEK</h3>
      </div>
      <div className="flex gap-8 w-3/4 m-auto flex-col lg:flex-row">
        <div className="lg:w-1/3 flex flex-col mx-h-[50vh]">
          <img
            src={person}
            alt=""
            className="max-h-[47vh] object-cover rounded-tl-3xl"
          />
          <p className="w-full py-3 bg-primary text-white text-2xl text-center rounded-b-3xl">
            The Best Person
          </p>
        </div>
        <div className="lg:w-2/3 rounded-br-3xl text-xl text-white lg:p-12 p-6 font-primary  bg-gradient-to-br from-primary to-dark">
          <div className="pb-10 text-2xl">
            <div className=" bg-white w-[7rem] h-[3px]"></div>
            <h3 className="text-3xl pb-10 pt-4">QUOTE</h3>
            <p>
              “You will never know what results come of your actions, but if you
              do nothing, there will be no results.”
            </p>
          </div>
          <div className="py-10 text-2xl">
            <div className=" bg-white w-[14rem] h-[3px]"></div>
            <h3 className="text-3xl pb-10 pt-4">ACHIEVMENTS</h3>
            <li className="ml-5">
              Wrote the blog “On how to fight back the bullies”, which recieved
              13,278 views and 2721 likes.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warrior;
