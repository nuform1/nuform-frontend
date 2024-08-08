import React from "react";
import ModalSidePanel from "../../components/ModalSidePanel";
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";
// import { FaStar } from "react-icons/fa6";
import { LuGrape } from "react-icons/lu";
import { GiPeach } from "react-icons/gi";
import { useCart } from "../../components/CartProvider";
import toast from "react-hot-toast";
import ModalCheckout2 from "../../components/ModalCheckout2";
import { priceData } from "../../constant";
import ModalOpacity from "../../components/ModalOpacity";
import { Helmet } from "react-helmet";

const ShopPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Order Acne Skincare Products and Vitamin Supplements - Nuform
        </title>
        <meta
          name="title"
          content="Order Acne Skincare Products and Vitamin Supplements - Nuform"
        />
        <meta
          name="description"
          content="With natural ingredients and dermatologist-approved formulas, Nuform aims to effectively enhance skin vitality and combat signs of aging. Order today!"
        />
      </Helmet>
      <BestSeller />
      <Footer />
      <ModalSidePanel />
      <ModalCheckout2 />
      <ModalOpacity />
    </>
  );
};

export default ShopPage;

const BestSeller = () => {
  const { addToCart, setOpen2 } = useCart();
  const notifySuccess = () => toast.success("Successfully added to cart !");
  const [total, setTotal] = React.useState({
    grapsPack: 1,
    peachPack: 1,

    allGrapsPack: 1,
    allPeachPack: 1,
  });

  const handleAddToCart = (itemId, price, weight) => {
    addToCart(itemId, 1, price, weight); // Add item to cart
    // console.log(cartItems)
    setOpen2(true);
    notifySuccess();
    // setTotal(1); // Reset total after adding to cart
  };
  return (
    <div>
      <section className="">
        <div className="container px-2 pt-10 pb-20 mx-auto xl:max-w-7xl">
          {/* <p className="mb-6 text-center text-PRIMARY ">.. Nuform Plans ..</p> */}
          <h3 className="mb-10 text-2xl text-center md:text-3xl text-primary md:text-left">
            Our Best Sellers
          </h3>

          <div className="grid items-center gap-10 sm:gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="">
              <div className="mx-auto w-[350px] group cursor-default  lg:w-full text-center  pb-8 rounded-xl  overflow-hidden border">
                <div className="relative ">
                  <Link
                    className="mx-auto mb-6"
                    to="/product/SKIN-101/black-grape"
                  >
                    {/* {total.grapsPack === 1 ? (
                      <img
                        src={require("../../assets/WHITE BGS/GRAPE 1.jpg")}
                        alt=""
                        
                         className="mx-auto mb-6"
                      />
                    ) : (
                      <img
                        src={require("../../assets/WHITE BGS/GRAPE 5.jpg")}
                        alt=""
                        
                         className="mx-auto mb-6"
                      />
                    )} */}
                    <div>
                      <img
                        alt=""
                        src={require("../../assets/WHITE BGS/Skin101_Grape_2.webp")}
                        className={`mx-auto mb-6 group-hover:hidden  ${
                          total.grapsPack === 1 ? "opacity-100" : "opacity-0"
                        } `}
                      />
                      <img
                        src={require("../../assets/WHITE BGS/Skin101_Grape_1.webp")}
                        alt=""
                        className={`mx-auto mb-6 group-hover:block hidden  ${
                          total.grapsPack === 1 ? "opacity-100" : "opacity-0"
                        } `}
                      />

                      <img
                        src={require("../../assets/WHITE BGS/GRAPE PAIR.webp")}
                        alt=""
                        className={`mx-auto mb-6 absolute top-0 left-0 -z-10 h-full w-full  ${
                          total.grapsPack === 2 ? "block" : "hidden"
                        } `}
                      />
                    </div>
                  </Link>
                  {/* <div className="absolute flex gap-2 delay-500 -translate-x-1/2 left-1/2 bottom-2 w-min h-min"> */}
                  <div className="absolute flex gap-2 delay-500 -translate-x-1/2 lg:hidden left-1/2 bottom-2 w-min h-min group-hover:flex">
                    Pack:
                    <div
                      onClick={() => setTotal({ ...total, grapsPack: 1 })}
                      className={`flex items-center justify-center w-6 h-6 text-sm  border border-gray-300 rounded-full cursor-pointer ${
                        total.grapsPack === 1
                          ? "bg-primary text-white border-primary"
                          : "text-gray-400"
                      }`}
                    >
                      1
                    </div>
                    <div
                      onClick={() => setTotal({ ...total, grapsPack: 2 })}
                      className={`flex items-center justify-center w-6 h-6 text-sm  border border-gray-300 rounded-full cursor-pointer ${
                        total.grapsPack === 2
                          ? "bg-primary text-white border-primary"
                          : "text-gray-400"
                      }`}
                    >
                      2
                    </div>
                  </div>
                  <p className="absolute py-1 text-sm text-center text-white uppercase rotate-45 bg-primary top-3 -right-7 w-28 ">
                    <span className="">New</span>
                  </p>
                </div>

                <h2 className="px-4 mb-2 text-2xl font-semibold text-left text-primary lg:px-5">
                  SKIN 101
                </h2>
                <p className="flex items-center gap-2 px-4 mb-2 lg:px-5">
                  <LuGrape />
                  Black Grape Flavor
                </p>

                <div className="flex items-center justify-between px-4 mt-2 lg:px-5">
                  <p className="">
                    {/* You Pay: */}
                    <span className="text-gray-600 "> ₹ </span>
                    <span className="text-lg font-semibold text-gray-600">
                      {total.grapsPack === 1
                        ? priceData.Skin101GrapsPack1.price
                        : priceData.Skin101GrapsPack2.price}
                    </span>
                    <span className="line-through text-[#999999] pl-2">
                      {total.grapsPack === 1 ? 780 : 1560}
                    </span>
                    {/* <span className="text-[#999999] ml-4">27 % off</span> */}
                  </p>
                  <button
                    aria-label="Add to cart"
                    type="button"
                    onClick={() =>
                      handleAddToCart(
                        `Skin101GrapsPack${total.grapsPack}`,
                        total.grapsPack === 1
                          ? priceData.Skin101GrapsPack1.price
                          : priceData.Skin101GrapsPack2.price,
                        total.grapsPack === 1
                          ? priceData.Skin101GrapsPack1.weight
                          : priceData.Skin101GrapsPack2.weight
                      )
                    }
                    className="px-4 py-2 text-sm duration-200 border rounded-full hover:text-white hover:bg-primary hover:scale-95"
                  >
                    Add To Cart
                  </button>
                  {/* <button
                    aria-label="Add to cart"
                    type="button"
                    onClick={handleAddToCart}
                    className=""
                  >
                    Add To Cart
                  </button> */}
                </div>
              </div>
            </div>
            <div className="">
              <div className="mx-auto w-[350px] group cursor-default  lg:w-full text-center  pb-8 rounded-xl  overflow-hidden border">
                <div className="relative ">
                  <Link to="/product/SKIN-101/peach">
                    <div>
                      <img
                        alt=""
                        src={require("../../assets/WHITE BGS/Skin101_Peach_2.webp")}
                        className={`mx-auto mb-6 group-hover:hidden  ${
                          total.peachPack === 1 ? "opacity-100" : "opacity-0"
                        } `}
                      />
                      <img
                        src={require("../../assets/WHITE BGS/Skin101_Peach_1.webp")}
                        alt=""
                        className={`mx-auto mb-6 group-hover:block hidden  ${
                          total.peachPack === 1 ? "opacity-100" : "opacity-0"
                        } `}
                      />

                      <img
                        src={require("../../assets/WHITE BGS/PEACH PAIR.jpg")}
                        alt=""
                        className={`mx-auto mb-6 absolute top-0 left-0 -z-10 h-full w-full  ${
                          total.peachPack === 2 ? "block" : "hidden"
                        } `}
                      />
                    </div>
                  </Link>
                  {/* <div className="absolute flex gap-2 delay-500 -translate-x-1/2 left-1/2 bottom-2 w-min h-min"> */}
                  <div className="absolute flex gap-2 delay-500 -translate-x-1/2 lg:hidden left-1/2 bottom-2 w-min h-min group-hover:flex">
                    Pack:
                    <div
                      onClick={() => setTotal({ ...total, peachPack: 1 })}
                      className={`flex items-center justify-center w-6 h-6 text-sm  border border-gray-300 rounded-full cursor-pointer ${
                        total.peachPack === 1
                          ? "bg-primary text-white border-primary"
                          : "text-gray-400"
                      }`}
                    >
                      1
                    </div>
                    <div
                      onClick={() => setTotal({ ...total, peachPack: 2 })}
                      className={`flex items-center justify-center w-6 h-6 text-sm  border border-gray-300 rounded-full cursor-pointer ${
                        total.peachPack === 2
                          ? "bg-primary text-white border-primary"
                          : "text-gray-400"
                      }`}
                    >
                      2
                    </div>
                  </div>
                  <p className="absolute py-1 text-sm text-center text-white uppercase rotate-45 bg-primary top-3 -right-7 w-28 ">
                    <span className="">New</span>
                  </p>
                </div>

                <h2 className="px-4 mb-2 text-2xl font-semibold text-left text-primary lg:px-5">
                  SKIN 101
                </h2>
                <p className="flex items-center gap-2 px-4 mb-2 lg:px-5">
                  {/* <p className="flex items-center justify-center gap-2 mb-2 text-center "> */}
                  <GiPeach className="text-[#FFE5B4]" />
                  Peach Flavor
                  {/* </p> */}
                </p>

                <div className="flex items-center justify-between px-4 mt-2 lg:px-5">
                  <p className="">
                    {/* You Pay: */}
                    <span className="text-gray-600 "> ₹ </span>
                    <span className="text-lg font-semibold text-gray-600">
                      {total.peachPack === 1
                        ? priceData.Skin101Peach1.price
                        : priceData.Skin101Peach2.price}
                    </span>
                    <span className="line-through text-[#999999] pl-2">
                      {total.peachPack === 1
                        ? priceData.Skin101Peach1.ogPrice
                        : priceData.Skin101Peach2.ogPrice}
                    </span>
                    {/* <span className="text-[#999999] ml-4">27 % off</span> */}
                  </p>
                  <button
                    aria-label="Add to cart"
                    type="button"
                    onClick={() =>
                      handleAddToCart(
                        `Skin101Peach${total.peachPack}`,
                        total.peachPack === 1
                          ? priceData.Skin101Peach1.price
                          : priceData.Skin101Peach2.price,
                        total.peachPack === 1
                          ? priceData.Skin101Peach1.weight
                          : priceData.Skin101Peach2.weight
                      )
                    }
                    className="px-4 py-2 text-sm duration-200 border rounded-full hover:text-white hover:bg-primary hover:scale-95"
                  >
                    Add To Cart
                  </button>
                  {/* <button
                    aria-label="Add to cart"
                    type="button"
                    onClick={handleAddToCart}
                    className=""
                  >
                    Add To Cart
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mt-10 mb-10 lg:mt-16">
            <hr />
          </div> */}

          <h3 className="my-10 text-2xl text-center md:text-3xl text-primary md:text-left">
            All Products
          </h3>
          <div className="grid items-center gap-10 sm:gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="">
              <div className="mx-auto w-[350px] group cursor-default  lg:w-full text-center  pb-8 rounded-xl  overflow-hidden border">
                <div className="relative ">
                  <Link
                    className="mx-auto mb-6"
                    to="/product/SKIN-101/black-grape"
                  >
                    <div>
                      <img
                        alt=""
                        src={require("../../assets/WHITE BGS/Skin101_Grape_2.webp")}
                        className={`mx-auto mb-6 group-hover:hidden  ${
                          total.allGrapsPack === 1 ? "opacity-100" : "opacity-0"
                        } `}
                      />
                      <img
                        src={require("../../assets/WHITE BGS/Skin101_Grape_1.webp")}
                        alt=""
                        className={`mx-auto mb-6 group-hover:block hidden  ${
                          total.allGrapsPack === 1 ? "opacity-100" : "opacity-0"
                        } `}
                      />

                      <img
                        src={require("../../assets/WHITE BGS/GRAPE PAIR.webp")}
                        alt=""
                        className={`mx-auto mb-6 absolute top-0 left-0 -z-10 h-full w-full  ${
                          total.allGrapsPack === 2 ? "block" : "hidden"
                        } `}
                      />
                    </div>
                  </Link>
                  {/* <div className="absolute flex gap-2 delay-500 -translate-x-1/2 left-1/2 bottom-2 w-min h-min"> */}
                  <div className="absolute flex gap-2 delay-500 -translate-x-1/2 lg:hidden left-1/2 bottom-2 w-min h-min group-hover:flex">
                    Pack:
                    <div
                      onClick={() => setTotal({ ...total, allGrapsPack: 1 })}
                      className={`flex items-center justify-center w-6 h-6 text-sm  border border-gray-300 rounded-full cursor-pointer ${
                        total.allGrapsPack === 1
                          ? "bg-primary text-white border-primary"
                          : "text-gray-400"
                      }`}
                    >
                      1
                    </div>
                    <div
                      onClick={() => setTotal({ ...total, allGrapsPack: 2 })}
                      className={`flex items-center justify-center w-6 h-6 text-sm  border border-gray-300 rounded-full cursor-pointer ${
                        total.allGrapsPack === 2
                          ? "bg-primary text-white border-primary"
                          : "text-gray-400"
                      }`}
                    >
                      2
                    </div>
                  </div>
                  <p className="absolute py-1 text-sm text-center text-white uppercase rotate-45 bg-primary top-3 -right-7 w-28 ">
                    <span className="">New</span>
                  </p>
                </div>

                <h2 className="px-4 mb-2 text-2xl font-semibold text-left text-primary lg:px-5">
                  SKIN 101
                </h2>
                <p className="flex items-center gap-2 px-4 mb-2 lg:px-5">
                  <LuGrape />
                  Black Grape Flavor
                </p>

                <div className="flex items-center justify-between px-4 mt-2 lg:px-5">
                  <p className="">
                    {/* You Pay: */}
                    <span className="text-gray-600 "> ₹ </span>
                    <span className="text-lg font-semibold text-gray-600">
                      {total.allGrapsPack === 1
                        ? priceData.Skin101GrapsPack1.price
                        : priceData.Skin101GrapsPack2.price}
                    </span>
                    <span className="line-through text-[#999999] pl-2">
                      {total.allGrapsPack === 1 ? 780 : 1560}
                    </span>
                    {/* <span className="text-[#999999] ml-4">27 % off</span> */}
                  </p>
                  <button
                    aria-label="Add to cart"
                    type="button"
                    onClick={() =>
                      handleAddToCart(
                        `Skin101GrapsPack${total.allGrapsPack}`,
                        total.allGrapsPack === 1
                          ? priceData.Skin101GrapsPack1.price
                          : priceData.Skin101GrapsPack2.price,
                        total.allGrapsPack === 1
                          ? priceData.Skin101GrapsPack1.weight
                          : priceData.Skin101GrapsPack2.weight
                      )
                    }
                    className="px-4 py-2 text-sm duration-200 border rounded-full hover:text-white hover:bg-primary hover:scale-95"
                  >
                    Add To Cart
                  </button>
                  {/* <button
                    aria-label="Add to cart"
                    type="button"
                    onClick={handleAddToCart}
                    className=""
                  >
                    Add To Cart
                  </button> */}
                </div>
              </div>
            </div>
            <div className="">
              <div className="mx-auto w-[350px] group cursor-default  lg:w-full text-center  pb-8 rounded-xl  overflow-hidden border">
                <div className="relative ">
                  <Link to="/product/SKIN-101/peach">
                    <div>
                      <img
                        alt=""
                        src={require("../../assets/WHITE BGS/Skin101_Peach_2.webp")}
                        className={`mx-auto mb-6 group-hover:hidden  ${
                          total.allPeachPack === 1 ? "opacity-100" : "opacity-0"
                        } `}
                      />
                      <img
                        src={require("../../assets/WHITE BGS/Skin101_Peach_1.webp")}
                        alt=""
                        className={`mx-auto mb-6 group-hover:block hidden  ${
                          total.allPeachPack === 1 ? "opacity-100" : "opacity-0"
                        } `}
                      />

                      <img
                        src={require("../../assets/WHITE BGS/PEACH PAIR.jpg")}
                        alt=""
                        className={`mx-auto mb-6 absolute top-0 left-0 -z-10 h-full w-full  ${
                          total.allPeachPack === 2 ? "block" : "hidden"
                        } `}
                      />
                    </div>
                  </Link>
                  {/* <div className="absolute flex gap-2 delay-500 -translate-x-1/2 left-1/2 bottom-2 w-min h-min"> */}
                  <div className="absolute flex gap-2 delay-500 -translate-x-1/2 lg:hidden left-1/2 bottom-2 w-min h-min group-hover:flex">
                    Pack:
                    <div
                      onClick={() => setTotal({ ...total, allPeachPack: 1 })}
                      className={`flex items-center justify-center w-6 h-6 text-sm  border border-gray-300 rounded-full cursor-pointer ${
                        total.allPeachPack === 1
                          ? "bg-primary text-white border-primary"
                          : "text-gray-400"
                      }`}
                    >
                      1
                    </div>
                    <div
                      onClick={() => setTotal({ ...total, allPeachPack: 2 })}
                      className={`flex items-center justify-center w-6 h-6 text-sm  border border-gray-300 rounded-full cursor-pointer ${
                        total.allPeachPack === 2
                          ? "bg-primary text-white border-primary"
                          : "text-gray-400"
                      }`}
                    >
                      2
                    </div>
                  </div>
                  <p className="absolute py-1 text-sm text-center text-white uppercase rotate-45 bg-primary top-3 -right-7 w-28 ">
                    <span className="">New</span>
                  </p>
                </div>

                <h2 className="px-4 mb-2 text-2xl font-semibold text-left text-primary lg:px-5">
                  SKIN 101
                </h2>
                <p className="flex items-center gap-2 px-4 mb-2 lg:px-5">
                  {/* <p className="flex items-center justify-center gap-2 mb-2 text-center "> */}
                  <GiPeach className="text-[#FFE5B4]" />
                  Peach Flavor
                  {/* </p> */}
                </p>

                <div className="flex items-center justify-between px-4 mt-2 lg:px-5">
                  <p className="">
                    {/* You Pay: */}
                    <span className="text-gray-600 "> ₹ </span>
                    <span className="text-lg font-semibold text-gray-600">
                      {total.allPeachPack === 1
                        ? priceData.Skin101Peach1.price
                        : priceData.Skin101Peach2.price}
                    </span>
                    <span className="line-through text-[#999999] pl-2">
                      {total.allPeachPack === 1
                        ? priceData.Skin101Peach1.ogPrice
                        : priceData.Skin101Peach2.ogPrice}
                    </span>
                    {/* <span className="text-[#999999] ml-4">27 % off</span> */}
                  </p>
                  <button
                    aria-label="Add to cart"
                    type="button"
                    onClick={() =>
                      handleAddToCart(
                        `Skin101Peach${total.allPeachPack}`,
                        total.allPeachPack === 1
                          ? priceData.Skin101Peach1.price
                          : priceData.Skin101Peach2.price,
                        total.allPeachPack === 1
                          ? priceData.Skin101Peach1.weight
                          : priceData.Skin101Peach2.weight,
                        total.allPeachPack === 1
                          ? priceData.Skin101Peach1.flavor
                          : priceData.Skin101Peach2.flavor
                      )
                    }
                    className="px-4 py-2 text-sm duration-200 border rounded-full hover:text-white hover:bg-primary hover:scale-95"
                  >
                    Add To Cart
                  </button>
                  {/* <button
                    aria-label="Add to cart"
                    type="button"
                    onClick={handleAddToCart}
                    className=""
                  >
                    Add To Cart
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
