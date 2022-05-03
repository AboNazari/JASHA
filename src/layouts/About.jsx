import React from "react";
import { ReactComponent as Girl } from "../images/girlpen.svg";

const About = () => {
  return (
    <div className="w-5/6 h-full lg:h-screen overflow-hidden flex flex-col p-10 md:pr-0 m-auto">
      <div className="w-full relative">
        <div className=" bg-primary w-[11rem] h-[6px]"></div>
        <h2 className="text-5xl mt-6 tracking-widest">ABOUT US</h2>
        <button className="px-16 text-white font-bold text-xl py-4 bg-primary mt-16 rounded-xl absolute right-0">
          Jasha - Live
        </button>
      </div>
      <div className="w-full mt-40 px-4  bg-gradient-to-r from-white to-[#CED6CF] flex rounded-2xl">
        <Girl className="w-1/2" />
        <p className="w-1/2 p-4 text-lg font-[Roboto] pt-32 leading-10">
          “Jasha” is a social media platform for public exchange of posts
          (texts, photos, videos, music) aimed at publishing notes in the form
          of blogs and articles about conscious living. In Jasha, all posts
          focus on topics around conscious living: eco-friendly life style,
          mental and physical wellbeing, and personal growth.
          <br />
          <br />
          Jasha welcomes everyone, regardless of race, age, ethnicity, religion,
          gender, sexual identity, or any other affiliation.
        </p>
      </div>
    </div>
  );
};

export default About;