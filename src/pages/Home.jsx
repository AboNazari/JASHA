import React, { useState } from "react";
import Benefits from "../layouts/Benefits";

//layouts
import Hero from "../layouts/Hero";
import Mission from "../layouts/Mission";
import About from "../layouts/About";
import Donation from "../layouts/Donation";
import Counter from "../layouts/Counter";
import Join from "../components/Join";

const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Hero />
      <Mission />
      <Benefits />
      <About />
      <Donation />
      <Counter setShow={setShow} />
      {show && <Join setShow={setShow} />}
    </div>
  );
};

export default Home;
