import React, { useEffect } from "react";
import mainSection1 from "../../assets/hompage/main area/illustrations/mainSection1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const MiddleSection = () => {
  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);

  const data1 = [
    {
      img: require("../../assets/hompage/main area/icons/icon-5.png"),
      title: "MULTI FRUITS FLAVOUR",
      desc: "A thing added to something else in order to complete or enhance it.",
    },
    {
      img: require("../../assets/hompage/main area/icons/icon-6.png"),
      title: "FLOWER FORMULA",
      desc: "A thing added to something else in order to complete or enhance it.",
    },
    {
      img: require("../../assets/hompage/main area/icons/icon-7.png"),
      title: "FISHBONE DIAGRAM",
      desc: "A thing added to something else in order to complete or enhance it.",
    },
    {
      img: require("../../assets/hompage/main area/icons/icon-8.png"),
      title: "100% FAT BLASTING",
      desc: "A thing added to something else in order to complete or enhance it.",
    },
  ];
  return (
    <div className="bg-primary ">
      <div className="container flex flex-col-reverse px-1 mx-auto text-white lg:flex-row md:items-center">
        <div className="grid gap-4 md:grid-cols-2 lg:gap-10 lg:w-1/2 pb-28 lg:pt-20">
          {data1.map((x, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center sm:items-start"
              >
                <img
                  src={x.img}
                  alt={x.title}
                  className="mb-4 select-none h-14"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                />
                <h4
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="500"
                  className="mb-2 text-xl"
                >
                  {x.title}
                </h4>
                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="500"
                  className="text-center md:text-left"
                >
                  {x.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="lg:w-1/2">
          <img src={mainSection1} alt="Deatils" className="scale-90" />
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
