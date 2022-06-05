import Question from "../components/Question";
import QuestionsData from "../data/QuestionsData";

const FAQ = () => {
  return (
    <div id="faq" className="w-11/12 lg:w-10/12  shadow-lg mx-auto p-10 ">
      <h3 className=" font-primary lg:text-3xl text-xl text-center mb-10">
        Frequently Asked Questions (FAQ)
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
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
