import React from "react";
import hello from "../data/hello.json";
import Lottie from "lottie-react";

const Hello = () => {
  return <Lottie animationData={hello} loop={true} autoPlay={true} />;
};

export default Hello;
