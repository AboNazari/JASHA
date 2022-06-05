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
          “Jasha” is a social media platform for public exchange of posts
          (texts, photos, videos, music) aimed at publishing notes in the form
          of blogs and articles about conscious living. In Jasha, all posts
          focus on topics around conscious living: eco-friendly life style,
          mental and physical wellbeing, and personal growth.
          <br />
          <p className="lg:block hidden">
            The social media platform Jasha is designed for Central Asian youth
            to create social change and support their development as a community
            and as individuals. The platform should be publicly available to any
            mobile internet user to create and publish posts on topics such as
            conscious living, eco-friendly lifestyles, mental and physical
            wellbeing, and personal growth. Languages of the platform: English,
            Russian, and Kyrgyz. 
          </p>
          <br />
          Jasha welcomes everyone, regardless of race, age, ethnicity, religion,
          gender, sexual identity, or any other affiliation.
        </div>
      </div>
    </div>
  );
};

export default About;
