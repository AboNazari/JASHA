import React from "react";
import { Route, Routes } from "react-router-dom";

//components
import Navbar from "./components/Navbar";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./layouts/Contact";
import Warrior from "./layouts/Warrior";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="warrior" element={<Warrior />} />
      </Routes>
    </>
  );
}

export default App;
