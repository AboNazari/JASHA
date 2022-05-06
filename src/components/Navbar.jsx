import React from "react";
//icons
import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as Lightning } from "../icons/lightning.svg";
import { ReactComponent as Home } from "../icons/Home.svg";
import { ReactComponent as Envelope } from "../icons/Envelope.svg";
import { ReactComponent as Hat } from "../icons/Hat.svg";
import { ReactComponent as Book } from "../icons/Book.svg";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="flex items-center w-full h-auto fixed top-0 left-0 px-[5vw] shadow-md bg-white pt-10 z-50 pb-5 jsu">
      <div className="border-r-4 pr-10 border-primary ">
        <Logo width="200px" />
      </div>
      <nav className="ml-[10%]">
        <ul className="flex gap-40 font-primary justify-start text-[#87D4AA]">
          <li className="text-center text-xl flex flex-col justify-center hover:text-[#304F45] duration-500">
            <a href="/">
              <Home className="m-auto duration-500 hover:fill-[#304F45] fill-[#87D4AA] " />
              Home
            </a>
          </li>
          <li className="text-center text-xl flex flex-col justify-center hover:text-[#304F45] duration-500">
            <a href="#">
              <Hat className="m-auto duration-500 hover:fill-[#304F45] fill-[#87D4AA] " />
              <p className="pt-3 tracking-wider">Quote Of the Day</p>
            </a>
          </li>
          <li className="text-center text-xl flex flex-col justify-center hover:text-[#304F45] duration-500">
            <Link to="/warrior">
              <Lightning className="m-auto duration-500 hover:fill-[#304F45] fill-[#87D4AA] " />
              <p className="pt-3 tracking-wider">Warrior Of the Week</p>
            </Link>
          </li>
          <li className="text-center text-xl flex flex-col justify-center hover:text-[#304F45] duration-500">
            <Link to="contact">
              <Envelope className="m-auto duration-500 hover:fill-[#304F45] fill-[#87D4AA] " />
              <p className="pt-3 tracking-wider"> Contact Us</p>
            </Link>
          </li>
          <li className="text-center text-xl hover:text-[#304F45] duration-500">
            <Link to="/about">
              <Book className="m-auto duration-500 hover:fill-[#304F45] fill-[#87D4AA] " />
              <p className="pt-3 tracking-wider">About</p>
            </Link>
          </li>
        </ul>
      </nav>
      <button className="">{/* <FiMenu size="70" /> */}</button>
    </div>
  );
};

export default Navbar;
