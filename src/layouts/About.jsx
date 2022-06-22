import Hello from "../animations/Hello";

const About = () => {
  return (
    <div className="lg:w-5/6 w-full h-full lg:h-screen overflow-hidden flex flex-col md:px-10 px-2 m-auto mb-40">
      <div className="w-full relative m-auto">
        <div className=" bg-primary w-[11rem] h-[6px]"></div>
        <h2 className="text-5xl mt-6 tracking-widest -mb-20 md:mb-0">
          ABOUT US
        </h2>
      </div>
      <div className="w-full mt-40 lg:mt-0 px-4  bg-gradient-to-r from-white to-[#CED6CF] flex rounded-2xl flex-col lg:flex-row border-2 pb-10 md:pt-10">
        <div className="lg:w-1/2 w-[100%] md:p-4 mt-2  m-auto  md:-my-10 ">
          <Hello />
        </div>
        <div className="lg:w-1/2 p-4 text-lg font-[Roboto] lg:pt-16 leading-10">
          “Jasha” is a project planned to be a social media platform for youth
          of Central Asia especially Kyrgyzstan, to facilitate communication and
          exchange of information and ideas about conscious living. In Jasha,
          all posts will be focused on topics around conscious living:
          eco-friendly lifestyles, sustainable development, mental and physical
          wellbeing, and personal growth.
          <br />
          <br />
          Jasha welcomes everyone, regardless of race, age, ethnicity, religion,
          gender, sexual identity, or any other affiliation.
        </div>
      </div>
    </div>
  );
};

export default About;
