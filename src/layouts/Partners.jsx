import PartnersCard from "../components/PartnersCard";
import PartnersData from "../data/PartnersData";

const Partners = () => {
  return (
    <div className="w-full  m-auto overflow-hidden flex items-center justify-center flex-col lg:flex-col my-4">
      <div className="h-1/5 text-center lg:w-[40rem] p-4">
        <h2 className="text-primary  text-5xl my-4">Our Partners</h2>
        <p className="text-text font-primary text-lg  text-center ">
          While our team works very hard to create our world a better place for
          everyone, hundreds of incredible people support our goal.
        </p>
        <span className="text-primary font-bold text-2xl">
          ________________
        </span>
      </div>
      <div className="h-4/5  grid gap-8  lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 mx-auto py-10  items-center">
        {PartnersData.map((data) => (
          <PartnersCard
            key={data.id}
            img={data.img}
            name={data.name}
            link={data.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
