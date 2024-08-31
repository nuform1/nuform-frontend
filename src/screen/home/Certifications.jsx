import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

const Certifications = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative py-10 mx-auto my-16 bg-blue-50/80 lg:py-16">
      <Swiper
        loop={true}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
        }}
        speed={5000}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className="relative overflow-visible mySwiper swiper-container-free-mode group"
      >
        <SwiperSlide className="flex items-center h-full overflow-hidden">
          <img
            src={
              require("../../assets/hompage/main area/certifications/Fssai.svg")
                .default
            }
            alt=""
            lazy="loading"
            className={`mx-auto h-14 ${
              isHovered ? "grayscale-0" : "grayscale"
            }`}
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-full my-auto overflow-hidden ">
          <img
            src={require("../../assets/hompage/main area/certifications/FSSC-22000.png")}
            alt=""
            lazy="loading"
            className={`h-6 mx-auto `}
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center h-full overflow-hidden">
          <img
            src={require("../../assets/hompage/main area/certifications/Halal_logo.png")}
            alt=""
            lazy="loading"
            className={`h-16 mx-auto `}
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center h-full overflow-hidden">
          <img
            src={require("../../assets/hompage/main area/certifications/HACCP.png")}
            alt=""
            lazy="loading"
            className={`h-16 mx-auto `}
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center h-full overflow-hidden">
          <img
            src={require("../../assets/hompage/main area/certifications/GMP.webp")}
            alt=""
            lazy="loading"
            className={`h-16 mx-auto `}
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center h-full overflow-hidden">
          <img
            src={require("../../assets/hompage/main area/certifications/nsf-independently-certified-logo.png")}
            alt=""
            lazy="loading"
            className={`h-16 mx-auto `}
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center h-full overflow-hidden">
          <img
            src={require("../../assets/hompage/main area/certifications/FDApng.webp")}
            alt=""
            lazy="loading"
            className={`h-16 mx-auto my-auto `}
          />
        </SwiperSlide>
      </Swiper>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="absolute top-0 left-0 z-20 w-full h-full"
      ></div>
    </div>
  );
};

export default Certifications;
