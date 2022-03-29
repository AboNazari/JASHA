import abo from "../images/team/abo1.jpg";
import { ReactComponent as Right } from "../icons/right.svg";
import { ReactComponent as Left } from "../icons/left.svg";

const Advisors = () => {
  return (
    <div className="w-full h-full lg:h-screen lg:w-3/4  m-auto overflow-hidden flex items-center justify-center  flex-col lg:flex-row my-8">
      <h3 className="font-primary font-bold text-5xl pb-20 lg:hidden text-center">
        Our Advisors Thougths
      </h3>
      <div className="lg:w-6/12 h-full flex align-middle justify-center">
        <img
          src={abo}
          alt=""
          className="h-4/6 w-5/6 m-auto  rounded-br-[12rem] md:w-2/4 lg:w-5/6"
        />
      </div>
      <div className="w-full lg:w-6/12  flex   flex-col  lg:pl-10">
        <h3 className="font-primary font-bold text-5xl pb-20 hidden lg:block ">
          Our Advisors Thougths
        </h3>
        <p className="lg:text-2xl lg:pr-24 font-primary mt-7 text-xl px-8">
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
          voluptatum deleniti ipsum molestias amet similique obcaecati
          repellendus officia ipsa optio id aspernatur voluptatem, voluptates
          nulla inventore officiis fugit sapiente nostrum?"
        </p>
        <h3 className="font-primary text-lg font-bold pt-8 pb-2 px-9">
          Ashley Wayng
        </h3>
        <p className="text-md lg:mb-20 mb-8  px-9">
          Head of Responsible investing.
        </p>
        <div className="flex gap-2  px-9">
          <button className="p-3  bg-black rounded-full">
            <Left className="" />
          </button>
          <button className="p-3 bg-black rounded-full">
            <Right />
          </button>
          <span className="p-3  text-[1rem]">01/04</span>
        </div>
      </div>
    </div>
  );
};

export default Advisors;
