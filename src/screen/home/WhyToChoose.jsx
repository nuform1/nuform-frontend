import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const WhyToChoose = () => {
  const comp = useRef(null);

  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const t1 = gsap.timeline();
  //     const t2 = gsap.timeline();
  //     t1.from("#b", {
  //       x: -600, // Start from -100
  //       // ease: "elastic(2,0.2)",
  //       duration: 2,
  //       scrollTrigger: {
  //         trigger: comp.current,
  //         start: "top 80%", // Animation starts when 80% of the trigger element is in the viewport
  //         end: "bottom 10%", // Animation ends when 20% of the trigger element is left in the viewport
  //         scrub: true,
  //         // markers: true,
  //         onToggle: (self) => {
  //           if (self.direction === -1) {
  //             // Scrolling up
  //             t1.reverse(); // Reverse the animation
  //           } else if (self.direction === 1) {
  //             // Scrolling down
  //             t1.play(); // Play the animation
  //           }
  //         },
  //       },
  //     });
  //     t2.from("#c", {
  //       x: -400, // Start from -100
  //       // ease: "elastic(2,0.2)",
  //       duration: 2,
  //       scrollTrigger: {
  //         trigger: comp.current,
  //         start: "top 20%", // Animation starts when 80% of the trigger element is in the viewport
  //         end: "bottom 10%", // Animation ends when 20% of the trigger element is left in the viewport
  //         scrub: true,
  //         onToggle: (self) => {
  //           if (self.direction === -1) {
  //             // Scrolling up
  //             t2.reverse(); // Reverse the animation
  //           } else if (self.direction === 1) {
  //             // Scrolling down
  //             t2.play(); // Play the animation
  //           }
  //         },
  //       },
  //     });
  //   }, comp);

  //   return () => ctx.revert(); //unmounting
  // }, []);

  const question = [
    [
      "Tastes like dessert without added sugars or sugar alcohols",
      "No artificial sweeteners, dairy, say or corn fiber",
      "10G of collagen protein from grass-fed cows",
      "Formulated to reduce blood sugar intact",
      " Organic almond Butter, Sunflower Lecithin",
      "No energy crashes. Collagen Protein, Stevia",
      "10G of collagen protein from grass-fed cows",
    ],
    [
      "No harmful ingredients here! We at NuForm proudly exclude anything that doesn't meet our high standards of safety and quality.",
      "Our commitment to your well-being is unwavering. We stay ahead of the game, continuously updating our products with the latest scientific advancements.",
      "Check our labels, and you won't find a trace of artificial colors, preservatives, sweeteners, or flavors. We believe in keeping it real and natural.",
      "No high fructose corn syrup and hydrogenated oils. We're all about wholesome ingredients that support your health.",
      "Talc, magnesium silicate, titanium dioxide—these are not on our ingredient list. We're meticulous about what goes into our products.",
      "EDTA and derivatives? Nowhere near our formulations. Your trust is our priority, and our labels reflect that commitment.",
    ],
  ];
  return (
    <div
      ref={comp}
      className="py-20 overflow-hidden text-white bg-fixed bg-primary"
    >
      <div className="container p-1 mx-auto xl:max-w-7xl ">
        {/* <div className="flex flex-col gap-4 lg:flex-row">
          <div className="z-10 lg:w-1/2 ">
            <h3 className="mb-6 text-2xl md:text-3xl lg:mb-10 ">
              Why we chose this formula
            </h3>
            {question[0].map((x, i) => {
              return (
                <div
                  data-aos="fade-right"
                  data-aos-delay={`${i}00`}
                  data-aos-duration="500"
                  key={i}
                  className="flex gap-4 lg:gap-6 "
                >
                  <div className="">
                    <FaStar className="mt-1.5 text-[10px]" />
                  </div>
                  <p className="mb-4 tracking-wide">{x}</p>
                </div>
              );
            })}
          </div>
          <div className="flex items-end justify-end pb-20 lg:w-1/2">
            <img
              id="b"
              src={require("../../assets/hompage/main area/illustrations/cycle girl.png")}
              alt=""
              className="h-[300px] mt-10"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse gap-4 lg:flex-row">
          <div className="relative my-auto lg:w-1/2">
            <img
              src={require("../../assets/hompage/main area/illustrations/torch light.png")}
              alt=""
              
              className="h-[300px] "
            />
            <div id="c" className="absolute top-0 w-2/3 h-full -right-1/2 bg-primary"></div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="mb-6 text-2xl md:text-3xl lg:mb-10 ">
              Certification
            </h3>
            {question[1].map((x, i) => {
              return (
                <div
                  data-aos="fade-left"
                  data-aos-delay={`${i}00`}
                  data-aos-duration="500"
                  key={i}
                  className="flex gap-4 lg:gap-6"
                >
                  <div className="">
                    <FaStar className="mt-1.5 text-sm " />
                  </div>
                  <p className="mb-4 tracking-wide ">{x}</p>
                </div>
              );
            })}
          </div>
        </div> */}
        <div className="">
          <div className="z-10 mb-10">
            <h3 className="mb-6 text-2xl md:text-3xl lg:mb-10 ">
              Why we chose this formula
            </h3>
            <div className="">
              {question[0].map((x, i) => {
                return (
                  <div
                    data-aos="fade-right"
                    data-aos-delay={`${i}00`}
                    data-aos-duration="500"
                    key={i}
                    className="flex gap-4 lg:gap-6 "
                  >
                    <div className="">
                      <FaStar className="mt-1.5 text-[10px]" />
                    </div>
                    <p className="mb-4 tracking-wide">{x}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <h3 className="mb-6 text-2xl md:text-3xl lg:mb-10 ">
              Certification
            </h3>

            {question[1].map((x, i) => {
              return (
                <div
                  data-aos="fade-left"
                  data-aos-delay={`${i}00`}
                  data-aos-duration="500"
                  key={i}
                  className="flex gap-4 lg:gap-6"
                >
                  <div className="">
                    <FaStar className="mt-1.5 text-[10px] " />
                  </div>
                  <p className="mb-4 tracking-wide ">{x}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyToChoose;
