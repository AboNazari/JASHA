import { ReactComponent as People } from "../images/peopleW.svg";

const Counter = ({ setShow }) => {
  return (
    <div
      id="Counter"
      className="flex justify-center items-center  flex-col bg-[#F0F6F1] my-10 py-16 "
    >
      <div className="flex gap-8 ">
        <div className="flex flex-col justify-center bg-primary rounded-3xl md:py-10 py-5 px-10 m-auto mx-5 md:px-20 mb-24 shadow-2xl shadow-solid">
          <p className="md:text-4xl text-2xl text-center pt-8 text-white tracking-wider font-primary font-semibold leading-loose">
            Become part of the <br /> movement!
          </p>
          <button
            onClick={() => setShow(true)}
            className="md:px-16 md:py-5 m-auto font-primary rounded-full bg-white text-black md:text-4xl py-2 px-5 text-2xl mt-5"
          >
            JOIN US
          </button>
        </div>
      </div>
      {/* bottom section */}
      <div className="bg-white md:px-20 py-10 md:rounded-2xl shadow-2xl flex lg:w-[68%] justify-between md:flex-row flex-col ">
        <People className="md:w-1/3 w-3/4 m-auto  " />
        <div className="md:w-2/3 px-6">
          <h3 className="md:text-4xl text-3xl text-primary pb-6 font-primary ">
            What's our movement?
          </h3>
          <p className="lg:text-xl text-lg">
            Jasha is intended to be a community-based social media platform
            which encourages social change through a userbase that publishes
            posts about conscious living. The reason that we opted for this term
            was that the word "Jasha” is taken from Kyrgyz origin which means
            easygoing, highly sociable and having deep affection for life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
