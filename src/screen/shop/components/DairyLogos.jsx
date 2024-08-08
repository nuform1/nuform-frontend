import React from "react";
import { GiFruitBowl } from "react-icons/gi";

const DairyLogos = () => {
  return (
    <div className="container py-4 mx-auto mt-10 mb-6 select-none xl:max-w-7xl lg:py-6 lg:mt-16">
      <div className="flex justify-between max-w-5xl gap-4 mx-auto text-sm md:gap-4 lg:gap-8 md:text-base">
        <div className="flex flex-col items-center text-center cursor-pointer hover:text-primary">
          {/* <LuDnaOff className="text-2xl text-primary" /> */}
          <img
            src={require("../../../assets/products/gmo_free.webp")}
            alt=""
            className="w-10 h-10"
          />
          <p className="mt-1">Non </p>
          <p className="-mt-1">GMO</p>
        </div>

        <div className="flex flex-col items-center text-center cursor-pointer hover:text-primary">
          <div className="relative overflow-hidden border-2 rounded-full border-primary">
            <GiFruitBowl className="p-1 text-4xl bg-white text-primary" />
            {/* <div className="h-0.5 w-[110%] bg-primary absolute -rotate-45 top-1/2"></div> */}
          </div>
          <p className="mt-1">No Artificial</p>
          <p className="-mt-1">Flavor & Colours</p>
        </div>
        <div className="flex flex-col items-center text-center cursor-pointer hover:text-primary">
          <img
            src={require("../../../assets/products/gluten_free.webp")}
            alt=""
            className="w-10 h-10"
          />

          <p className="mt-1">Gluten</p>
          <p className="-mt-1"> Free</p>
        </div>
        <div className="flex flex-col items-center text-center cursor-pointer hover:text-primary">
          <img
            src={require("../../../assets/products/dairy_free.webp")}
            alt=""
            className="w-10 h-10"
          />
          <p className="mt-1">Dairy</p>

          <p className="-mt-1"> free</p>
        </div>
      </div>
    </div>
  );
};

export default DairyLogos;
