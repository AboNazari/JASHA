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

const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Advisors />
      <OurTeam />
      <Partners />
      <Donation />
      <Counter setShow={setShow} />
      {show && <Join setShow={setShow} />}
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
