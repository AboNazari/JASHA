import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-full lg:h-screen overflow-hidden flex flex-col md:items-center p-10 md:pr-0 justify-center ">
      <div className="w-4/5 h-5/6 bg-slate-300 rounded-lg flex  md:flex-row">
        <div className="w-2/4 p-9">
          <h3>We’d love to hear from you!</h3>
          <ul>
            <li>
              {" "}
              <img src="" alt="" /> public@jahsa.life
            </li>
            <li>
              <img src="" alt="" /> jasha.life
            </li>
            <li>
              <img src="" alt="" /> jasha.life
            </li>
          </ul>
          <p>Interested in collaborating and supporting our vision ?</p>
        </div>
        <div className="w-2/4 bg-slate-200">
          <form className=" m-10 p-12">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-4 rounded-xl"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
