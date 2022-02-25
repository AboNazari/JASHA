import React from "react";
import { ReactComponent as Up } from "../icons/Up.svg";
import { ReactComponent as Down } from "../icons/Down.svg";

const Question = ({ Question, Answer, open, openHandler, id }) => {
  return (
    <div>
      <li
        id={id}
        className="border-t-2 border-dark py-4 flex  justify-between text-lg px-5 items-center"
      >
        <p>{Question}</p>{" "}
        {open ? (
          <Up
            className=" transition transform hover:-translate-y-2 hover:duration-[400ms] ease-out hover:ease-in"
            onClick={openHandler}
          />
        ) : (
          <Down
            className=" transition transform hover:translate-y-2 hover:duration-[400ms] ease-out hover:ease-in "
            onClick={openHandler}
          />
        )}
      </li>
      {open ? <p className="p-10 mt-4 text-xl font-primary">{Answer}</p> : ""}
    </div>
  );
};

export default Question;
