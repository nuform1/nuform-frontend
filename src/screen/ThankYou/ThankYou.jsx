import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import ModalCheckout2 from "../../components/ModalCheckout2";
import ModalSidePanel from "../../components/ModalSidePanel";
import { useCart } from "../../components/CartProvider";
import { useEffect } from "react";
import toast from "react-hot-toast";
import ModalOpacity from "../../components/ModalOpacity";
// import OrderPlacedImage from "../../assets/order_placed_image.jpg"; // Import your order placed image

const ThankYou = () => {
  const { setCartItems } = useCart();

  useEffect(() => {
    localStorage.removeItem("cartItems");
    localStorage.removeItem("grandTotal");
    if (localStorage.getItem("cartItems") === null) {
      setCartItems({});
    }
  }, [setCartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
    toast.dismiss();
    toast.success("Order Placed Successfully");
  }, []);

  return (
    <>
      <div className="container flex items-center justify-center px-1 py-24 mx-auto text-justify lg:max-w-4xl place-items-center sm:py-32 lg:pb-44">
        <div className="text-center">
          {/* <img
            src={OrderPlacedImage}
            alt="Order Placed"
            className="max-w-full mb-6"
          />{" "} */}
          {/* Order Placed Image */}
          <div className="flex justify-center mb-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-[#0915ffc1] w-28 h-28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl text-center md:text-3xl text-primary">
            Your Order has been Placed Successfully
          </h3>
          <p className="mt-3 mb-6">
            Thank you for choosing us. Your order will be delivered soon. You
            can{" "}
            <Link to="/login" className=" text-primary">
              Track
            </Link>{" "}
            your order in the "All Orders" section on our website after login.
          </p>
          <div>
            <Link to="/">
              <button
                aria-label="Back Home"
                className="py-2.5 bg-primary rounded-r-full rounded-bl-full text-white hover:scale-95 duration-200 mx-auto  whitespace-nowrap px-4  mb-4 lg:px-20 w-auto"
              >
                Back Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ModalSidePanel />
      <ModalCheckout2 />
      <ModalOpacity />
      <Footer />
    </>
  );
};

export default ThankYou;
