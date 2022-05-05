import React from "react";
//icons
import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as Ligthening } from "../icons/Lightening.svg";
import { ReactComponent as Home } from "../icons/Home.svg";
import { ReactComponent as Envelope } from "../icons/Envelope.svg";
import { ReactComponent as Hat } from "../icons/hat.svg";
import { ReactComponent as Book } from "../icons/Book.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-auto fixed top-[5vw] left-0 px-[10vw]">
      <div>
        <Logo width="130px" />
      </div>
      <nav>
        <ul className="flex">
          <li>
            <a href="#">
              <Home />
              Home
            </a>
          </li>
          <li>
            <a href="#">
              <Hat />
              Quote Of the Day
            </a>
          </li>
          <li>
            <a href="#">
              <Ligthening />
              Warrior Of the Week
            </a>
          </li>
          <li>
            <a href="#">
              <Envelope />
              Contact Us
            </a>
          </li>
          <li>
            <a href="#">
              <Book />
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;