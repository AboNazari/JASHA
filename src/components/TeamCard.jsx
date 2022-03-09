import React from "react";

const TeamCard = ({ member }) => {
  return (
    <div
      className={`w-full h-full mx-5 ${
        member.id % 2 === 0 ? "mt-20 lg:-mt-[8rem]" : ""
      }`}
    >
      <div
        className="w-56 h-72 lg:w-[20rem] lg:h-[26rem] bg-center bg-cover"
        style={{ backgroundImage: `url(${member.image})` }}
      />
      <div className="relative">
        <h2 className="lg:text-3xl mt-5">{member.name}</h2>
        <span className="absolute top-0 right-0">+ {member.role}</span>
      </div>
    </div>
  );
};

export default TeamCard;
