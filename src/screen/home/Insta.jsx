import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { IoLogoInstagram } from "react-icons/io5";
import { useCart } from "../../components/CartProvider";

const Insta = () => {
  const { instaData } = useCart();
  return (
    <div className="container pt-20 mx-auto xl:max-w-7xl">
      {/* <p className="mb-6 text-center text-PRIMARY ">.. Nuform Plans ..</p> */}
      {/* <h3 className="mb-10 text-2xl md:text-3xl text-primary">Social Media</h3> */}

      {instaData.length>0 ? (
        <div className="pt-6 text-center ">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 4,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 4,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 4,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 4,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="overflow-visible rounded-lg select-none mySwiper"
          >
            {instaData.slice(0, 30).map((x, i) => {
              // return <SwiperSlide key={i} className="h-full ">
              //   <div className="flex flex-col items-center justify-center">
              //     <a
              //       href={x.permalink}
              //       target="_blank"
              //       rel="noreferrer"
              //     >
              //       {(x.media_type === "IMAGE") ?
              //         <img
              //           src={x.media_url}
              //           alt=""
              //           className="w-full h-full duration-500 rounded-lg hover:drop-shadow-lg"
              //         />
              //         :
              //         <video
              //           src={x.media_url}
              //           alt=""
              //           className="w-full h-full duration-500 rounded-lg hover:drop-shadow-lg"
              //         />

              //       }
              //     </a>
              //   </div>
              // </SwiperSlide>

              if (x.media_type === "IMAGE")
                return (
                  <SwiperSlide key={i} className="h-full ">
                    <div className="flex flex-col items-center justify-center ">
                      <a
                        href={x.permalink}
                        target="_blank"
                        rel="noreferrer"
                        className="relative w-full h-full overflow-hidden rounded-lg group"
                      >
                        <img
                          src={x.media_url}
                          alt={x.caption || ""}
                          className="w-full h-full duration-500 rounded-lg hover:drop-shadow-lg"
                        />
                        <div className="absolute top-0 left-0 items-center justify-center hidden w-full h-full p-5 text-white duration-200 bg-black bg-opacity-60 group-hover:flex">
                          {/* <p>
                      {x.caption} 
                    </p> */}
                          <div className="flex items-center justify-center duration-300 rounded-full cursor-pointer w-14 h-14 bg-primary">
                            <IoLogoInstagram className="text-3xl text-white" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                );
              else if (x.media_type === "CAROUSEL_ALBUM")
                return (
                  <SwiperSlide key={i} className="h-full ">
                    <div className="flex flex-col items-center justify-center ">
                      <a
                        href={x.permalink}
                        target="_blank"
                        rel="noreferrer"
                        className="relative w-full h-full overflow-hidden rounded-lg group"
                      >
                        <img
                          src={x.media_url}
                          alt={x.caption || ""}
                          className="w-full h-full duration-500 rounded-lg hover:drop-shadow-lg"
                        />
                        <div className="absolute top-0 left-0 items-center justify-center hidden w-full h-full p-5 text-white duration-200 bg-black bg-opacity-60 group-hover:flex">
                          {/* <p>
                      {x.caption} 
                    </p> */}
                          <div className="flex items-center justify-center duration-300 rounded-full cursor-pointer w-14 h-14 bg-primary">
                            <IoLogoInstagram className="text-3xl text-white" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                );
              // else if (x.media_type === "VIDEO")
              //   return (
              //     <SwiperSlide key={i} className="h-full ">
              //       <div className="flex flex-col items-center justify-center ">
              //         <a
              //           href={x.permalink}
              //           target="_blank"
              //           rel="noreferrer"
              //           className="relative w-full overflow-hidden rounded-lg group max-h-[425px]"
              //         >
              //           <video
              //             src={x.media_url}
              //             alt={x.caption || ""}
              //             autoPlay
              //             loop
              //             muted
              //             className="w-full rounded-lg uration-500 l hover:drop-shadow-lg"
              //           />
              //           <div className="absolute top-0 left-0 items-center justify-center hidden w-full h-full p-5 text-white duration-200 bg-black bg-opacity-60 group-hover:flex">
              //             {/* <p>
              //         {x.caption}
              //       </p> */}
              //             <div className="flex items-center justify-center duration-300 rounded-full cursor-pointer w-14 h-14 bg-primary">
              //               <IoLogoInstagram className="text-3xl text-white" />
              //             </div>
              //           </div>
              //         </a>
              //       </div>
              //     </SwiperSlide>
              //   );
              else return null;
            })}

            <div className="h-14"></div>
          </Swiper>
        </div>
      ) : (
        <div className="pt-6 text-center ">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 2,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 2,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 2,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 2,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="overflow-visible rounded-lg select-none mySwiper"
          >
            <SwiperSlide className="h-full ">
              <div className="flex flex-col items-center justify-center ">
                <a
                  href="https://www.instagram.com/nuform.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require("../../assets/hompage/main area/insta/insta1.jpg")}
                    alt=""
                    className="w-full h-full duration-500 rounded-lg hover:drop-shadow-lg"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide className="h-full ">
              <div className="flex flex-col items-center justify-center">
                <a
                  href="https://www.instagram.com/nuform.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require("../../assets/hompage/main area/insta/insta2.jpg")}
                    alt=""
                    className="w-full h-full duration-500 rounded-lg hover:drop-shadow-lg"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full ">
              <div className="flex flex-col items-center justify-center">
                <a
                  href="https://www.instagram.com/nuform.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require("../../assets/hompage/main area/insta/insta3.jpg")}
                    alt=""
                    className="w-full h-full duration-500 rounded-lg hover:drop-shadow-lg"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full ">
              <div className="flex flex-col items-center justify-center">
                <a
                  href="https://www.instagram.com/nuform.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require("../../assets/hompage/main area/insta/insta4.jpg")}
                    alt=""
                    className="w-full h-full duration-500 rounded-lg hover:drop-shadow-lg"
                  />
                </a>
              </div>
            </SwiperSlide>
           
            <SwiperSlide className="h-full ">
              <div className="flex flex-col items-center justify-center">
                <a
                  href="https://www.instagram.com/nuform.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require("../../assets/hompage/main area/insta/insta6.jpg")}
                    alt=""
                    className="w-full h-full duration-500 rounded-lg hover:drop-shadow-lg"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full ">
              <div className="flex flex-col items-center justify-center">
                <a
                  href="https://www.instagram.com/nuform.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require("../../assets/hompage/main area/insta/insta7.jpg")}
                    alt=""
                    className="w-full h-full duration-500 rounded-lg hover:drop-shadow-lg"
                  />
                </a>
              </div>
            </SwiperSlide>
           
          
            <div className="h-14"></div>
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Insta;
