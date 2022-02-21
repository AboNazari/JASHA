import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text }) => {
  return (
    <>
      <Link
        className="text-base block my-5 w-fit bg-primary py-3 px-6 rounded-md text-white shadow-md"
        to="/"
      >
        {text}
      </Link>
    </>
  );
};

export default Button;
