import React from "react";
import { ReactComponent as Leaf } from "../images/Leafs.svg";
import { ReactComponent as Vector } from "../images/vector.svg";

const DonationX = () => {
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="flex items-center w-[70%] m-auto ml-[240px] justify-end bg-gradient-to-l from-primary to-black rounded-2xl ">
        <div className="w-3/5  pr-20 ">
          <h3 className="text-white font-primary text-3xl  mb-5">DONATE NOW</h3>
          <p className="text-white text-lg font-primary">
            A big thank you to the kindest and most generous sponsors! Let’s
            make a positive impact together on this world to be a better place
            for everyone!
          </p>
        </div>
        <Leaf />
      </div>
      {/* Second Section */}
      <div className="-mt-32 mx-auto ">
        <Vector />
      </div>
      {/* section three */}
      <div className="flex items-center w-[70%] m-auto h-2/4  justify-end bg-gradient-to-r from-grayX to-black rounded-2xl p-16 -mt-32">
        <div className="w-2/4">
          <h3 className=" font-primary text-3xl  mb-5">
            CHOOSE PAYMENT METHOD
          </h3>
          <p className=" text-lg font-primary">
            Remember, “giving is not just about making a donation It’s about
            making the difference.”
          </p>
          <p> - Kathy Calvin</p>
        </div>
        <div className="w-2/4"></div>
      </div>
    </div>
  );
};

export default DonationX;
