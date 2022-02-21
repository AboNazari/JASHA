import React from "react";
import DonationCard from "../components/DonationCard";

const DonationPayment = () => {
  return (
    <div className="lg:w-3/5 xl:w-1/2">
      <h1 className="text-xl mb-5">
        1 *Please select your one-time amount donation below:
      </h1>
      <div className="grid grid-cols-3 xl:grid-cols-5 gap-x-1 mb-1">
        <DonationCard type="text" text="ONE - TIME DONATION" />
        <DonationCard text="5" />
        <DonationCard text="10" />
      </div>
      <div className="grid grid-cols-3 xl:grid-cols-5 gap-x-1">
        <DonationCard type="text" text="Mounthly  DONATION" />
        <DonationCard text="20" />
        <DonationCard text="50" />
      </div>
    </div>
  );
};

export default DonationPayment;
