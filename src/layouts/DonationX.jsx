import React from "react";
import DonationAmount from "../components/DonationAmount";
import { ReactComponent as Leaf } from "../images/Leafs.svg";
import { ReactComponent as Vector } from "../images/vector.svg";

const DonationX = () => {
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="flex items-center w-[70%] m-auto justify-end bg-gradient-to-l from-primary to-black rounded-2xl ">
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
      <div className="flex items-center w-[70%] m-auto h-2/4  justify-end bg-gradient-to-r from-bright to-gray rounded-2xl p-16 -mt-32 border-2">
        <div className="w-2/4">
          <h3 className=" font-primary text-3xl  mb-5">
            CHOOSE PAYMENT METHOD
          </h3>
          <p className=" text-lg font-primary">
            Remember, “giving is not just about making a donation It’s about
            making the difference.”
          </p>
          <p className="text-right text-lg"> - Kathy Calvin</p>
        </div>
        <div className="w-2/4 grid grid-cols-2 gap-y-5 justify-items-center">
          <DonationAmount amount={5} id="five" className="max-w-[13rem]" />
          <DonationAmount amount={10} id="ten" />
          <DonationAmount amount={15} id="fifteen" />
          <DonationAmount amount={20} id="twenty" />
          <DonationAmount amount={25} id="twenty five" />
          <input
            type="text "
            className="border-2 border-black rounded-lg px-4 text-xl max-w-[13rem] bg-white"
            placeholder="Enter an amount..."
          />
        </div>
      </div>
    </div>
  );
};

export default DonationX;
