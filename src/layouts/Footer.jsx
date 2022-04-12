import { ReactComponent as JASHA } from "../images/JASHA.svg";
import { ReactComponent as Facebook } from "../icons/Facebook_white.svg";
import { ReactComponent as Instagram } from "../icons/Instagram_white.svg";
import { ReactComponent as Telegram } from "../icons/Telegram_white.svg";
import { ReactComponent as WhatsApp } from "../icons/WhatsApp_white.svg";
import { ReactComponent as MasterCard } from "../icons/mastercard.svg";
import { ReactComponent as Visa } from "../icons/visa.svg";
import { ReactComponent as UnionPay } from "../icons/unionpay.svg";
import { ReactComponent as Crypto } from "../icons/bitcoin.svg";

import { ReactComponent as Email } from "../icons/Mail.svg";

const Footer = () => {
  return (
    <div className="h-[20rem] w-full bg-black text-white">
      <div className="w-[80%] flex h-full m-auto">
        {/* first Section */}
        <div className="w-1/4  flex px-10">
          <JASHA />
        </div>
        {/* Second Section */}
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
          <div className="flex  justify-center gap-3 mt-2">
            <MasterCard />
            <Visa />
            <UnionPay />
            <Crypto />
          </div>
          <p className="mt-8 font-primary text-text">Copyright@jasha, 2022</p>
        </div>
        {/* Third Section */}
        <div className="w-1/4 flex flex-col justify-center pl-20">
          <h4 className=" text-text text-2xl mb-2 text-left -mt-8">
            CONTACT INFO
          </h4>
          <p className=" text-lg font-primary text-left flex">
            <Email />
            <a href="#" className="ml-1">
              public@jasha.life
            </a>
          </p>
          <h4 className=" text-text text-2xl mt-8 text-left">FOLLOW Us</h4>
          <div className="flex gap-2 mt-2">
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Instagram />
            </a>

            <a href="#">
              <Telegram />
            </a>
            <a href="#">
              <WhatsApp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
