import React from "react";
import Benefits from "../layouts/Benefits";

//layouts
import Hero from "../layouts/Hero";
import Mission from "../layouts/Mission";
import About from "../layouts/About";
import Donation from "../layouts/Donation";
import Counter from "../layouts/Counter";
import Contact from "../layouts/Contact";
import FAQ from "../layouts/FAQ";

const Home = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Benefits />
      <About />
      <Donation />
      <Counter />
      <Contact />
      <FAQ />
    </div>
  );
};

export default Home;
