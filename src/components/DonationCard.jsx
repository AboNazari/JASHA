import React, { useState } from "react";

const DonationCard = ({ type, text }) => {
  const [active, setActive] = useState(false);
  const Clicked = () => {
    setActive(!active);
  };
  return type === "text" ? (
    <button
      onClick={Clicked}
      className={`px-6 py-4 uppercase center max-w-[200px] ${
        !active ? "bg-primary" : "bg-[#107b67]"
      } text-white text-base col-span-1`}
    >
      {text}
    </button>
  ) : (
    <button
      onClick={Clicked}
      className="px-6 py-4 uppercase relative center flex items-center col-span-1 xl:col-span-2 justify-center border text-base"
    >
      <span className="absolute top-8 left-2">
        <div className="w-5 h-5 border rounded-full flex justify-center items-center">
          <span
            className={`w-3 h-3 rounded-full ${active ? "bg-gray-300" : ""}`}
          ></span>
        </div>
      </span>
      ${text}
    </button>
  );
};

export default DonationCard;
