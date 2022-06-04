import React, { useState } from "react";
import Benefits from "../layouts/Benefits";

//layouts
import Hero from "../layouts/Hero";
import About from "../layouts/About";
import OurTeam from "../layouts/OurTeam";
import Counter from "../layouts/Counter";
import Contact from "../layouts/Contact";
import FAQ from "../layouts/FAQ";
import Join from "../components/Join";
import Advisors from "../layouts/Advisors";
import Partners from "../layouts/Partners";
import Footer from "../layouts/Footer";
import Donation from "../layouts/Donation";
import Navbar from "../components/Navbar";
import Warrior from "../layouts/Warrior";
import Quote from "../layouts/Quote";

const Home = () => {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(0);

  const onNumber = (e) => {
    setNumber(e);
  };
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Advisors />
      <OurTeam />
      <Warrior />
      <Quote />
      <Partners />
      <Counter setShow={setShow} number={number} />
      {show && <Join setShow={setShow} giveNumber={onNumber} />}
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
