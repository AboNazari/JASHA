import React from "react";
import PlaneAnim from "../animations/plane";

const Join = ({ setShow }) => {
  return (
    <div className="fixed flex justify-center items-center flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/5 bg-white shadow-xl h-[22vw] rounded-[2rem] px-10 z-50">
      <h1 className="text-5xl">Join our cause</h1>
      <div
        onClick={() => setShow(false)}
        className="absolute text-3xl text-black top-10 right-10 pointer hover:cursor-pointer"
      >
        X
      </div>
      <div className="grid grid-cols-5 gap-4 w-full">
        <div className="col-span-3 grid grid-cols-2 gap-5 items-center content-center">
          <input
            className="col-span-1 px-7 py-6 rounded-lg border-4"
            type="text"
            placeholder="Name"
          />
          <input
            className="col-span-1 px-7 py-6 rounded-lg border-4"
            type="text"
            placeholder="Country"
          />
          <input
            className="col-span-2 px-7 py-6 rounded-lg border-4"
            type="text"
            placeholder="E-mail"
          />
          <div></div>
        </div>
        <div className="col-span-2 overflow-hidden">
          <PlaneAnim />
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button className="px-14 py-4 bg-primary text-white text-2xl rounded-lg">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Join;