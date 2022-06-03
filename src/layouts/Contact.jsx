import React from "react";
import Button from "../components/Button";
import { ReactComponent as Email } from "../icons/email.svg";
import { ReactComponent as FaceBook } from "../icons/Facebook.svg";
import { ReactComponent as Instagram } from "../icons/Instagram.svg";
import { useState } from "react";
import { send } from "emailjs-com";

const Contact = () => {
  const [toSend, setToSend] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    send("service_hawx44n", "template_ttgta2q", toSend, "Vp2nB-WOSzwvwq9du")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    cleanUp();
  };
  const cleanUp = () => {
    setToSend({
      name: "",
      surname: "",
      email: "",
      message: "",
    });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div
      id="contact"
      className="w-full h-full lg:h-screen overflow-hidden flex items-center justify-center "
    >
      <div className="w-11/12 lg:w-10/12  flex  shadow-lg flex-col lg:flex-row mb-4">
        <div className="w-full lg:w-2/5 p-9 ">
          <h3 className="lg:text-5xl text-3xl font-primary leading-relaxed lg:mx-8 mx-4">
            We’d love to hear from you!
          </h3>
          <ul className="lg:my-28 mt-10 lg:mx-10 md:text-2xl text-xl leading-relaxed font-primary">
            <li>
              <a href="mailto:public@jahsa.life" className="flex items-center">
                <Email className="mr-4 mt-2" /> public@jahsa.life
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jasha.life/"
                className="flex items-center  mt-4"
                target="_blank"
              >
                <Instagram className="mr-4 mt-2" /> jasha.life
              </a>
            </li>
          </ul>
          <p className="text-xl lg:px-10 lg:mt-32 mt-10 font-primary">
            Interested in collaborating and supporting our vision ?
          </p>
        </div>

        <div className="w-full lg:w-3/5 bg-grayLight ">
          <form
            onSubmit={onSubmit}
            action="#"
            className="md:m-10 md:p-12 p-8 font-primary"
          >
            <input
              type="text"
              name="name"
              placeholder="First Name"
              className="w-full p-4 rounded-xl shadow-md my-4 "
              value={toSend.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="surname"
              placeholder="last Name"
              className="w-full p-4 rounded-xl shadow-md my-4 "
              value={toSend.surname}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="w-full p-4 rounded-xl shadow-md my-4 "
              value={toSend.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="w-full p-4 rounded-xl shadow-md my-4"
              placeholder="Your Message"
              value={toSend.message}
              onChange={handleChange}
            ></textarea>
            <div className="flex items-center content-center gap-5 mt-5">
              <button
                className=" py-2 bg-primary border-2 border-primary w-[8rem] rounded-lg text-white place-self-end hover:bg-white hover:text-dark"
                onClick={cleanUp}
              >
                Cancel
              </button>
              <button
                className=" py-2 bg-primary border-2 border-primary w-[8rem] rounded-lg text-white place-self-end hover:bg-white hover:text-dark"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
