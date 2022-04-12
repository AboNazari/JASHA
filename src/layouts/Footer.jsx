import { ReactComponent as JASHA } from "../images/JASHA.svg";
import { ReactComponent as Facebook } from "../icons/Facebook.svg";
import { ReactComponent as Email } from "../icons/email.svg";

const Footer = () => {
  return (
    <div className="h-[20rem] w-full ">
      <div className="w-[80%] flex h-full m-auto">
        <div className="w-1/4  flex px-10">
          <JASHA />
        </div>
        <div className="w-2/4 flex flex-col justify-center text-center ">
          <h3 className=" text-text text-2xl mb-4">USEFUL LINKS</h3>
          <p className="flex justify-evenly my-1 text-lg font-primary ">
            <a href="#">Benifits</a> <a href="#">FAQ</a>
            <a href="#">Contact Us</a>
          </p>
          <p className="flex justify-evenly my-1 text-lg font-primary ">
            <a href="#">Joing Us</a> <a href="#">About Us</a>
          </p>
          <p className="flex justify-evenly my-1 text-lg font-primary ">
            <a href="#">Donation</a>
          </p>
          <div></div>
          <p className="mt-8 font-primary text-text">Copyright@jasha, 2022</p>
        </div>
        <div className="w-1/4 flex flex-col justify-center pl-20">
          <h4 className=" text-text text-2xl mb-2 text-left -mt-8">
            CONTACT INFO
          </h4>
          <p className=" text-lg font-primary text-left">
            <a href="#" className="flex">
              {" "}
              <Email />
              public@jasha.life
            </a>
          </p>
          <h4 className=" text-text text-2xl mt-8 text-left">FOLLOW Us</h4>
          <div className="flex gap-2 mt-2">
            <Facebook />
            <Facebook />
            <Facebook />
            <Facebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
