// import { FaStar } from "react-icons/fa6";
import { LuGrape } from "react-icons/lu";
import { GiPeach } from "react-icons/gi";
import { useCart } from "../../components/CartProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { priceData } from "../../constant";
import { useState } from "react";

const SupplementPackages = () => {
  const { addToCart, setOpen2 } = useCart();
  const notifySuccess = () => toast.success("Successfully added to cart !");
  const [total, setTotal] = useState({
    grapsPack: 1,
    peachPack: 1,
  });

  const handleAddToCart = (itemId, price, weight) => {
    addToCart(itemId, 1, price,weight); // Add item to cart
    // console.log(cartItems)
    setOpen2(true);
    notifySuccess();
    // setTotal(1); // Reset total after adding to cart
  };
  return (
    <section className="">
      <div className="container pt-20 mx-auto xl:max-w-7xl">
        {/* <p className="mb-6 text-center text-PRIMARY ">.. Nuform Plans ..</p> */}
        <h3 className="mb-10 text-2xl text-center md:text-3xl text-primary">
          Created to meet your needs
        </h3>

        <div className="grid items-center gap-10 sm:gap-4 lg:gap-6 md:grid-cols-2 ">
          <div className="">
            <div className="pb-8 overflow-hidden text-center border cursor-default group lg:w-full rounded-xl">
              <div className="relative ">
                <Link
                  className="mx-auto mb-6"
                  to="/product/SKIN-101/black-grape"
                >
                  <img
                    src={require("../../assets/Compresed/GRAPE 1.jpg")}
                    alt=""
                    className="mx-auto mb-6 group-hover:hidden"
                  />
                  <img
                    src={require("../../assets/Compresed/GRAPE 5.jpg")}
                    alt=""
                    className="hidden mx-auto mb-6 group-hover:block"
                  />
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
              </div>
            </div>
          </div>
          <div className="">
            <div className="pb-8 overflow-hidden text-center border cursor-default group lg:w-full rounded-xl">
              <div className="relative ">
                <Link to="/product/SKIN-101/peach">
                  <img
                    alt=""
                    src={require("../../assets/Compresed/PEACH 1.jpg")}
                    className="mx-auto mb-6 group-hover:hidden"
                  />
                  <img
                    src={require("../../assets/Compresed/PEACH 5.jpg")}
                    alt=""
                    className="hidden mx-auto mb-6 group-hover:block"
                  />
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
      </div>
      {/* <Toaster /> */}
    </section>
  );
};

export default SupplementPackages;
