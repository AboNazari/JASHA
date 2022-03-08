import Lottie from "lottie-react";
import heroAnimation from "../data/hero.json";

const HeroAnimation = () => {
  return <Lottie animationData={heroAnimation} loop={true} autoPlay={true} />;
};

export default HeroAnimation;
