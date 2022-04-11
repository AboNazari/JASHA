import React, { useState } from "react";
import Benefits from "../layouts/Benefits";

//layouts
import Hero from "../layouts/Hero";
import Mission from "../layouts/Mission";
import About from "../layouts/About";
import Donation from "../layouts/Donation";
import Counter from "../layouts/Counter";
import Contact from "../layouts/Contact";
import FAQ from "../layouts/FAQ";
import Join from "../components/Join";
import Advisors from "../layouts/Advisors";
import Partners from "../layouts/Partners";
const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Hero />
      <Mission />
      <Benefits />
      <Advisors />
      <About />
      <Partners />
      <Donation />
      <Counter setShow={setShow} />
      {show && <Join setShow={setShow} />}
      <Contact />
      <FAQ />
    </div>
  );
};

export default Home;
