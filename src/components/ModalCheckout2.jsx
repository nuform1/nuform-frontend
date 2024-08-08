import { useCart } from "./CartProvider";
import { Link } from "react-router-dom";

import { AiOutlineDelete } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";
import { priceData } from "../constant";
import EditQuantity from "./EditQuantity";
import RecomandedSlider from "./RecomandedSlider";

const ModalCheckout2 = () => {
  const { open2, setOpen2, cartItems, removeFromCart, grandTotal } = useCart();
  const totalProduct = Object.keys(cartItems).length;
  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      setOpen2(false);
    }
  };
  // const notifyError = () => toast.error("Product removed.");

  useEffect(() => {
    const body = document.querySelector("body");
    if (open2) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      // Cleanup: Restore original overflow style when component unmounts
      body.style.overflow = "auto";
    };
  }, [open2]);

  return (
    <div>
      <div
        id="container"
        onClick={handleOnClose}
        className={`fixed ${
          !open2
            ? "translate-x-[110%] duration-500 md:duration-1000 "
            : "duration-500 md:duration-700 "
        }  z-50 flex justify-end  top-0 right-0 h-full  w-full`}
      >
        <div
          className={`relative w-full overflow-hidden bg-white p-4 md:w-[24rem] lg:w-[28rem] md:h-screen  shadow-xl shadow-black ${
            !open2
              ? "translate-x-[110%] duration-500 md:duration-1000"
              : "duration-500 md:duration-700  "
          }`}
        >
          <div className="h-full">
            {/*  */}

            <div className="relative flex flex-col justify-between h-full pt-4 ">
              <div className=" h-[70vh] pb-12">
                {" "}
                <h1 className="pb-4 text-2xl text-center border-b md:text-3xl md:text-left ">
                  Your Cart
                </h1>
                {!grandTotal && (
                  <div className="flex flex-col items-center justify-center pt-10">
                    <div className="lg:text-lg">
                      You're one step away from your NuForm!
                    </div>
                    <Link to="/shop">
                      <div
                        onClick={() => setOpen2(false)}
                        className="px-4 py-2 mt-5 text-white rounded-full bg-primary"
                      >
                        Shop Now
                      </div>
                    </Link>
                  </div>
                )}
                <div className="h-full overflow-y-scroll">
                  {cartItems["Skin101Combined"] && (
                  <div
                    className={`${
                      cartItems["Skin101Combined"] && "pb-1 pt-1 border-b group"
                    }`}
                  >
                    <div className="flex gap-2 p-1 lg:gap-2">
                      <div className="h-20 overflow-hidden rounded-lg min-w-20">
                        <img
                          src={priceData.Skin101Combined.image}
                          alt=""
                          className="h-20 duration-500 scale-110 group-hover:scale-125"
                        />
                      </div>
                      <div className="flex justify-between w-full gap-4">
                        <div>
                          <p className="text-xl text-primary ">
                            {priceData.Skin101Combined.title}
                          </p>
                          <p className="pb-0.5 text-sm italic">
                            {priceData.Skin101Combined.flavor}
                          </p>
                          <p className="text-sm text-gray-600">
                            {priceData.Skin101Combined.days}
                          </p>
                          <p className="text-sm text-gray-600">
                            ₹ {priceData.Skin101Combined.price}
                          </p>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <button
                            onClick={() => {
                              // notifyError();
                              removeFromCart("Skin101Combined");
                            }}
                            className="flex items-center justify-center w-6 h-6 text-xl rounded-full "
                          >
                            {/* <span className="-mt-1 text-[#FF8041]">x</span> */}
                            <AiOutlineDelete className="text-gray-300 duration-500 hover:text-red-500" />
                          </button>
                          <div>
                            <EditQuantity
                              itemId="Skin101Combined"
                              price={priceData.Skin101Combined.price}
                              quantiy={cartItems["Skin101Combined"].totalCount}
                              weight={priceData.Skin101Combined.weight}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}{" "}
                {cartItems["Skin101GrapsPack1"] && (
                  <div
                    className={`${
                      cartItems["Skin101GrapsPack1"] &&
                      "pb-1 pt-1 border-b group"
                    }`}
                  >
                    <div className="flex gap-2 p-1 xl:gap-4">
                      <div className="h-20 overflow-hidden rounded-lg min-w-20">
                        <img
                          src={priceData.Skin101GrapsPack1.image}
                          alt=""
                          className="h-20 duration-500 scale-110 group-hover:scale-125"
                        />
                      </div>
                      <div className="flex justify-between w-full gap-2">
                        <div>
                          <p className="text-xl text-primary ">
                            {priceData.Skin101GrapsPack1.title}
                          </p>
                          <p className="pb-0.5 text-sm italic">
                            {priceData.Skin101GrapsPack1.flavor}
                          </p>
                          <p className="text-sm text-gray-600">
                            {priceData.Skin101GrapsPack1.days}
                          </p>
                          <p className="text-sm text-gray-600">
                            ₹ {priceData.Skin101GrapsPack1.price}
                          </p>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <button
                            onClick={() => {
                              // notifyError();
                              removeFromCart("Skin101GrapsPack1");
                            }}
                            className="flex items-center justify-center w-6 h-6 text-xl rounded-full "
                          >
                            {/* <span className="-mt-1 text-[#FF8041]">x</span> */}
                            <AiOutlineDelete className="text-gray-300 duration-500 hover:text-red-500" />
                          </button>
                          <div>
                            <EditQuantity
                              itemId="Skin101GrapsPack1"
                              price={priceData.Skin101GrapsPack1.price}
                              quantiy={
                                cartItems["Skin101GrapsPack1"].totalCount
                              }
                              weight={priceData.Skin101GrapsPack1.weight}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {cartItems["Skin101GrapsPack2"] && (
                  <div
                    className={`${
                      cartItems["Skin101GrapsPack2"] &&
                      "pb-1 pt-1 border-b group "
                    }`}
                  >
                    <div className="flex gap-2 p-1 lg:gap-4">
                      <div className="h-20 overflow-hidden rounded-lg min-w-20">
                        <img
                          src={priceData.Skin101GrapsPack2.image}
                          alt=""
                          className="h-20 duration-500 scale-110 group-hover:scale-125"
                        />
                      </div>
                      <div className="flex justify-between w-full gap-12 md:gap-20">
                        <div>
                          <p className="text-lg text-primary ">
                            {priceData.Skin101GrapsPack2.title}
                          </p>
                          <p className="pb-0.5 text-sm italic">
                            {priceData.Skin101GrapsPack2.flavor}
                          </p>
                          <p className="text-sm text-gray-600">
                            {priceData.Skin101GrapsPack2.days}
                          </p>
                          <p className="text-sm text-gray-600">
                            ₹ {priceData.Skin101GrapsPack2.price}
                          </p>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <button
                            onClick={() => {
                              // notifyError();
                              removeFromCart("Skin101GrapsPack2");
                            }}
                            className="flex items-center justify-center w-6 h-6 text-xl rounded-full "
                          >
                            {/* <span className="-mt-1 text-[#FF8041]">x</span> */}
                            <AiOutlineDelete className="text-gray-300 duration-500 hover:text-red-500" />
                          </button>
                          <div>
                            <EditQuantity
                              itemId="Skin101GrapsPack2"
                              price={priceData.Skin101GrapsPack2.price}
                              quantiy={
                                cartItems["Skin101GrapsPack2"].totalCount
                              }
                              weight={priceData.Skin101GrapsPack2.weight}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {cartItems["Skin101Peach1"] && (
                  <div
                    className={`${
                      cartItems["Skin101Peach1"] && "pb-1 pt-1 border-b group"
                    }`}
                  >
                    <div className="flex gap-2 p-1 lg:gap-4">
                      <div className="h-20 overflow-hidden rounded-lg min-w-20">
                        <img
                          src={priceData.Skin101Peach1.image}
                          alt=""
                          className="h-20 duration-500 scale-110 group-hover:scale-125"
                        />
                      </div>
                      <div className="flex justify-between w-full gap-12 md:gap-20">
                        <div>
                          <p className="text-xl text-primary ">
                            {priceData.Skin101Peach1.title}
                          </p>
                          <p className="pb-0.5 text-sm italic">
                            {priceData.Skin101Peach1.flavor}
                          </p>
                          <p className="text-sm text-gray-600">
                            {priceData.Skin101Peach1.days}
                          </p>
                          <p className="text-sm text-gray-600">
                            ₹{" "}
                            {/* {cartItems["Skin101Peach1"].totalCount} x ₹{" "} */}
                            {priceData.Skin101Peach1.price}
                          </p>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <button
                            onClick={() => {
                              // notifyError();
                              removeFromCart("Skin101Peach1");
                            }}
                            className="flex items-center justify-center w-6 h-6 text-xl rounded-full "
                          >
                            {/* <span className="-mt-1 text-[#FF8041]">x</span> */}
                            <AiOutlineDelete className="text-gray-300 duration-500 hover:text-red-500" />
                          </button>
                          <div>
                            <EditQuantity
                              itemId="Skin101Peach1"
                              price={priceData.Skin101Peach1.price}
                              quantiy={cartItems["Skin101Peach1"].totalCount}
                              weight={priceData.Skin101Peach1.weight}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {cartItems["Skin101Peach2"] && (
                  <div
                    className={`${
                      cartItems["Skin101Peach2"] && "pb-1 pt-1 border-b group"
                    }`}
                  >
                    <div className="flex gap-2 p-1 lg:gap-4">
                      <div className="h-20 overflow-hidden rounded-lg min-w-20">
                        <img
                          src={priceData.Skin101Peach2.image}
                          alt=""
                          className="h-20 duration-500 scale-110 group-hover:scale-125"
                        />
                      </div>
                      <div className="flex justify-between w-full gap-12 md:gap-20">
                        <div>
                          <p className="text-xl text-primary ">
                            {priceData.Skin101Peach2.title}
                          </p>
                          <p className="pb-0.5 text-sm italic">
                            {priceData.Skin101Peach2.flavor}
                          </p>
                          <p className="text-sm text-gray-600">
                            {priceData.Skin101Peach2.days}
                          </p>
                          <p className="text-sm text-gray-600">
                            ₹ {priceData.Skin101Peach2.price}
                          </p>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <button
                            onClick={() => {
                              // notifyError();
                              removeFromCart("Skin101Peach2");
                            }}
                            className="flex items-center justify-center w-6 h-6 text-xl rounded-full "
                          >
                            {/* <span className="-mt-1 text-[#FF8041]">x</span> */}
                            <AiOutlineDelete className="text-gray-300 duration-500 hover:text-red-500" />
                          </button>
                          <div>
                            <EditQuantity
                              itemId="Skin101Peach2"
                              price={priceData.Skin101Peach2.price}
                              quantiy={cartItems["Skin101Peach2"].totalCount}
                              weight={priceData.Skin101Peach2.weight}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                </div>
                
              </div>{" "}
              <div className="z-10 bg-white">
              {/* <div className="absolute bottom-0 left-0 w-full bg-red-50"> */}
                <>
                  {!cartItems["Skin101Combined"] && (
                    <div>
                      {totalProduct < 2 && (
                        <h3 className="pb-1 text-gray-500 md:text-lg">
                          Recommended for you
                        </h3>
                      )}
                      <RecomandedSlider />
                    </div>
                  )}

                  {/* {(!cartItems["Skin101GrapsPack1"] &&
                    !cartItems["Skin101GrapsPack2"]) ||
                    (!cartItems["Skin101Peach1"] &&
                      !cartItems["Skin101Peach2"] && (
                        <div>
                          {" "}
                          <h3 className="text-lg md:text-xl text-primary">
                            Recomanded for you
                          </h3>
                          <RecomandedSlider />
                        </div>
                      ))} */}
                  <div className="flex justify-between pt-4 border-t">
                    <p className="">Subtotal</p>{" "}
                    <p className="">
                      <span className="text-sm">₹</span> {grandTotal}.00
                    </p>
                  </div>
                  <div className="flex justify-between ">
                    <p className="">Shipping</p>{" "}
                    <p className="">
                      {grandTotal > 0 ? (
                        <>
                          <span className="text-sm">₹</span> 60.00
                        </>
                      ) : (
                        "Free"
                      )}
                    </p>
                  </div>
                  {/* <button disabled={grandTotal === 0} className="w-full"> */}
                  <Link to={grandTotal === 0 ? "#" : "/checkout"}>
                    <div
                      onClick={() => {
                        if (grandTotal !== 0) setOpen2(false);
                      }}
                      className={`bg-primary w-full  py-2.5 cursor-pointer text-center mt-4 rounded-full ${
                        grandTotal === 0
                          ? " pointer-events-none text-gray-300 bg-white border "
                          : "text-white"
                      }`}
                    >
                      PLACE ORDER
                    </div>
                  </Link>
                  {/* </button> */}
                </>
              </div>
            </div>
          </div>

          <Link to="/shop">
            {/* <div
              onClick={() => setOpen2(false)}
              className="bg-[#FF8041] w-full text-white py-2.5 cursor-pointer text-center mt-2 px-2"
            >
              VIEW PRODUCTS
            </div> */}
          </Link>
          <div className="absolute flex gap-2 top-6 right-4 ">
            <div
              className="p-1.5 text-2xl font-bold bg-white rounded-full cursor-pointer select-none w-min text-primary hover:bg-gray-200"
              onClick={() => setOpen2(false)}
            >
              <IoClose />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalCheckout2;
