import { ReactComponent as Lightning } from "../icons/LighteningFull.svg";
import person from "../images/Char1.jpg";

const Warrior = () => {
  return (
    <div className="w-full text-black lg:mb-[10rem]" id="warrior">
      <div className="w-[85%] m-auto text-dark md:mb-20 mb-10">
        <div className="flex flex-col w-[10rem]">
          <Lightning className="m-auto" />
          <div className=" bg-gradient-to-r from-primary to-dark w-[11rem] h-[6px] mt-4"></div>
        </div>
        <h3 className="md:text-5xl text-3xl tracking-wider pt-7">
          WARRIOR OF THE WEEK
        </h3>
      </div>
      <div className="flex gap-8 lg:w-3/4 w-[85%] m-auto flex-col lg:flex-row">
        <div className="lg:w-1/3 flex flex-col mx-h-[50vh] rounded-xl">
          <img
            src={person}
            className="lg:max-h-[47vh] max-h-[40vh] object-cover lg:rounded-tl-3xl  rounded-t-2xl lg:rounded-tr-none"
          />
          <p className="w-full py-3 bg-gradient-to-r from-primary to-dark text-white text-2xl text-center rounded-b-3xl">
            The Best Person
          </p>
        </div>
        <div className="lg:w-2/3 rounded-br-3xl rounded-xl text-xl text-white lg:p-12 p-6 font-primary  bg-gradient-to-br from-primary to-dark">
          <div className="pb-10 pt-5 lg:text-2xl text-xl">
            <div className=" bg-white w-[7rem] h-[3px]"></div>
            <h3 className=" text-3xl pb-10 pt-4">QUOTE</h3>
            <p>
              “You will never know what results come of your actions, but if you
              do nothing, there will be no results.”
            </p>
          </div>
          <div className="py-5 lg:py-10 lg:text-2xl text-xl">
            <div className=" bg-white w-[14rem] h-[3px]"></div>
            <h3 className="text-3xl pb-10 pt-4">ACHIEVMENTS</h3>
            <li className="ml-5">
              Wrote the blog “On how to fight back the bullies”, which recieved
              13,278 views and 2721 likes.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warrior;
