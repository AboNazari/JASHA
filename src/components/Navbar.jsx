import React from "react";

//icons
import { ReactComponent as Logo } from "../icons/logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-auto fixed top-[5vw] left-0 px-[10vw]">
      <div>
        <Logo width="130px" />
      </div>
      <div className="flex items-center ">
        <div className="mr-8 font-primary">
          <button className="mr-4">EN</button>
          <button>RU</button>
        </div>
        <div>
          <button className="relative w-9 h-5">
            <span className="absolute left-0 top-1 w-full h-0.5 bg-black"></span>
            <span className="absolute left-0 top-3 w-full h-0.5 bg-black"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
