import React from "react";
import Benefits from "../layouts/Benefits";

//layouts
import Hero from "../layouts/Hero";
import Mission from "../layouts/Mission";
import About from "../layouts/About";
import Donation from "../layouts/Donation";
import Counter from "../layouts/Counter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Benefits />
      <About />
      <Donation />
      <Counter />
    </div>
  );
};

export default Home;
