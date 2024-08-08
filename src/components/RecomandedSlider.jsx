import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useCart } from "./CartProvider";
import { priceData } from "../constant";
import toast from "react-hot-toast";
// import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const RecomandedSlider = () => {
  const { addToCart, cartItems } = useCart();

  const notifySuccess = () => toast.success("Successfully added to cart !");

  const handleAddToCart = (itemId, price, weight) => {
    addToCart(itemId, 1, price, weight); // Add item to cart
    // console.log(cartItems)

    notifySuccess();
    // setTotal(1); // Reset total after adding to cart
  };

  //   const handleChange = (event) => {
  //     //    setFlavor(event.target.value);
  //     setTotal({ ...total, grapsPack: event.target.value });
  //   };
  return (
    <div>
      <div className="text-center ">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          //   loop={true}
          grabCursor={true}
          //   navigation={true}
          modules={[Pagination]}
          pagination={{
            dynamicBullets: true,
          }}
          className="relative h-full overflow-visible select-none mySwiper"
        >
          {!cartItems["Skin101GrapsPack1"] &&
            !cartItems["Skin101GrapsPack2"] && (
              <SwiperSlide className="h-full overflow-hidden ">
                <div className={` pb-2 pt-2  group }`}>
                  <div className="flex gap-2 p-1 xl:gap-4">
                    <div className="h-16 overflow-hidden rounded-lg min-w-20">
                      <img
                        src={priceData.Skin101GrapsPack1.image}
                        alt=""
                        className="h-16 duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex justify-between w-full gap-2 text-left">
                      <div className="whitespace-nowrap">
                        <p className="text-xl text-primary ">
                          {priceData.Skin101GrapsPack1.title}
                        </p>
                        <p className="pb-0.5 text-sm italic">
                          {priceData.Skin101GrapsPack1.flavor}
                        </p>
                        {/* <p className="text-sm text-gray-600">
                      {priceData.Skin101GrapsPack1.days} days pack
                    </p> */}
                        {/* <div className="flex items-center gap-1">
                      <div
                        className={` px-1.5 py-1 text-xs duration-200 border rounded-full hover:text-white hover:bg-primary hover:scale-95 w-min cursor-pointer ${
                          total.grapsPack === 1
                            ? "bg-primary text-white"
                            : "text-gray-400"
                        }`}
                        onClick={() => setTotal({ ...total, grapsPack: 1 })}
                      >
                        {priceData.Skin101GrapsPack1.days}
                      </div>

                      <p className="text-xs text-gray-600"> days pack </p>
                      
                    </div> */}
                        <p className="text-xs text-gray-600 ">
                          {" "}
                          {priceData.Skin101GrapsPack1.days}
                        </p>
                      </div>
                      <div className="flex flex-col items-end justify-between ">
                        <div>
                          {" "}
                          <span className="text-gray-600 "> ₹ </span>
                          <span className="font-semibold text-gray-600 ">
                            {priceData.Skin101GrapsPack1.price}
                            .00
                          </span>
                        </div>
                        <button
                          aria-label="Add to cart"
                          type="button"
                          onClick={() =>
                            handleAddToCart(
                              `Skin101GrapsPack1`,
                              priceData.Skin101GrapsPack1.price,
                              priceData.Skin101GrapsPack1.weight
                            )
                          }
                          className="w-full px-4 py-2 text-sm duration-200 border rounded-full hover:text-white hover:bg-primary hover:scale-95 lg:px-6"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )}
          {!cartItems["Skin101GrapsPack2"] &&
            !cartItems["Skin101GrapsPack1"] && (
              <SwiperSlide className="h-full overflow-hidden ">
                <div className={` pb-2 pt-2  group }`}>
                  <div className="flex gap-2 p-1 xl:gap-4">
                    <div className="h-16 overflow-hidden rounded-lg min-w-20">
                      <img
                        src={priceData.Skin101GrapsPack2.image}
                        alt=""
                        className="h-16 duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex justify-between w-full gap-2 text-left">
                      <div className="whitespace-nowrap">
                        <p className="text-xl text-primary ">
                          {priceData.Skin101GrapsPack2.title}
                        </p>
                        <p className="pb-0.5 text-sm italic">
                          {priceData.Skin101GrapsPack2.flavor}
                        </p>

                        <p className="text-xs text-gray-600 ">
                          {" "}
                          {priceData.Skin101GrapsPack2.days}
                        </p>
                      </div>
                      <div className="flex flex-col items-end justify-between ">
                        <div>
                          {" "}
                          <span className="text-gray-600 "> ₹ </span>
                          <span className="font-semibold text-gray-600 ">
                            {priceData.Skin101GrapsPack2.price}
                            .00
                          </span>
                        </div>
                        <button
                          aria-label="Add to cart"
                          type="button"
                          onClick={() =>
                            handleAddToCart(
                              `Skin101GrapsPack2`,
                              priceData.Skin101GrapsPack2.price,
                              priceData.Skin101GrapsPack2.weight
                            )
                          }
                          className="w-full px-4 py-2 text-sm duration-200 border rounded-full hover:text-white hover:bg-primary hover:scale-95 lg:px-6"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )}
          {!cartItems["Skin101Peach1"] && !cartItems["Skin101Peach2"] && (
            <SwiperSlide className="h-full overflow-hidden ">
              <div className={` pb-2 pt-2  group }`}>
                <div className="flex gap-2 p-1 xl:gap-4">
                  <div className="h-16 overflow-hidden rounded-lg min-w-20">
                    <img
                      src={priceData.Skin101Peach1.image}
                      alt=""
                      className="h-16 duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-between w-full gap-2 text-left">
                    <div className="whitespace-nowrap">
                      <p className="text-xl text-primary ">
                        {priceData.Skin101Peach1.title}
                      </p>
                      <p className="pb-0.5 text-sm italic">
                        {priceData.Skin101Peach1.flavor}
                      </p>

                      <p className="text-xs text-gray-600 ">
                        {priceData.Skin101Peach1.days}
                      </p>
                    </div>
                    <div className="flex flex-col items-end justify-between ">
                      <div>
                        <span className="text-gray-600 "> ₹ </span>
                        <span className="font-semibold text-gray-600 ">
                          {priceData.Skin101Peach1.price}
                          .00
                        </span>
                      </div>
                      <button
                        aria-label="Add to cart"
                        type="button"
                        onClick={() =>
                          handleAddToCart(
                            `Skin101Peach1`,
                            priceData.Skin101Peach1.price,
                            priceData.Skin101Peach1.weight
                          )
                        }
                        className="w-full px-4 py-2 text-sm duration-200 border rounded-full hover:text-white hover:bg-primary hover:scale-95 lg:px-6"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )}
          {!cartItems["Skin101Peach1"] && !cartItems["Skin101Peach2"] && (
            <SwiperSlide className="h-full overflow-hidden ">
              <div className={` pb-2 pt-2  group }`}>
                <div className="flex gap-2 p-1 xl:gap-4">
                  <div className="h-16 overflow-hidden rounded-lg min-w-20">
                    <img
                      src={priceData.Skin101Peach2.image}
                      alt=""
                      className="h-16 duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-between w-full gap-2 text-left">
                    <div className="whitespace-nowrap">
                      <p className="text-xl text-primary ">
                        {priceData.Skin101Peach2.title}
                      </p>
                      <p className="pb-0.5 text-sm italic">
                        {priceData.Skin101Peach2.flavor}
                      </p>
                      {/* <p className="text-sm text-gray-600">
                      {priceData.Skin101GrapsPack1.days} days pack
                    </p> */}
                      {/* <div className="flex items-center gap-1">
                      <div
                        className={` px-1.5 py-1 text-xs duration-200 border rounded-full hover:text-white hover:bg-primary hover:scale-95 w-min cursor-pointer ${
                          total.grapsPack === 1
                            ? "bg-primary text-white"
                            : "text-gray-400"
                        }`}
                        onClick={() => setTotal({ ...total, grapsPack: 1 })}
                      >
                        {priceData.Skin101GrapsPack1.days}
                      </div>

                      <p className="text-xs text-gray-600"> days pack </p>
                      
                    </div> */}
                      <p className="text-xs text-gray-600 ">
                        {" "}
                        {priceData.Skin101Peach2.days}
                      </p>
                    </div>
                    <div className="flex flex-col items-end justify-between ">
                      <div>
                        {" "}
                        <span className="text-gray-600 "> ₹ </span>
                        <span className="font-semibold text-gray-600 ">
                          {priceData.Skin101Peach2.price}
                          .00
                        </span>
                      </div>
                      <button
                        aria-label="Add to cart"
                        type="button"
                        onClick={() =>
                          handleAddToCart(
                            `Skin101Peach2`,
                            priceData.Skin101Peach2.price,
                            priceData.Skin101Peach2.weight
                          )
                        }
                        className="w-full px-4 py-2 text-sm duration-200 border rounded-full hover:text-white hover:bg-primary hover:scale-95 lg:px-6"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )}
          <div className="h-2"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default RecomandedSlider;
