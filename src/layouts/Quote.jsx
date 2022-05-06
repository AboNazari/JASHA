import React from "react";
import { ReactComponent as Hat } from "../icons/hat.svg";

const Quote = () => {
  return (
    <div className="w-full text-black lg:mb-[10rem]">
      <div className="w-3/4 m-auto text-dark mb-20">
        <div className="flex flex-col w-[10rem]">
          <Hat className="m-auto" />
          <div className=" bg-primary w-[11rem] h-[6px] mt-4"></div>
        </div>
        <h3 className="text-5xl tracking-wider pt-7">Quote OF THE DAY</h3>
      </div>
      <div className="flex gap-8 w-2/4 m-auto flex-col  bg-gradient-to-r from-white bg-[#CED6CF] shadow-md  p-10 rounded-3xl ">
        <h3 className="font-primary text-2xl text-dark">Mahatma Gandhi</h3>
        <p className="text-3xl leading-loose font-quote tracking-wider">
          “You will never know what results <br /> come of your actions, but if
          you do nothing, <br /> there will be no results.”
        </p>
        <p className=" text-right font-bold text-lg text-black">
          6th May, 2022
        </p>
      </div>
    </div>
  );
};

export default Quote;