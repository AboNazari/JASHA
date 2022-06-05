import { useState } from "react";
//icons
import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as Lightning } from "../icons/lightning.svg";
import { ReactComponent as Home } from "../icons/Home.svg";
import { ReactComponent as Envelope } from "../icons/Envelope.svg";
import { ReactComponent as Hat } from "../icons/Hat.svg";
import { ReactComponent as Book } from "../icons/Book.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="flex items-center w-full h-auto fixed top-0 left-0 px-[5vw] shadow-md bg-white md:pt-10 pt-5 z-50 md:pb-5 flex-col lg:flex-row">
      <div className="flex flex-row justify-between   w-full px-5">
        <Logo className="w-[150px] md:w-[200px] lg:border-r-4 md:pr-10 pr-5 border-primary" />
        {open ? (
          <button
            className="p-6 text-white text-2xl lg:hidden"
            onClick={toggle}
          >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAB+klEQVRoge2ZTU7DMBBGXzkAKVwCtnTBhquQ81CJLpoW8XMUNrCklUDiGtyCRT2qY5zEie3URf6kSE2cePw644k9gaysrKysrPE0AUqgiGijAG6VrSiaABXwA2yJA1MAG2WjogfMieN9E2AJ3ACXwDvwBpz3Gma7CuAV+AYugGvgiYCeEU98Amfa9TnwRRgY8cQz+4EXwIdxzUslO1dP1flM/RYv+YaZQEgoTYEr1TZVtkuP/v8YWmuGZqpNYDYMgzEhoP5HVR59txpcaQYX1D3T16DNE/eqLQqEaVhgfDxjg3ggoieaBuDjmYNDiE7ZZZMXZbgAHtllL4FpymZmdjKftWXHqBoCkxyEPjBXmGQhRK7xnsSc6FIXzFwdSUOIzOWEHjr6PUmFU5PaYI4GQiRhNlfnEkoSTqi24OHkuowPqWgbplBqS7G20Aq1BQiqNgj9nqRhutLvnTpsbSsSSb9dELKI3KjfScJ0LTuW7FNsW2o+aJj1gdCfcYEZ7d0yBEJ/tgtmlBel65xw2Vjpc2ah2kaZMyEgzL4EBupFh2gwtmpHqOJDk2fWA/p0MmirO/kuxbs8ExSmrUBXEaZAt6XuGanOBC3Q2fbgoXN/U8nUvOYtc+AxXmD6wKdEgBBJNon9WWHLgM8KfTXWh56SI9i3ZGVlZWX9H/0ChDO7JqoWg7QAAAAASUVORK5CYII=" />
          </button>
        ) : (
          <button
            className="p-6 text-white text-2xl lg:hidden"
            onClick={toggle}
          >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADQElEQVRoge3ZTWicVRQG4CdBbUGpRFCbaGvaBmqrCAqC4N6/+Ae6EFHcCFpKcSN0J7RaN+66EMGfTa0/qVRcuBBFFyouLIq6LhbRVarYNLWmyWRcnPMx0+k3k5mMyWTCvHD58t37zrnvmXPPufdmGGCAAQboJwy1yduKRzCJbbgBV66QpnP4A7/iU3yC37o1ugVvYwHVHrV5vJValoWHMZPG5nAET2DCykVD2p7IuY7m3FWcSU0dYR8qaeA9rb+NVzGLQ51O0iZuwgeppYK97X7w0fxABXsaxspEn81JZroQ2w72pqYFPLQUebPacirzvEz0oex/pVulbWBfzv83rmtFfDOJx5qMr6boZjguNL7RjHC9CNucKK9LYaVzoxm24IKoZteWEfYIT6faNLhauVGGj3Lu54qO4brB+/J5vE1jh0VEDv8v0jrDx/m8t2zwF+HlzlWTs3zsElp/KjqKI8pGTOOqHojqBrOi0p4rltZr+s8JQvMRGZAHsYh/cUcJeSRbO0ZHOxCxSVTKpbCxid2bxbGlihfh93z5DrvriFtxQIRvFi8pj9oGvIDToiS+g+0thI3gYIqYE6vhmhLeZXgm9VXS7q1q6TAm9rsq5ofwOp6vI5xPQZvyvSKq21BO/q5IsipuwZNqu+xicufF+egofhb70w48jmdxdQP/H7yPE2Jl7Eq7NyZvIR0jvtTFOn1EEMBdLj0+n0ond+JOfFXCKdq3onzvEMf+Cy24VXyGu3GbKPeVJrwf8ZhYgi+Lytpo+ykM11+sqvkcESE/71LcjntSMJzE5/ihgTculsVk/r1BXI6+FBH9voG/XRzRJ0ROnMTX+KZEw+W4QkSGksth4WG/4CK9wy2IfYUigcbr+vopKoT2U8R6P613d/Ju27Qs98VJckps9/2CzWr7yBT8lS/95ESBUaH9z3WT7NTCc0xnZ6VeY1QtLT4kEmVa75O2m2TfVng3vgYELbfVbx3UDfQLLtK7bpJ94Mhaw7p05Gw+x3ohpEMU/wk9U3TUO1Jcdp5eNTnLR6HxRNngpChnc9hvbUZmTGgrfvy5vxnxoN5vcO22A0t5/QC+UPudZC21mdTWNBIDDDDAAP2B/wDzeNCX+hPHIAAAAABJRU5ErkJggg==" />
          </button>
        )}
      </div>
      <nav className={open ? "md:ml-[10%]  lg:block" : "hidden lg:block"}>
        <ul className="flex lg:gap-40 font-primary  text-[#87D4AA] flex-col lg:flex-row">
          <li
            className="text-center text-xl flex flex-col justify-center hover:text-[#304F45] duration-500 my-5 lg:my-0 "
            onClick={toggle}
          >
            <a href="#home">
              <Home className="m-auto duration-500 hover:fill-[#304F45] fill-[#87D4AA] h-[40px] lg:h-[80px]" />
              Home
            </a>
          </li>
          <li
            className="text-center text-xl flex flex-col justify-center hover:text-[#304F45] duration-500 my-5  lg:my-0 "
            onClick={toggle}
          >
            <a href="#quote">
              <Hat className="m-auto duration-500 hover:fill-[#304F45] fill-[#87D4AA] h-[40px] lg:h-[80px]" />
              <p className="pt-3 tracking-wider">Quote Of the Day</p>
            </a>
          </li>
          <li
            className="text-center text-xl flex flex-col justify-center hover:text-[#304F45] duration-500 my-5 lg:my-0 "
            onClick={toggle}
          >
            <a href="#warrior">
              <Lightning className="m-auto duration-500 hover:fill-[#304F45] fill-[#87D4AA] h-[40px] lg:h-[80px]" />
              <p className="pt-3 tracking-wider">Warrior Of the Week</p>
            </a>
          </li>
          <li
            className="text-center text-xl flex flex-col justify-center hover:text-[#304F45] duration-500 my-5  lg:my-0 "
            onClick={toggle}
          >
            <a href="#contact">
              <Envelope className="m-auto duration-500 hover:fill-[#304F45] fill-[#87D4AA] h-[40px] lg:h-[80px]" />
              <p className="pt-3 tracking-wider"> Contact Us</p>
            </a>
          </li>
          <li
            className="text-center text-xl hover:text-[#304F45] duration-500 my-5  lg:my-0 "
            onClick={toggle}
          >
            <a href="#about">
              <Book className="m-auto duration-500 hover:fill-[#304F45] fill-[#87D4AA] h-[40px] lg:h-[80px]" />
              <p className="pt-3 tracking-wider">About</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
