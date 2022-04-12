import React, { useState } from "react";
import { ReactComponent as Up } from "../icons/Up.svg";
import { ReactComponent as Down } from "../icons/Down.svg";

const Question = ({ Question, Answer, id }) => {
  const [active, setActive] = useState(false);

  const openTab = () => {
    setActive(!active);
  };

  return (
    <div>
      <li
        id={id}
        className="border-t-2 border-dark py-4 flex  justify-between text-lg md:px-5 px-2 items-center"
      >
        <p>{Question}</p>
        {active ? (
          <Up
            className=" transition transform hover:-translate-y-1 hover:duration-[400ms] ease-out hover:ease-in max-w-[20px]"
            onClick={openTab}
          />
        ) : (
          <Down
            className=" transition transform hover:translate-y-1 hover:duration-[400ms] ease-out hover:ease-in max-w-[20px]"
            onClick={openTab}
          />
        )}
      </li>
      {active ? (
        <p className="md:p-5 p-3  text-xl font-primary ">{Answer}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Question;
