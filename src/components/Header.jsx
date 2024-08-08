import React from "react";
import logo from "../assets/hompage/hero section/logo.png";
// import { Link } from "react-router-dom";
import {
  PiPackageLight,
  PiShoppingCartLight,
  PiUserCircleLight,
} from "react-icons/pi";
import { useCart } from "./CartProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
// import { FaRegCircleUser } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
// import { IoSearchOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Header = () => {
  const { cartItems, setOpen, setOpen2, isLogin, setIsLogin } = useCart();
const navigate = useNavigate();
  // Calculate the total number of items in the cart
  const totalProduct = Object.keys(cartItems).length;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    localStorage.removeItem("userName");
    toast.success("You have been logged out");
    setIsLogin(false);
    navigate("/");
    
  };

  return (
    <div>
      {/* <div
        className={`h-20 lg:h-[100px] fixed w-full z-40 px-1 text-lg text-primary  transition-all duration-300 hover:bg-white hover:shadow  `}
      > */}
      <div className="fixed z-40 w-full h-20 px-1 text-lg bg-white border-b lg:h-24 text-primary">
        <div className="container flex items-center justify-between h-full mx-auto xl:max-w-7xl">
          <div className="z-10 block cursor-pointer top-2 ">
            <a href="/">
              <img src={logo} alt="" className="h-7" />
            </a>
          </div>

          <div className="justify-between hidden gap-10 lg:gap-16 md:flex tex ">
            <div className="font-semibold cursor-pointer ">
              <Link to="/">Home</Link>
            </div>
            <div className="font-semibold cursor-pointer ">
              <Link to="/shop">Shop</Link>
            </div>
            <div className="font-semibold cursor-pointer ">
              <Link to="/learn">Learn</Link>
            </div>
          </div>
          {/* )} */}
          <div className="flex items-center gap-5 sm:gap-6 md:gap-8 ">
            {isLogin ? (
              <div className="relative group">
                <div className="flex flex-col items-center cursor-pointer select-none ">
                  <FaRegUser className="mb-1 -ml-2 text-lg md:text-xl" />
                  <div className="flex items-center">
                    <p className="text-xs sm:text-sm ">
                      {localStorage.getItem("userName")
                        ? localStorage.getItem("userName")
                        : "User"}{" "}
                    </p>{" "}
                    <MdOutlineArrowDropDown className="duration-500 group-hover:rotate-180 md:text-lg" />
                  </div>
                </div>

                <div className="absolute hidden top-10 group-hover:block whitespace-nowrap -left-2/3">
                  <div className="h-5 lg:h-[30px]"></div>
                  <div className="w-full h-full p-2 space-y-1 bg-white rounded-b-xl  text-[16px] shadow -mt-0.5 md:min-w-40  ">
                    <Link to="/profile">
                      <div className="flex items-center gap-2 px-2 py-1 duration-500 rounded cursor-pointer md:gap-4 hover:px-4 hover:bg-gray-200">
                        <PiUserCircleLight className="text-xl" /> My Profile
                      </div>
                    </Link>
                    <Link to="/orders">
                    <div className="flex items-center gap-2 px-2 py-1 duration-500 rounded cursor-pointer md:gap-4 hover:px-4 hover:bg-gray-200">
                      <PiPackageLight className="text-lg" />
                      All Orders
                    </div>
                    </Link>
                    {/* <div className="flex items-center gap-2 px-2 py-1 duration-500 rounded cursor-pointer md:gap-4 hover:px-4 hover:bg-gray-200">
                      <IoSearchOutline className="text-lg" />
                      Track Order
                    </div> */}
                    <div
                      onClick={logout}
                      className="flex items-center gap-2 px-2 py-1 duration-500 rounded cursor-pointer md:gap-4 hover:px-4 hover:bg-gray-200"
                    >
                      <CiLogout className="text-lg" /> Logout
                    </div>

                    {/* <div className="px-2 py-1 duration-500 rounded cursor-pointer hover:px-4 hover:bg-gray-200">
                    My Orders
                  </div> */}
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative group">
                <Link to="/login" className="flex flex-col items-center">
                  <FaRegUser className="text-lg md:text-xl " />
                  <span className="text-sm sm:text-base">Login </span>
                </Link>
              </div>
            )}
            <div
              onClick={() => setOpen2(true)}
              className="relative cursor-pointer hover:text-primary"
            >
              <PiShoppingCartLight className="text-3xl " />
              {/* <p className="text-sm">Cart</p> */}
              {totalProduct > 0 && (
                <div className="absolute right-0 flex items-center justify-center w-4 h-4 text-xs text-white rounded-full cursor-pointer -top-1 bg-primary">
                  {totalProduct}
                </div>
              )}
            </div>
            <div
              onClick={() => {
                setOpen2(false);
                setOpen(true);
              }}
              className="flex flex-col items-center justify-center rounded-full cursor-pointer w-9 h-9 lg:h-12 lg:w-12 group bg-primary md:hidden"
            >
              <div className="group-hover:scale-[1.1] duration-500 ">
                <div className="flex gap-0.5 mb-0.5">
                  <div className="w-2 h-2 border-2 "></div>
                  <div className="w-2 h-2 border-2 "></div>
                </div>
                <div className="flex gap-0.5">
                  <div className="w-2 h-2 border-2 "></div>
                  <div className="w-2 h-2 border-2 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
