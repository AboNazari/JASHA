import { useState } from "react";

import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as Lightning } from "../icons/lightning.svg";
import { ReactComponent as Home } from "../icons/Home.svg";
import { ReactComponent as Envelope } from "../icons/Envelope.svg";
import { ReactComponent as Hat } from "../icons/Hat.svg";
import { ReactComponent as Book } from "../icons/Book.svg";
import { ReactComponent as Menu } from "../icons/menu.svg";
import { ReactComponent as Close } from "../icons/close.svg";

const NavbarX = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <nav
      className={`flex justify-evenly items-center w-full lg:h-[12vh] ${
        !open ? "h-[12vh] " : ""
      }  px-10 lg:py-0 py-3 bg-white shadow-lg sticky top-0 z-50 lg:flex-row flex-col `}
    >
      <section className="flex gap-10 ">
        <Logo className="w-[150px] md:w-[200px] " />
        <span className="w-[2px] px-1 lg:py-8 h-full bg-primary invisible lg:visible"></span>
        {open ? (
          <button
            className=" text-white text-2xl lg:hidden md:mt-5 lg:mt-0"
            onClick={toggle}
          >
            <Close />
          </button>
        ) : (
          <button
            className="p-6 text-white text-2xl lg:hidden md:mt-5 lg:mt-0"
            onClick={toggle}
          >
            <Menu />
          </button>
        )}
      </section>
      <ul
        className={`flex w-full text-center justify-evenly flex-col lg:flex-row ${
          !open ? "hidden lg:flex" : ""
        }`}
      >
        <li
          className=" text-center text-xl flex flex-col justify-center hover:text-[#304F45] duration-500 my-5 lg:my-0 "
          onClick={toggle}
        >
          <a href="#home">
            <Home className="m-auto duration-500 hover:fill-[#304F45] fill-[#87D4AA] h-[20px] lg:h-[30px]" />
            <p className="pt-3 tracking-wider">Home </p>
          </a>
        </li>
        <li
          className="text-center text-xl flex flex-col justify-center hover:text-[#304F45] duration-500 my-5  lg:my-0 "
          onClick={toggle}
        >
          <a href="#quote">
            <Hat className="m-auto duration-500 hover:fill-[#304F45] fill-[#87D4AA] h-[20px] lg:h-[30px]" />
            <p className="pt-3 tracking-wider">Quote </p>
          </a>
        </li>
        <li
          className="text-center text-xl flex flex-col justify-center hover:text-[#304F45] duration-500 my-5 lg:my-0 "
          onClick={toggle}
        >
          <a href="#warrior">
            <Lightning className="m-auto duration-500 hover:fill-[#304F45] fill-[#87D4AA] h-[20px] lg:h-[30px]" />
            <p className="pt-3 tracking-wider">Warrior </p>
          </a>
        </li>
        <li
          className="text-center text-xl flex flex-col justify-center hover:text-[#304F45] duration-500 my-5  lg:my-0 "
          onClick={toggle}
        >
          <a href="#contact">
            <Envelope className="m-auto duration-500 hover:fill-[#304F45] fill-[#87D4AA] h-[20px] lg:h-[30px]" />
            <p className="pt-3 tracking-wider"> Contact</p>
          </a>
        </li>
        <li
          className="text-center text-xl hover:text-[#304F45] duration-500 my-5  lg:my-0 "
          onClick={toggle}
        >
          <a href="#about">
            <Book className="m-auto duration-500 hover:fill-[#304F45] fill-[#87D4AA] h-[20px] lg:h-[30px]" />
            <p className="pt-3 tracking-wider">About</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarX;
