import Img from "../images/team.png";
import DonationPayment from "./DonationPayment";

const Donation = () => {
  return (
    <div className="my-10 overflow-hidden" id="Donation">
      <div
        style={{ backgroundImage: `url(${Img})` }}
        className="w-full h-[100vw] sm:h-[50vw] lg:h-[34vw] bg-cover bg-bottom text-white flex justify-end flex-col pl-6 pb-16 sm:pb-24 lg:pl-20 relative"
      >
        <h1 className="font-primary text-5xl">Donation Now</h1>
        <p className="mt-3 text-xl">
          Make a positive impact on this world to be a better place for everyone
        </p>
        <div className="absolute w-0 h-0 border-b-[200px] border-b-white border-l-[100rem] border-l-transparent left-0 bottom-0 transfor" />
      </div>
      <div className="flex w-full h-full relative px-5 lg:px-20 py-10">
        <div className="flex justify-center w-full">
          <DonationPayment />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Donation;
