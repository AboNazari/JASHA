import React from "react";
import Button from "../components/Button";
import { ReactComponent as Email } from "../icons/email.svg";
import { ReactComponent as FaceBook } from "../icons/Facebook.svg";
import { ReactComponent as Instagram } from "../icons/Instagram.svg";

const Contact = () => {
  return (
    <div className="w-full h-full lg:h-screen overflow-hidden flex items-center justify-center ">
      <div className="w-11/12 lg:w-10/12 rounded-xl flex  shadow-lg flex-col lg:flex-row mb-4">
        <div className="w-full lg:w-2/5 p-9 rounded-xl">
          <h3 className="lg:text-5xl text-3xl font-primary leading-relaxed lg:mx-8 mx-4">
            We’d love to hear from you!
          </h3>
          <ul className="lg:my-28 mt-10 lg:mx-10 md:text-2xl text-xl leading-relaxed font-primary">
            <li>
              <a href="#" className="flex items-center">
                <Email className="mr-4 mt-2" /> public@jahsa.life
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jasha.live/"
                className="flex items-center  mt-4"
                target="_blank"
              >
                <Instagram className="mr-4 mt-2" /> jasha.life
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jasha.live/"
                className="flex items-center mt-4"
              >
                <FaceBook className="mr-4 mt-2" /> jasha.life
              </a>
            </li>
          </ul>
          <p className="text-xl lg:px-10 lg:mt-32 mt-10 font-primary">
            Interested in collaborating and supporting our vision ?
          </p>
        </div>

        <div className="w-full lg:w-3/5 bg-grayLight rounded-xl">
          <form className="md:m-10 md:p-12 p-8 font-primary">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-4 rounded-xl shadow-md my-4 "
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full p-4 rounded-xl shadow-md my-4 "
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="w-full p-4 rounded-xl shadow-md my-4"
              placeholder="Your Message"
            ></textarea>
            <Button text="Send Message" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
