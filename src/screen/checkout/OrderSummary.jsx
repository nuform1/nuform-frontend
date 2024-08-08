import React from "react";
import { useCart } from "../../components/CartProvider";
import { Link } from "react-router-dom";
import { priceData } from "../../constant";

const OrderSummary = () => {
  const { cartItems, grandTotal } = useCart();
  return (
    <div className="w-full px-1 md:pl-2 rounded-xl xl:pl-14 lg:pl-12">
      <h3 className="pb-2 text-xl md:text-2xl text-primary sm:col-span-2 lg:hidden">
        Order Summary
      </h3>
      <div className="pb-4">
        {grandTotal > 0 ? (
          <div>
          {cartItems["Skin101Combined"] && (
              <div
                className={`${
                  cartItems["Skin101Combined"] && " pt-2  group"
                }`}
              >
                <div className="flex gap-2 p-1 lg:gap-x-8 lg:gap-y-4">
                  <div className="h-20 overflow-hidden rounded-lg min-w-20">
                    <img
                      src={priceData.Skin101Combined.image}
                      alt=""
                      className="h-20 duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-between w-full gap-12 md:gap-20">
                    <div>
                      <p className="text-xl ">
                        {priceData.Skin101Combined.title}
                      </p>
                      <p className="pb-0.5 text-sm ">
                        {priceData.Skin101Combined.flavor}
                      </p>
                      <p className="text-sm text-gray-500">
                        {priceData.Skin101Combined.days} 
                      </p>
                    </div>
                    <p className="text-sm whitespace-nowrap ">
                      ₹{" "}
                      {cartItems["Skin101Combined"].totalCount *
                        priceData.Skin101Combined.price}
                      .00
                    </p>
                  </div>
                </div>
              </div>
            )}   {cartItems["Skin101GrapsPack1"] && (
              <div
                className={`${
                  cartItems["Skin101GrapsPack1"] && " pt-2  group"
                }`}
              >
                <div className="flex gap-2 p-1 lg:gap-x-8 lg:gap-y-4">
                  <div className="h-20 overflow-hidden rounded-lg min-w-20">
                    <img
                      src={priceData.Skin101GrapsPack1.image}
                      alt=""
                      className="h-20 duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-between w-full gap-12 md:gap-20">
                    <div>
                      <p className="text-xl ">
                        {priceData.Skin101GrapsPack1.title}
                      </p>
                      <p className="pb-0.5 text-sm ">
                        {priceData.Skin101GrapsPack1.flavor}
                      </p>
                      <p className="text-sm text-gray-500">
                        {priceData.Skin101GrapsPack1.days} 
                      </p>
                    </div>
                    <p className="text-sm ">
                      ₹{" "}
                      {cartItems["Skin101GrapsPack1"].totalCount *
                        priceData.Skin101GrapsPack1.price}
                      .00
                    </p>
                  </div>
                </div>
              </div>
            )}
           
            {cartItems["Skin101GrapsPack2"] && (
              <div
                className={`${
                  cartItems["Skin101GrapsPack2"] && " pt-2  group "
                }`}
              >
                <div className="flex gap-2 p-1 lg:gap-x-8 lg:gap-y-4">
                  <div className="h-20 overflow-hidden rounded-lg min-w-20">
                    <img
                      src={priceData.Skin101GrapsPack2.image}
                      alt=""
                      className="h-20 duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-between w-full gap-12 md:gap-20">
                    <div>
                      <p className="text-lg ">
                        {priceData.Skin101GrapsPack2.title}
                      </p>
                      <p className="pb-0.5 text-sm ">
                        {priceData.Skin101GrapsPack2.flavor}
                      </p>
                      <p className="text-sm text-gray-500">
                        {priceData.Skin101GrapsPack2.days} 
                      </p>
                    </div>
                    <p className="text-sm ">
                      ₹{" "}
                      {cartItems["Skin101GrapsPack2"].totalCount *
                        priceData.Skin101GrapsPack2.price}
                      .00
                    </p>
                  </div>
                </div>
              </div>
            )}
            {cartItems["Skin101Peach1"] && (
              <div
                className={`${cartItems["Skin101Peach1"] && " pt-2  group"}`}
              >
                <div className="flex gap-2 p-1 lg:gap-x-8 lg:gap-y-4">
                  <div className="h-20 overflow-hidden rounded-lg min-w-20">
                    <img
                      src={priceData.Skin101Peach1.image}
                      alt=""
                      className="h-20 duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-between w-full gap-12 md:gap-20">
                    <div>
                      <p className="text-xl ">
                        {priceData.Skin101Peach1.title}
                      </p>
                      <p className="pb-0.5 text-sm ">
                        {priceData.Skin101Peach1.flavor}
                      </p>
                      <p className="text-sm text-gray-500">
                        {priceData.Skin101Peach1.days} 
                      </p>
                    </div>
                    <p className="text-sm ">
                      ₹{" "}
                      {cartItems["Skin101Peach1"].totalCount *
                        priceData.Skin101Peach1.price}
                      .00
                    </p>
                  </div>
                </div>
              </div>
            )}
            {cartItems["Skin101Peach2"] && (
              <div
                className={`${cartItems["Skin101Peach2"] && " pt-2  group"}`}
              >
                <div className="flex gap-2 p-1 lg:gap-x-8 lg:gap-y-4">
                  <div className="h-20 overflow-hidden rounded-lg min-w-20">
                    <img
                      src={priceData.Skin101Peach2.image}
                      alt=""
                      className="h-20 duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-between w-full gap-12 md:gap-20">
                    <div>
                      <p className="text-xl ">
                        {priceData.Skin101Peach2.title}
                      </p>
                      <p className="pb-0.5 text-sm ">
                        {priceData.Skin101Peach2.flavor}
                      </p>
                      <p className="text-sm text-gray-500">
                        {priceData.Skin101Peach2.days} 
                      </p>
                    </div>
                    <p className="text-sm ">
                      ₹{" "}
                      {cartItems["Skin101Peach2"].totalCount *
                        priceData.Skin101Peach2.price}
                      .00
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div>
              <>
                <div className="flex justify-between pt-4 mt-4 border-t border-primary">
                  <p className="">Subtotal</p>{" "}
                  <p className="text-gray-500 ">
                    <span className="text-sm ">₹</span> {grandTotal}
                  </p>
                </div>
                <div className="flex justify-between ">
                  <p className="">Shipping</p>{" "}
                  <p className="text-gray-500 ">
                    <span className="text-sm">₹</span> 60
                  </p>
                </div>
                <div className="flex justify-between pt-2">
                  <p className="text-lg text-primary lg:text-xl">Total</p>{" "}
                  <p className="text-lg text-primary">
                    <span className="">₹</span> {grandTotal + 60}
                  </p>
                </div>
              </>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col pt-10">
              <div className="lg:text-lg">
                You're one step away from your NuForm!
              </div>
              <Link to="/shop">
                <div className="px-4 py-2 my-5 text-white rounded-full w-min bg-primary whitespace-nowrap">
                  Shop Now
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
      {/* <Toaster /> */}
    </div>
  );
};

export default OrderSummary;
