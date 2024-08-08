import React, { useEffect } from "react";
import product from "../../assets/hompage/main area/products/Product_01.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Ingredient = () => {
  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);

  const data1 = [
    {
      img: require("../../assets/hompage/main area/icons/icon-1.png"),
      title: "Verified clean ingredients",
      desc: "A thing added to something else in order to complete or enhance it.",
    },
    {
      img: require("../../assets/hompage/main area/icons/icon-2.png"),
      title: "clinically tested actiivites",
      desc: "A thing added to something else in order to complete or enhance it.",
    },
    {
      img: require("../../assets/hompage/main area/icons/icon-3.png"),
      title: "triple tested and 3rd party validated for purity and clarity",
      desc: "A thing added to something else in order to complete or enhance it.",
    },
    {
      img: require("../../assets/hompage/main area/icons/icon-4.png"),
      title: "formulated by rd nutritionalist",
      desc: "A thing added to something else in order to complete or enhance it.",
    },
  ];
  return (
    <div className="mb-10 lg:mb-20">
      <div className="container flex flex-col gap-4 px-1 mx-auto lg:flex-row md:items-center xl:max-w-7xl ">
        <div className="lg:w-1/2">
          <p className="mb-6 text-lg text-center lg:text-left">
            ... Increased energy with nuform ...
          </p>
          <h3 className="mb-4 text-2xl text-center md:text-3xl text-primary lg:text-left">
            Ingredients
          </h3>
          <div className="grid gap-4 pb-10 md:grid-cols-2 lg:gap-10 lg:pt-4">
            {data1.map((x, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col items-center md:items-start group"
                >
                  <img
                    src={x.img}
                    alt={x.title}
                    className="mb-4 duration-200 cursor-pointer select-none h-14 group-hover:-translate-y-2 "
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="500"
                  />
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="800"
                    className="flex gap-1 text-center sm:text-left"
                  >
                    <div className="h-5 border-2 rounded mt-1 border-primary hidden sm:block"></div>{" "}
                    <h4 className="mb-2 ml-3 text-lg">{x.title}</h4>
                  </div>
                  {/* <p>{x.desc}</p> */}
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:w-1/2 ">
          <img
            src={product}
            alt="Deatils"
            className=" h-[19rem] lg:h-[22rem]  mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
