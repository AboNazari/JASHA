import React from "react";
import { useState } from "react";
import Question from "../components/Question";
import QuestionsData from "../data/QuestionsData";

const FAQ = () => {
  const [data, setData] = useState(QuestionsData);
  const [isOpen, setIsOpen] = useState(false);

  // The Open Handler
  const onToOpenClick = (e) => {
    console.log(e.target.parentElement.id);

    const id = e.target.parentElement.id;

    console.log(data.id);

    // Check out the existence of the id
    data.map((Q) => {
      if (Q.id === id) {
        setIsOpen(!isOpen);
      }
    });
  };

  return (
    <div className="w-11/12 lg:w-10/12 rounded-xl shadow-lg  mx-auto p-10 ">
      <h3 className=" font-primary lg:text-3xl text-xl text-center mb-10">
        Frequesntly Asked Questions (FAQ)
      </h3>
      <div>
        <ul className=" last:border-b-2 border-b-dark">
          {data.map((Que) => {
            return (
              <Question
                key={Que.id}
                id={Que.id}
                Question={Que.Q}
                Answer={Que.A}
                open={Que.isOpen}
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
