import React from "react";

const PartnersCard = ({ img, name, link }) => {
  return (
    <div className="w-[20rem] h-[12rem] flex  flex-col  justify-center items-center border-2">
      <img src={img} alt={name} className="m-4 h-4/5 p-2 object-contain " />
      <button className="px-8 h-1/5 py-2 my-2 font-primary border-2  border-dark hover:translate-x-5 transition-transform duration-300 ease-linear ">
        <a href={link} target="_blank">
          learn More {">>>"}
        </a>
      </button>
    </div>
  );
};

export default PartnersCard;
