import ModalSidePanel from "../../components/ModalSidePanel";
import ModalCheckout2 from "../../components/ModalCheckout2";
import ShippingAddress from "./ShippingAddress";
import OrderSummary from "./OrderSummary";
import { useCart } from "../../components/CartProvider";
import { PiShoppingCartLight } from "react-icons/pi";
import ModalOpacity from "../../components/ModalOpacity";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Checkout2 = () => {
  const { setOpen2, cartItems, open2 } = useCart();
  const totalProduct = Object.keys(cartItems).length;
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>
          Secure Purchase of Best Skin Care Health Supplements - Nuform Nuform
        </title>
        <meta
          name="title"
          content="     Secure Purchase of Best Skin Care Health Supplements - Nuform"
        />
        <meta
          name="description"
          content=" skin supplements offer a potent blend of vitamins and antioxidants to support and enhance skin health from within. Order the best online today!"
        />
      </Helmet>
      <div className="relative h-full min-h-screen lg:bg-blue-50/40">
        <div className="container relative grid gap-4 pt-20 mx-auto md:pt-24 lg:grid-cols-12 xl:max-w-7xl lg:pt-28">
          <div className="container absolute top-0 left-0 z-10 grid h-20 mx-auto mb-2 lg:grid-cols-12 xl:max-w-7xl lg:mb-6">
            <div className="flex items-center justify-between pr-4 lg:col-span-7">
              <div className="cursor-pointer ">
                <a href="/">
                  <img
                    src={require("../../assets/hompage/hero section/logo.png")}
                    alt=""
                    className="h-7"
                  />
                </a>
              </div>
              <div className="flex items-center gap-5 sm:gap-6 md:gap-8 ">
                <div
                  onClick={() => setOpen2(true)}
                  className="relative cursor-pointer hover:text-primary"
                >
                  <PiShoppingCartLight className="text-2xl md:text-3xl " />

                  {totalProduct > 0 && (
                    <div className="absolute right-0 flex items-center justify-center w-4 h-4 text-xs text-white rounded-full cursor-pointer -top-1 bg-primary">
                      {totalProduct}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`z-10 h-full md:col-span-7 order-2 lg:order-1 pb-6  `}
          >
            {/* <div className={`${grandTotal && "z-10 "} h-full md:col-span-7`} > */}
            <ShippingAddress setIsCartOpen={setIsCartOpen} />
          </div>

          <div className="z-10 order-1 h-full md:col-span-7 lg:col-span-5 lg:order-2">
            <OrderSummary />
          </div>
        </div>{" "}
        <div className="absolute top-0 left-0 z-0 hidden w-full h-full md:col-span-5 lg:grid-cols-12 lg:grid">
          <div className="w-full h-full md:col-span-7 "></div>
          <div className="h-full md:col-span-5 lg:bg-blue-500/15 "></div>
        </div>
        <ModalSidePanel />
        <ModalCheckout2 />
        <ModalOpacity />
        {!open2 && isCartOpen && (
          <div className=" select-none top-0 left-0 z-40 w-full h-[200vh] duration-200 bg-black opacity-40 hidden md:fixed md:block"></div>
        )}
      </div>
    </>
  );
};

export default Checkout2;
