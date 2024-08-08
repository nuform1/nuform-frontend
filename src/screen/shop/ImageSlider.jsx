import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Combine CSS imports
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { BsArrowLeft } from "react-icons/bs";

const ImageSlider = ({ imageSources }) => {
  // Define image sources
  const nutrients = [
    { name: "Energy (Kcal)", value: 7, rda: "0.35" },
    { name: "Protein (g)", value: 0, rda: "0" },
    { name: "Carbohydrate (g)", value: 1.75, rda: "**" }, // Assuming % RDA unavailable from image
    { name: "Sugar Alcohol (g)", value: 1.7, rda: "**" }, // Assuming RDA not established from image
    { name: "Total Fat (g)", value: 0.01, rda: "0.015" },
    { name: "Sodium (mg)", value: 10, rda: "0.500" },
    { name: "Vitamin A", value: "840 mcg", rda: "100.0" },
    { name: "Zinc", value: "6 mg", rda: "45.45" },
    { name: "Vitamin C (Liposomal)", value: "65 mg", rda: "100.0" },
    { name: "Pomegranate Extract", value: "50 mg", rda: "**" },
    { name: "Liquorice Extract", value: "50 mg", rda: "**" },
  ];
  // Generate Swiper slides dynamically
  const swiperSlides = [];
  for (let i = 0; i < imageSources.length; i++) {
    swiperSlides.push(
      <SwiperSlide key={i}>
        <img
          src={imageSources[i]}
          alt={`Slide ${i + 1}`}
          className="mx-auto mb-4 h-[20rem] xl:h-[24rem] brightness-105 saturate-105 contrast-105  hover:brightness-100 hover:saturate-100 hover:contrast-100  transition-all duration-300 ease-in-out"
          // className="mx-auto mb-4 h-[20rem] xl:h-[24rem] brightness-105 saturate-105 contrast-105  hover:brightness-100 hover:saturate-100 hover:contrast-100 transition-all duration-300 ease-in-out"
        />
      </SwiperSlide>
    );
  }

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="relative pb-2">
      <Swiper
        // onBeforeInit={(swiper) => {
        //   swiper.params.navigation.prevEl = navigationPrevRef.current;
        //   swiper.params.navigation.nextEl = navigationNextRef.current;
        // }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={10}
        breakpoints={{
          640: { slidesPerView: 1.4, spaceBetween: 2 },
          768: { slidesPerView: 1.2, spaceBetween: 4 },
          1024: { slidesPerView: 1.5, spaceBetween: 5 },
        }}
        // pagination={{ clickable: true }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {swiperSlides}
        <SwiperSlide className="md:bg-[#F7F5F6] h-full md:pr-0.5 md:pl-2 md:pb-5">
          <h3 className="text-xl font-semibold text-primary">
            Nutritional Information
          </h3>
          <p className="mb-1.5 text-xs md:text-sm">approximate values</p>
          <table className="w-full overflow-hidden ">
            <thead className="text-white bg-primary">
              <tr>
                <th
                  scope="col"
                  className="px-3 py-2 text-sm text-left lg:px-6 md:text-base"
                >
                  Nutrient
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-sm text-left lg:px-6 whitespace-nowrap md:text-base"
                >
                  Per Serve
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-sm text-left lg:px-6 md:text-base"
                >
                  % RDA
                </th>
              </tr>
            </thead>
            <tbody>
              {nutrients.map((nutrient) => (
                <tr key={nutrient.name}>
                  <td className="px-3 py-0.5 text-xs md:text-sm border-b border-gray-200 lg:px-6">
                    {nutrient.name}
                  </td>
                  <td className="px-6 py-0.5 text-xs md:text-sm border-b border-gray-200">
                    {nutrient.value}
                  </td>
                  <td className="px-6 py-0.5 text-xs md:text-sm border-b border-gray-200">
                    {nutrient.rda}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </SwiperSlide>
        <div className="z-20 grid grid-cols-3 mt-2">
          <div className="col-span-2"></div>
          <div className="flex items-center gap-4 ">
            <div
              className="flex items-center justify-center w-10 h-10 ml-2 border rounded-full cursor-pointer xl:w-12 xl:h-12 hover:bg-primary group "
              // onClick={() => setIsTrue(!isTrue)}
              onClick={() => console.log("clicked prev")}
              ref={navigationPrevRef}
            >
              <BsArrowLeft className="text-2xl duration-500 group-hover:text-white text-primary" />
            </div>

            <div
              className="flex items-center justify-center w-10 h-10 mr-2 border rounded-full cursor-pointer xl:w-12 xl:h-12 hover:bg-primary group "
              ref={navigationNextRef}
              // onClick={() => setIsTrue(!isTrue)}
              onClick={() => console.log("clicked next")}
            >
              <BsArrowLeft className="text-2xl duration-500 rotate-180 group-hover:text-white text-primary" />
            </div>
          </div>
        </div>

        {/* <div className="mt-8"></div> */}
      </Swiper>
      <div className="container absolute left-0 z-0 grid grid-cols-3 mx-auto bottom-2">
        <div className="col-span-2 select-none ">
          <Swiper
            slidesPerView={"auto"}
            onBeforeInit={(swiper) => {
              // swiper.params.navigation.prevEl = navigationPrevRef.current;
              // swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            // centeredSlides={true}
            loop={true}
            // spaceBetween={30}
            breakpoints={{
              240: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            // navigation={{
            //   prevEl: navigationPrevRef.current,
            //   nextEl: navigationNextRef.current,
            // }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://cdn.shopify.com/s/files/1/0240/2942/9840/files/FDApng.png?v=1689249001"
                alt=""
                className="mx-auto "
                // className="mx-auto mb-4 h-[20rem] sticky top-36 "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.shopify.com/s/files/1/0240/2942/9840/files/wbn3_2_Clinically_Studied_Ingredients_-_shutterstock_282878450.png"
                alt=""
                className="mx-auto "
                // className="mx-auto mb-4 h-[20rem] sticky top-36 "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.shopify.com/s/files/1/0240/2942/9840/files/wbn3_3_Non_GMO_-_shutterstock_1641195445.png"
                alt=""
                className="mx-auto "
                // className="mx-auto mb-4 h-[20rem] sticky top-36 "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.shopify.com/s/files/1/0240/2942/9840/files/wbn3_1_GMP.png"
                alt=""
                className="mx-auto "
                // className="mx-auto mb-4 h-[20rem] sticky top-36 "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.shopify.com/s/files/1/0240/2942/9840/files/Fssai.svg?v=1648854798"
                alt=""
                className="h-12 mx-auto "
                // className="mx-auto mb-4 h-[20rem] sticky top-36 "
              />
            </SwiperSlide>
          </Swiper>
        </div>{" "}
      </div>
    </div>
  );
};

export default ImageSlider;
