import { useState } from "react";
//icons
import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as Lightning } from "../icons/lightning.svg";
import { ReactComponent as Home } from "../icons/Home.svg";
import { ReactComponent as Envelope } from "../icons/Envelope.svg";
import { ReactComponent as Hat } from "../icons/Hat.svg";
import { ReactComponent as Book } from "../icons/Book.svg";
import { ReactComponent as Menu } from "../icons/menu.svg";
import { ReactComponent as Close } from "../icons/close.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="grid bg-white w-full m-auto h-[12vh] sticky top-0 shadow-md z-50   lg:grid-cols-3 grid-cols-1 items-center px-10 justify-center">
      <div className="flex flex-row justify-between px-5 items-center ">
        <a href="/" className="md:mr-40 md:mt-10 lg:mr-0 lg:mt-0">
          <Logo className="w-[150px] md:w-[200px] lg:border-r-4 md:pr-10 pr-15 lg:mr-0 mr-20 border-primary" />
        </a>
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
      </div>
      <nav
        className={open ? " bg-white mt-4 " : "hidden lg:flex lg:col-span-2 "}
      >
        <ul className="flex lg:gap-28 gap-4 font-primary  text-[#87D4AA] flex-col lg:flex-row">
          <li
            className=" text-center text-xl flex flex-col justify-center hover:text-[#304F45] duration-500 my-5 lg:my-0 "
            onClick={toggle}
          >
            <a href="#home">
              <Home className="m-auto duration-500 hover:fill-[#304F45] fill-[#87D4AA] h-[20px] lg:h-[30px]" />
              Home
            </a>
          </li>
          <li
            className="text-center text-xl flex flex-col justify-center hover:text-[#304F45] duration-500 my-5  lg:my-0 "
            onClick={toggle}
          >
            <a href="#quote">
              <Hat className="m-auto duration-500 hover:fill-[#304F45] fill-[#87D4AA] h-[20px] lg:h-[30px]" />
              <p className="pt-3 tracking-wider">Quote Of the Day</p>
            </a>
          </li>
          <li
            className="text-center text-xl flex flex-col justify-center hover:text-[#304F45] duration-500 my-5 lg:my-0 "
            onClick={toggle}
          >
            <a href="#warrior">
              <Lightning className="m-auto duration-500 hover:fill-[#304F45] fill-[#87D4AA] h-[20px] lg:h-[30px]" />
              <p className="pt-3 tracking-wider">Warrior Of the Week</p>
            </a>
          </li>
          <li
            className="text-center text-xl flex flex-col justify-center hover:text-[#304F45] duration-500 my-5  lg:my-0 "
            onClick={toggle}
          >
            <a href="#contact">
              <Envelope className="m-auto duration-500 hover:fill-[#304F45] fill-[#87D4AA] h-[20px] lg:h-[30px]" />
              <p className="pt-3 tracking-wider"> Contact Us</p>
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
    </div>
  );
};

export default Navbar;
