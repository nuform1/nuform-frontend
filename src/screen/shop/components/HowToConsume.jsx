import React from "react";

const HowToConsume = () => {
  return (
    <div className="container px-2 py-6 mx-auto bg-gray-100 xl:max-w-7xl rounded-xl md:px-6 lg:px-10 md:py-8 lg:py-10">
      <h3 className="mb-4 text-xl font-light select-none md:text-2xl text-primary lg:mb-6 lg:text-left">
        How to consume
      </h3>

      <div className="h-full ">
        <div className="p-5 bg-white rounded-xl">
          <div className="flex py-2 md:text-lg">
            <p className="">
              <span className="pr-3 text-primary">Way 01: </span>
            </p>
            <div>
              <p>Tear, Gulp, Go. No fuss.</p>
              <img
                src={require("../../../assets/products/tear&gulp.png")}
                alt=""
                className="w-[5rem] mt-4"
              />
            </div>
          </div>
          <div className="flex py-2 mt-2 md:text-lg">
            <p className="">
              <span className="pr-3 text-primary whitespace-nowrap">
                Way 02:{" "}
              </span>
            </p>
            <div>
              <p>
                Sip it slowly in a glass of water and turn the experience into a
                well-deserved break.
              </p>
              <div className="w-[5rem] flex gap-10 items-end mt-4 ">
                <img
                  src={require("../../../assets/products/glassblue.png")}
                  alt=""
                  className="w-[3rem] "
                />
                <img
                  src={require("../../../assets/products/drink.png")}
                  alt=""
                  className="w-[6rem] h-min"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="mt-6 mb-4 text-xl font-light select-none md:text-2xl text-primary lg:mt-10">
            When to consume
          </h3>
          <p>The powder format can be consumed anytime during the day.</p>
        </div>
      </div>
    </div>
  );
};

export default HowToConsume;
