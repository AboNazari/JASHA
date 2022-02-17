import React from "react";
import Benefits from "../layouts/Benefits";

//layouts
import Hero from "../layouts/Hero";
import Mission from "../layouts/Mission";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Benefits />
      <Contact />
    </div>
  );
};

export default Home;
