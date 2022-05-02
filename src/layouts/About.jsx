import React from "react";

const About = () => {
  return (
    <div className="w-full h-full lg:h-screen overflow-hidden flex flex-col md:flex-row md:items-center p-10 md:pr-0">
      <div>
        <span></span>
        <h2>ABOUT US</h2>
        <button>Jasha - Live</button>
      </div>
      <div>
        <img src="#" alt="" />
        <p>
          “Jasha” is a social media platform for public exchange of posts
          (texts, photos, videos, music) aimed at publishing notes in the form
          of blogs and articles about conscious living. In Jasha, all posts
          focus on topics around conscious living: eco-friendly life style,
          mental and physical wellbeing, and personal growth. Jasha welcomes
          everyone, regardless of race, age, ethnicity, religion, gender, sexual
          identity, or any other affiliation.
        </p>
      </div>
    </div>
  );
};

export default About;
