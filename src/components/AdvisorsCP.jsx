import { ReactComponent as Right } from "../icons/right.svg";
import { ReactComponent as Left } from "../icons/left.svg";
import { useState, useEffect } from "react";

const AdvisorsCP = ({ AdvisorsData }) => {
  const [index, setIndex] = useState(0);
  const [first, setFirst] = useState(true);
  const [last, setLast] = useState(false);

  useEffect(() => {
    setIndex(0);
  }, []);

  const next = (e) => {
    if (index === AdvisorsData.length - 2) {
      setLast(true);
    }
    if (index === AdvisorsData.length - 1) {
      setLast(true);
      setIndex(AdvisorsData.length - 1);
    } else {
      setIndex(index + 1);
      setFirst(false);
    }
  };

  const prev = () => {
    if (index === 1) {
      setFirst(true);
    }
    if (index === 0) {
      setIndex(0);
      setFirst(true);
    } else {
      setIndex(index - 1);
      setLast(false);
    }
  };

  return (
    <div className="w-full h-full lg:h-screen lg:w-3/4  m-auto overflow-hidden flex items-center justify-center  flex-col lg:flex-row my-8">
      <h3 className="font-primary font-bold text-5xl pb-20 lg:hidden text-center">
        Our Advisors Thougths
      </h3>
      <div className="lg:w-6/12 h-full flex align-middle justify-center">
        <img
          src={AdvisorsData[index].img}
          alt={"A picture of " + AdvisorsData[index].name}
          className="h-4/6 w-5/6 m-auto  rounded-br-[12rem] md:w-2/4 lg:w-5/6"
        />
      </div>
      <div className="w-full lg:w-6/12  flex   flex-col  lg:pl-10">
        <h3 className="font-primary font-bold text-5xl pb-20 hidden lg:block ">
          Our Advisors Thougths
        </h3>
        <p className="lg:text-2xl lg:pr-24 font-primary mt-7 text-xl px-8">
          {AdvisorsData[index].quote}
        </p>
        <h3 className="font-primary text-lg font-bold pt-8 pb-2 px-9">
          {AdvisorsData[index].name}
        </h3>
        <p className="text-md lg:mb-20 mb-8  px-9">
          {AdvisorsData[index].position}
        </p>
        <div className="flex gap-2  px-9">
          <button
            className={
              first
                ? "p-3 bg-slate-400 rounded-full"
                : "p-3  bg-black rounded-full"
            }
            onClick={prev}
          >
            <Left />
          </button>
          <button
            className={
              last
                ? "p-3 bg-slate-400 rounded-full"
                : "p-3  bg-black rounded-full"
            }
            onClick={next}
          >
            <Right />
          </button>
          <span className="p-3  text-[1rem]">0{AdvisorsData[index].id}/04</span>
        </div>
      </div>
    </div>
  );
};

export default AdvisorsCP;
