import React from "react";
import bgImage from "../../assets/others/background/tg_banner_bg.jpg";
import person from "../../assets/others/people/person-1.png";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div
      className="h-screen lg:h-[85vh] "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full text-white bg-black bg-opacity-80">
        <div className="container flex items-center justify-center h-full mx-auto">
          <div className="text-center lg:w-1/2 ">
            <div className="flex justify-center gap-2 mb-10 text-2xl  text-primary">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
            </div>
            <p className="pb-10 text-xl lg:text-2xl">
              “NuForm is my go-to for a little daily wellness magic! This health
              care product has become my secret weapon for staying on top of my
              game. From increased energy to better immunity, NuForm delivers
              the goods. I can't recommend it enough – it's the little boost
              that makes a big difference in my day!
            </p>
            <img
              src={person}
              alt=""
              className="h-24 mx-auto mb-4 rounded-full"
            />
            <div className="text-xl font-semibold  lg:text-2xl ">
              JANETA COOPER
            </div>
          </div>
        </div>
      </div>
      {/* Your content goes here */}
    </div>
  );
};

export default Testimonials;
