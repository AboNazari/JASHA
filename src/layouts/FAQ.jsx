import React from "react";
import { useState } from "react/cjs/react.production.min";
import Question from "../components/Question";
import QuestionsData from "../data/QuestionsData";

const FAQ = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const onToOpenClick = (e) => {
  //     const id = e.target.id;
  //     if (id == QuestionsData.id) {
  //       setIsOpen(!isOpen);
  //     }
  //   };
  return (
    <div>
      <h3>FAQ</h3>
      <div>
        <ul>
          {QuestionsData.map((Que) => {
            return (
              <Question
                key={Que.id}
                id={Que.id}
                Question={Que.Q}
                Answer={Que.A}
                open={false}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
