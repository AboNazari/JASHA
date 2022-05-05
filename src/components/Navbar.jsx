import React from "react";
//icons
import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as Ligthening } from "../icons/Lightening.svg";
import { ReactComponent as Home } from "../icons/Home.svg";
import { ReactComponent as Envelope } from "../icons/Envelope.svg";
import { ReactComponent as Hat } from "../icons/hat.svg";
import { ReactComponent as Book } from "../icons/Book.svg";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";

const Navbar = () => {
  return (
    <div className="flex  items-center w-full h-auto fixed top-0 left-0 px-[5vw] shadow-md bg-white pt-10 z-50 pb-5">
      <div className="border-r-4 pr-10 border-primary ">
        <Logo width="200px" />
      </div>
      <nav className="ml-[10%]">
        <ul className="flex gap-40 justify-start">
          <li className="text-center text-xl flex flex-col justify-center">
            <a href="/">
              <Home className="m-auto" />
              <p className="pt-3 tracking-wider">Home</p>
            </a>
          </li>
          <li className="text-center text-xl flex flex-col justify-center">
            <a href="#">
              <Hat className="m-auto" />
              <p className="pt-3 tracking-wider">Quote Of the Day</p>
            </a>
          </li>
          <li className="text-center text-xl flex flex-col justify-center">
            <a href="#">
              <Ligthening className="m-auto" />
              <p className="pt-3 tracking-wider">Warrior Of the Week</p>
            </a>
          </li>
          <li className="text-center text-xl flex flex-col justify-center">
            <a href="#Contact">
              <Envelope className="m-auto" />
              <p className="pt-3 tracking-wider"> Contact Us</p>
            </a>
          </li>
          <li className="text-center text-xl ">
            <Link to="/about">
              <Book className="m-auto" />
              <p className="pt-3 tracking-wider">About</p>
            </Link>
          </li>
          <Toggle />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
