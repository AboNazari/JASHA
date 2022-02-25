import React from "react";
import { ReactComponent as Up } from "../icons/Up.svg";
import { ReactComponent as Down } from "../icons/Down.svg";

const Question = ({ Question, Answer, open }) => {
  return (
    <div>
      <li className="border-t-2 border-dark py-4 flex spcae-x-10">
        <p>{Question}</p> {open ? <Up /> : <Down />}
      </li>
      {open ? <p className="p-10 mt-4 text-xl font-primary">{Answer}</p> : ""}
    </div>
  );
};

export default Question;
