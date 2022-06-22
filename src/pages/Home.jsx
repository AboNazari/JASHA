import React, { useState } from "react";
import Benefits from "../layouts/Benefits";
import { useSelector } from "react-redux";
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
import NavbarX from "../components/NavbarX";
import Warrior from "../layouts/Warrior";
import Quote from "../layouts/Quote";

const Home = () => {
  const show = useSelector((state) => state.show);
  return (
    <div>
      <NavbarX />
      <Hero />
      <About />
      <Benefits />
      <Advisors />
      <OurTeam />
      <Warrior />
      <Quote />
      <Partners />
      <Counter />
      {show && <Join />}
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
