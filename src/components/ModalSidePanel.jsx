// import React, { useEffect } from "react";
import { IoClose, IoLogoInstagram } from "react-icons/io5";
import { useCart } from "./CartProvider";
import { Link } from "react-router-dom";

const ModalSidePanel = () => {
  const { open, setOpen } = useCart();
  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      setOpen(false);
    }
  };

  // useEffect(() => {
  //   const body = document.querySelector("body");

  //   // Set timeout to run after 1 second
  //   const timer = setTimeout(() => {
  //     // Your code to run after 1 second goes here
  //     if (open) {
  //       body.style.overflow = "hidden";
  //     } else {
  //       body.style.overflow = "auto";
  //     }
  //   }, 500);

  //   // Clean up function to clear the timer
  //   return () => {
  //     clearTimeout(timer);
  //     body.style.overflow = "auto";
  //   };
  // }, [open]);

  //   if (!open) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className={`fixed ${
        !open
          ? "translate-x-[110%] duration-500 md:duration-1000"
          : "duration-500 md:duration-700"
      }  z-40 flex justify-end  top-0 right-0 h-full md:hidden w-full`}
    >
      <div
        className={`relative flex items-center w-[80%] sm:w-[70%] overflow-hidden bg-white md:rounded-l-lg  md:w-[24rem]   shadow-2xl shadow-black`}
      >
        <div className="flex flex-col justify-between w-full h-full overflow-hidden ">
          <div>
            <div className="flex justify-start lg:justify-end">
              <img
                src={require("../assets/hompage/hero section/logo.png")}
                alt=""
                className="h-6 pl-4 pr-2 mb-10 md:mt-20 lg:mb-8 md:pl-0 md:h-8 md:ml-10 lg:h-9 mt-28"
              />
            </div>

            <div className="w-full min-w-80 md:hidden ">
              <Link to="/">
                <div
                  onClick={() => setOpen(false)}
                  className="w-full py-2 pl-6 border-b cursor-pointer hover:text-primary"
                >
                  Home
                </div>
              </Link>
              {/* <div className="w-full py-2 pl-6 border-b cursor-pointer hover:text-primary">
              Learn
            </div> */}
              <Link to="/shop">
                <div
                  onClick={() => setOpen(false)}
                  className="w-full py-2 pl-6 border-b cursor-pointer hover:text-primary"
                >
                  Shop
                </div>
              </Link>
              <div></div>
              {/* <Link to="/product/SKIN-101/black-grape">
                <div
                  onClick={() => setOpen(false)}
                  className="w-full py-2 pl-8 text-sm border-b cursor-pointer text-primary"
                >
                  ● Skin 101 - Black Grape
                </div>
              </Link>
              <Link to="/product/SKIN-101/peach">
                <div
                  onClick={() => setOpen(false)}
                  className="w-full py-2 pl-8 text-sm border-b cursor-pointer text-primary"
                >
                  ● Skin 101 - Peach
                </div>
              </Link> */}
              <Link to="/learn">
                <div
                  onClick={() => setOpen(false)}
                  className="w-full py-2 pl-6 border-b cursor-pointer hover:text-primary"
                >
                  Learn
                </div>
              </Link>
              {/* <div className="w-full py-2 pl-6 border-b cursor-pointer hover:text-primary">
              Join
            </div> */}
              {/* <Link to="/contact">
              <div
                onClick={() => setOpen(false)}
                className="w-full py-2 pl-6 border-b cursor-pointer hover:text-primary"
              >
                Connect
              </div>
            </Link> */}
              {/* <div className="w-full py-2 pl-6 border-b cursor-pointer hover:text-primary">
              
            </div> */}
            </div>
          </div>

          <div className="pl-6 pr-2 mt-10 mb-8 md:mt-4 ">
            <p className="pb-4 md:hidden">Social Media</p>

            <a
              href="https://www.instagram.com/nuform.in/"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoInstagram className="text-2xl " />
            </a>
            {/* <IoLogoInstagram className="text-2xl" /> */}
          </div>
          <div className="absolute flex gap-2 top-10 right-10 md:top-4 md:right-4 ">
            <div
              className="block p-1 font-bold rounded-full cursor-pointer select-none w-min"
              onClick={() => setOpen(false)}
            >
              <div className="h-10 lg:h-12 lg:w-12 flex justify-center items-center w-10 rounded-full bg-[#7f8dcfd9] hover:bg-primary hover:scale-105 duration-200">
                <IoClose className="text-2xl lg:text-4xl " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalSidePanel;
