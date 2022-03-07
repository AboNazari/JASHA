import Lottie from "lottie-react";
import planeAnimation from "../data/plane.json";

const PlaneAnim = () => {
  return <Lottie animationData={planeAnimation} loop={true} autoPlay={true} />;
};

export default PlaneAnim;
