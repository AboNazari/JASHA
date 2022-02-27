import React from "react";

const Counter = ({ setShow }) => {
  return (
    <div className="flex justify-center items-center w-full h-screen flex-col">
      <div className="flex items-end font-primary mb-24">
        <h1 className="text-9xl">19210</h1>
        <span className="text-3xl ml-5">people have joined us</span>
      </div>
      <button
        onClick={() => setShow(true)}
        className="px-36 py-5 text-white font-primary rounded-full bg-primary text-4xl"
      >
        Join us cause
      </button>
    </div>
  );
};

export default Counter;
