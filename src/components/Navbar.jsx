import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0">
      <div>Jasha</div>
      <div>
        <Link>Home</Link>
        <Link>s</Link>
        <Link>s</Link>
        <Link>s</Link>
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
