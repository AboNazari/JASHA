import React from "react";
import { useState } from "react";
import Question from "../components/Question";
import QuestionsData from "../data/QuestionsData";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onToOpenClick = (e) => {
    console.log(e.target.parentElement.id);
    const id = e.target.parentElement.id;
    setIsOpen(!isOpen);

    if (id == QuestionsData.id) {
      console.log(QuestionsData.id + "This");
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="w-11/12 lg:w-10/12 rounded-xl shadow-lg  mx-auto p-10 ">
      <h3 className=" font-primary lg:text-3xl text-xl text-center mb-10">
        Frequesntly Asked Questions (FAQ)
      </h3>
      <div>
        <ul className=" last:border-b-2 border-b-dark">
          {QuestionsData.map((Que) => {
            return (
              <Question
                key={Que.id}
                id={Que.id}
                Question={Que.Q}
                Answer={Que.A}
                open={isOpen}
                openHandler={onToOpenClick}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
