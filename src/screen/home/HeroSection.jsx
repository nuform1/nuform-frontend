import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import banner1 from "../../assets/hompage/hero section/Skin101_Black_Grape_Home_Banner.webp";
import banner2 from "../../assets/hompage/hero section/Skin101_Peach_Home_Banner.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";

const HeroSection = () => {
  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        centeredSlides={true}
        // navigation={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
        // breakpoints={{
        // 640: {
        //   slidesPerView: 1,
        //   spaceBetween: 20,
        // },
        // 768: {
        //   slidesPerView: 1,
        // },
        // 1024: {
        //   slidesPerView: 1.2,
        //   // spaceBetween: 40,
        // },
        // 1280: {
        //   slidesPerView: 1.2,
        //   // spaceBetween: 40,
        // },
        // }}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full overflow-visible select-none customerSwiper "
        // style={backgroundStyle}
      >
        <SwiperSlide className="  h-[80vh] md:h-[65vh] bg-primary">
          <div className=" h-[80vh] md:h-[65vh] flex justify-center items-center ">
            <div className="flex items-center gap-2 text-2xl text-center text-white sm:text-3xl md:gap-4 md:text-4xl lg:text-5xl">
              Make{" "}
              <div className="font-semibold ">
                <Typewriter
                  options={{
                    strings: [
                      "SIMPLE",
                      // "KILLING IT",
                      "SELF-CARE",
                      "HEALTHY",
                      // "HAVING FUN",
                      // "MOVING",
                      "NUFORM",
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: "",
                    changeDelay: 100, // Increase changeDelay for slower typing
                    changeDeleteSpeed: 150, // Increase changeDeleteSpeed for slower deletion
                    pauseFor: 1000,
                  }}
                />
              </div>
              a habit.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          {/* <Link to="/product/SKIN-101/black-grape" className=""> */}
          <div
            className="h-[80vh] md:h-[65vh] bg-cover"
            style={{ backgroundImage: `url(${banner1})` }}
          >
            <div className="container flex flex-col justify-end h-full px-2 pb-10 mx-auto text-white xl:max-w-7xl ">
              <p className="pb-3 text-5xl italic font-semibold lg:text-6xl backdrop-blur-sm w-min whitespace-nowrap">
                SKIN 101
              </p>
              <p className="pb-4 text-3xl italic underline lg:text-4xl underline-offset-4 backdrop-blur-sm w-min whitespace-nowrap">
                Black Grape
              </p>

              <Link to="/product/SKIN-101/black-grape" className="">
                <div className="flex items-center gap-2 px-4 py-2 border w-min whitespace-nowrap group bg-primary border-primary">
                  View Product{" "}
                  <IoIosArrowDropright className="text-xl duration-200 lg:text-2xl group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
          {/* </Link> */}
        </SwiperSlide>
        <SwiperSlide className="relative h-full">
          {/* <div className="flex flex-col items-center justify-center w-full h-full text-4xl pt-28 "> */}
          {/* <Link to="/product/SKIN-101/peach" className=""> */}
          <div
            className="h-[80vh] md:h-[65vh] bg-cover"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <div className="container flex flex-col justify-end h-full px-2 pb-10 mx-auto text-white xl:max-w-7xl ">
              <p className="pb-3 text-5xl italic font-semibold lg:text-6xl backdrop-blur-sm w-min whitespace-nowrap">
                SKIN 101
              </p>
              <p className="pb-4 text-3xl italic underline lg:text-4xl underline-offset-4 backdrop-blur-sm w-min whitespace-nowrap">
                Peach
              </p>

              <Link to="/product/SKIN-101/peach">
                <div className="flex items-center gap-2 px-4 py-2 border w-min whitespace-nowrap group bg-primary border-primary">
                  View Product{" "}
                  <IoIosArrowDropright className="text-xl duration-200 lg:text-2xl group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
          {/* </Link> */}
          {/* </div> */}

          {/* <img
            src={require("../../assets/hompage/hero section/Header_mobile-04.jpg")}
            alt="143 GLO"
            
            className="w-full md:hidden h-[90vh]"
          />
          <img
            src={require("../../assets/hompage/hero section/Header 1-02.jpg")}
            alt="143 GLO"
            
            className="h-[50vh] w-full hidden md:block"
          /> */}
        </SwiperSlide>
        <div className="absolute z-10 gap-4 -mt-5 duration-500 delay-300 -translate-y-1/2 top-1/2 ">
          <button
            aria-label="Previous"
            type="button"
            className="flex items-center justify-center w-10 h-10 ml-2 text-white border rounded-full opacity-50 cursor-pointer md:border-dashed md:border-2 xl:w-12 xl:h-12 md:hover:bg-primary group md:opacity-100 hover:opacity-100"
            // onClick={() => setIsTrue(!isTrue)}
            ref={navigationPrevRef}
          >
            <BsArrowLeft className="text-2xl text-white duration-500 translate-x-4 group-hover:translate-x-0 xl:text-3xl" />
          </button>
        </div>
        <div className="absolute right-0 z-10 gap-4 -mt-5 duration-500 delay-300 -translate-y-1/2 top-1/2">
          <button
            aria-label="Next"
            type="button"
            className="flex items-center justify-center w-10 h-10 mr-2 text-white border rounded-full opacity-50 cursor-pointer md:border-dashed md:border-2 xl:w-12 xl:h-12 md:hover:bg-primary group md:opacity-100 hover:opacity-100"
            ref={navigationNextRef}
          >
            <BsArrowLeft className="text-2xl text-white duration-500 rotate-180 -translate-x-4 group-hover:translate-x-0 xl:text-3xl" />
          </button>
        </div>

        <div className="h-10 bg-white"></div>
      </Swiper>
    </div>
  );
};

export default HeroSection;
