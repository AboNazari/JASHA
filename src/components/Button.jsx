import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <>
      <Link className="text-base block my-5 w-fit" to="/">
        View more
      </Link>
    </>
  );
};

export default Button;
