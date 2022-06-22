import React from "react";
import PlaneAnim from "../animations/plane";
import { useState } from "react";
import { send } from "emailjs-com";
import { useDispatch } from "react-redux";

const Join = ({ setShow }) => {
  const dispatch = useDispatch();
  const [wrongData, setWrongData] = useState(false);
  const [toSend, setToSend] = useState({
    name: "",
    country: "",
    email: "",
  });

  // submit the form
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      toSend.name.length === 0 ||
      toSend.country.length === 0 ||
      toSend.email.length === 0
    ) {
      setWrongData(true);
      return;
    }
    send("service_3npqqem", "template_4ersksw", toSend, "69GecIkoClHs_iZtP")
      .then((response) => {
        console.log("SUCCESS!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    cleanUp();
    toggleShow();
  };

  // clean up the form on cancel
  const cleanUp = () => {
    if (
      toSend.name.length > 0 ||
      toSend.country.length > 0 ||
      toSend.email.length > 0
    ) {
      setToSend({
        name: "",
        country: "",
        email: "",
      });
      setWrongData(false);
    } else {
      toggleShow();
      setWrongData(false);
    }
  };

  // set the data in the appropriate state
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  // toggle the show state of the join component
  const toggleShow = () => {
    dispatch({ type: "close" });
  };

  return (
    <div className="fixed flex justify-center items-center flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-2/5 bg-white shadow-xl lg:h-[22vw] rounded-[2rem] lg:px-10 z-50 py-6 px-20">
      <h1 className="lg:text-5xl text-2xl py-5">Join our Movement</h1>
      <div
        onClick={toggleShow}
        className="absolute text-3xl text-black top-10 right-10 cursor-pointer hover:cursor-pointer"
      >
        X
      </div>
      <div className="lg:grid flex flex-row grid-cols-5 gap-4 w-full">
        <form
          onSubmit={onSubmit}
          action="#"
          className="col-span-3 lg:grid flex flex-col pt-5 md:pt-0 grid-cols-2 gap-5 items-center content-center"
        >
          <input
            className={`col-span-1 lg:px-7 lg:py-6 py-4 px-5 rounded-lg border-4 ${
              wrongData ? "border-red-300" : ""
            }`}
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            value={toSend.name}
            onChange={handleChange}
          />
          <input
            className={`col-span-1 lg:px-7 lg:py-6 py-4 px-5 rounded-lg border-4 ${
              wrongData ? "border-red-300" : ""
            }`}
            type="text"
            placeholder="Country"
            name="country"
            id="country"
            value={toSend.country}
            onChange={handleChange}
          />
          <input
            className={`col-span-2 lg:px-7 lg:py-6 py-4 px-5 rounded-lg border-4  ${
              wrongData ? "border-red-300" : ""
            }`}
            type="email"
            placeholder="E-mail"
            name="email"
            id="email"
            value={toSend.email}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="lg:px-14 px-8 py-4 bg-primary text-white text-xl rounded-lg"
          >
            Join
          </button>
          <button
            className=" lg:px-14 px-8 py-4 bg-primary text-white text-xl rounded-lg"
            onClick={cleanUp}
          >
            Cancel
          </button>
        </form>
        <div className="col-span-2 overflow-hidden hidden lg:block">
          <PlaneAnim />
        </div>
      </div>
    </div>
  );
};

export default Join;
