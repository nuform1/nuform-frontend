import img1 from "../../assets/hompage/main area/icons/icon-2.png";
import img2 from "../../assets/hompage/main area/icons/icon-3.png";
import img3 from "../../assets/hompage/main area/icons/icon-1.png";
// import img4 from "../../assets/hompage/main area/icons/icon-4.png";
import { GiFruitBowl } from "react-icons/gi";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { GoShieldCheck } from "react-icons/go";

const Cards = () => {
  return (
    <div className="pt-12 lg:pt-16">
      <div className="container mx-auto xl:max-w-7xl">
        <h3 className="text-2xl font-light select-none md:text-center md:text-3xl text-primary ">
          Why should you make NuForm a habit?
        </h3>
        <p className="py-2 md:pt-4 md:text-center md:pb-6">
          Your expert-backed wellness guide in a world of information overload,
          offering tailored solutions for modern lifestyles.
        </p>

        <div className="grid gap-2 mt-4 mb-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 ">
          <p className="relative pb-2 md:pl-2 md:pb-6 md:text-center">
            Our dedication transcends mere care; it's about empowering you with
            balanced ingredients and personalized support, respecting your
            unique journey.
          </p>
          {/* <div className="absolute w-0.5   -ml-3.5  top-4 ">
                <div className="w-2 h-2 -mt-1 -ml-[3px] rounded-full bg-primary"></div>
              </div> */}

          <p className="relative pb-2 md:pl-2 md:pb-6 md:text-center">
            We blend cultivated and plant-based ingredients for maximum impact.
            The outcome? A 24/7 regimen tirelessly supporting your journey to
            new heights.
          </p>
          {/* <div className="absolute w-0.5   -ml-3.5  top-4 ">
                <div className="w-2 h-2 -mt-1 -ml-[3px] rounded-full bg-primary"></div>
              </div> */}

          <p className="relative pb-2 md:pl-2 md:pb-6 md:text-center">
            The highlight? You can take them anywhere, akin to your essential
            keys. It's not just about the ingredients; it's a complete package
            designed for your convenience.
          </p>
          {/* <div className="absolute w-0.5   -ml-3.5  top-4 ">
                <div className="w-2 h-2 -mt-1 -ml-[3px] rounded-full bg-primary"></div>
              </div> */}
        </div>
      </div>

      <div className="container pt-6 mx-auto text-center md:mb-10 xl:max-w-7xl">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="relative h-full overflow-visible select-none mySwiper"
        >
          <SwiperSlide className="h-full overflow-hidden ">
            <div className="flex flex-col items-center justify-center ">
              <img src={img3} alt="" className="h-14 drop-shadow-xl" />
              <p className="mt-4 mb-6 text-primary">
                Verified Clean <br />
                Ingredients
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="h-full overflow-hidden ">
            <div className="flex flex-col items-center justify-center">
              <img src={img1} alt="" className="h-14 drop-shadow-xl" />
              <p className="mt-4 mb-6 text-primary">
                Clinically Tested <br />
                Actives
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full overflow-hidden ">
            <div className="flex flex-col items-center justify-center">
              <img src={img2} alt="" className="h-14 drop-shadow-xl" />
              <p className="mt-4 mb-6 text-primary">
                Formulated by <br />
                RD Nutritionists
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full overflow-hidden ">
            {" "}
            <div className="flex flex-col items-center justify-center">
              <GoShieldCheck className="my-2 text-4xl text-primary" />
              <p className="mt-4 mb-6 text-primary">
                {/* Triple Tested & 3rd
                <br />
                Party Validated for <br />
                Purity & Quality */}
                Lab Tested
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full overflow-hidden ">
            {" "}
            <div className="flex flex-col items-center justify-center">
              <GiFruitBowl className="text-5xl text-primary" />
              <p className="mt-4 mb-6 text-primary">
                No Artificial Colours, <br />
                Flavors & Preservatives
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <div className="flex flex-col gap-10 pt-14 gap-y-10 lg:flex-row lg:pt-20"> */}
      {/* <div className="lg:w-1/2">
          {/* <img
          src={require("../../assets/photos/")}
            alt=""
            
            className="w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] lg:w-[30rem] lg:h-[30rem]  mx-auto rounded-xl blur-[1px] "
          /> 
          <video className="w-[80%] rounded-xl" autoPlay loop muted>
            <source
              src={require("../../assets/others/nuform instagram/video-2.mp4")}
              type="video/mp4"
              className=""
            />
          </video>
        </div> */}
      <div className="bg-blue-50/50">
        {" "}
        <div className="container px-2 pt-10 mx-auto pb-7 xl:max-w-7xl">
          {/* <h3 className="text-2xl font-light select-none md:text-3xl text-primary ">
            Nectar of Radiance: Sip Your Way to Glowing Beauty!
          </h3> */}
          <ul className="grid mt-4 ml-4 ">
            <li className="relative pb-3">
              <h5 className="pb-2 pl-2 text-xl font-medium text-primary">
                Clinically proven
              </h5>

              <p className="pb-6 pl-2">
                Our products are not just based on trends or fads; they are
                backed by rigorous clinical research and scientific validation
              </p>
              <div className="absolute w-0.5 h-full bg-primary bg-opacity-20 -ml-3.5  top-4 ">
                <div className="w-2 h-2 -mt-1 -ml-[3px] rounded-full bg-primary"></div>
              </div>
            </li>
            <li className="relative pb-3">
              <h5 className="pb-2 pl-2 text-xl font-medium text-primary">
                Recommended by experts
              </h5>

              <p className="pb-6 pl-2">
                Our products bear the stamp of approval from health
                professionals who truly understand the science of well-being.
              </p>
              <div className="absolute w-0.5 h-full bg-primary bg-opacity-20 -ml-3.5  top-4 flex flex-col justify-between">
                <div className="w-2 h-2 -mt-1 -ml-[3px] rounded-full bg-primary"></div>
                <div className="w-2 h-2 -mt-1 -ml-[3px] rounded-full bg-primary"></div>
              </div>
            </li>
            <li className="relative pb-3">
              <h5 className="pb-2 pl-2 text-xl font-medium text-primary">
                Tailored to suit the Indian lifestyle
              </h5>

              <p className="pb-6 pl-2">
                We take into account the diverse dietary habits, cultural
                preferences, and environmental factors that define the Indian
                lifestyle. The cherry on the cake is the taste, we do not make
                anything we wouldn’t savour ourselves.
              </p>
              {/* <div className="absolute w-0.5 h-full bg-primary  -ml-3.5  top-4"></div> */}
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="flex flex-wrap justify-center gap-4 p-1 mt-8 md:gap-10">
        {cardData.map((card, index) => (
          <Card2 key={index} {...card} />
        ))}
      </div> */}
    </div>
  );
};

export default Cards;
