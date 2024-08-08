import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import toast from "react-hot-toast";
import ModalSidePanel from "../../components/ModalSidePanel";
import ModalCheckout2 from "../../components/ModalCheckout2";
import { useCart } from "../../components/CartProvider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ModalOpacity from "../../components/ModalOpacity";

const AllOrders = () => {
  const { isLogin } = useCart();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false);

  const userID = localStorage.getItem("userID");
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  useEffect(() => {
    if (!isLogin) {
      toast.error("Please login to continue");
      navigate("/login");
    }

    const fetchData = async () => {
      try {
        if (!userID) {
          toast.error("Kindly login to continue");

          localStorage.removeItem("token");
          localStorage.removeItem("userID");
          localStorage.removeItem("userName");
          localStorage.removeItem("email");

          navigate("/login");
        } else {
          setFetching(true);
          toast.loading("Fetching user data...");

          const res = await axios.get(
            // `http://localhost:8000/getOrderData`,
            `https://nuform-backend.vercel.app/getOrderData`,
            {
              headers: {
                "x-api-key": token,
              },

              params: {
                userId: userID,
                isAllOrders: true,
                email: email,
                paymentResult: "SUCCESS",
              },
            }
          );
          // const userData = res.data.data;
          console.log("res.data", res.data);
          if (res.data.status) {
            setData(res.data.data);
          }
          toast.dismiss();
          setFetching(false);
        }

        // Assuming response data will be set to state
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Unable to fetch user data");
        setFetching(false);
        toast.dismiss();
        // navigate("/login");
        // Handle error, show error message, etc.
      }
    };

    fetchData(); // Call the inner async function
  }, [isLogin, navigate, token, userID, email]);

  return (
    <>
      <div className="container px-1 py-10 mx-auto mb-20 text-justify lg:pb-20 xl:max-w-7xl">
        {fetching ? (
          <div>
            <h1>Loading... </h1>
          </div>
        ) : data.length > 0 ? (
          <div>
            <h3 className="mb-4 text-2xl md:text-3xl text-primary">
              Your Orders
            </h3>

            {data?.map((x, i) => {
              return (
                <div
                  key={i}
                  className="w-full p-6 mb-2 duration-500 border rounded-xl hover:shadow-md hover:border bg-gray-50"
                >
                  {/* <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-6 lg:col-span-4"> */}
                  <div className="flex flex-col w-full gap-2 mb-2 text-sm md:justify-between md:flex-row text-primary">
                    <h5 className=" whitespace-nowrap">Order ID: {x._id}</h5>
                    <p className="">Order date: {x?.createdAt.slice(0, 10)} </p>
                  </div>

                  <div className="flex flex-col gap-2 md:flex-row md:justify-between lg:gap-4 ">
                    <div className="grid w-full gap-4 md:grid-cols-3">
                      <table className="w-full col-span-2 table-auto h-min">
                        <thead className="">
                          <tr>
                            <th colSpan="3" className="col-span-2">
                              Product Name
                            </th>
                            <th className="px-4 text-right">Qty</th>
                            {/* <th className="px-4 py-2">Price</th> */}
                          </tr>
                        </thead>
                        <tbody className="py-2 lg:my-4">
                          {x.products?.map((item, index) => (
                            <tr key={index} className="border-b ">
                              <td colSpan={3} className="">
                                <h5 className="py-1 mt-1 mb-0.5">
                                  {index + 1}. {item.name}
                                  {/* {priceData.Skin101Combined.title} */}
                                </h5>
                                {/* <p className="text-[#777777] text-sm">
                                {priceData.Skin101Combined.flavor} 
                              </p>*/}
                              </td>
                              <td className="pl-4 pr-6 text-sm text-right ">
                                {item.units}
                              </td>
                            </tr>
                          ))}
                          <tr className="w-full">
                            <td colSpan={3}>
                              <p className="mt-3 font-semibold">Total Price</p>
                            </td>
                            <td className="pl-4 pr-6 font-semibold text-right">
                              ₹ {x.totalPrice}
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="">
                        <div className="font-semibold">Address</div>
                        <div>
                          {/* <p className="text-sm">
                        {data[0].shippingAddress.firstName}{" "}
                        {data[0].shippingAddress.lastName}
                      </p> */}
                          <p className="text-sm">{x.shippingAddress.address}</p>
                          <p className="text-sm">
                            {x.shippingAddress.city}{" "}
                            {data[0].shippingAddress.pincode}
                          </p>
                          <p className="text-sm">
                            {x.shippingAddress.state}{" "}
                            {x.shippingAddress.country}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-1/5">
                      <div className="flex gap-2 pt-2 md:flex-col ">
                        {/* <button
                          aria-label="Shop"
                          className="w-full px-2 py-2 text-sm duration-100 border rounded-full hover:text-white hoaver:bg-primary md:px-8 hover:bg-primary md:w-auto"
                        >
                          View Details
                        </button> */}
                        {x.awb && (
                          <a
                            href={`https://shiprocket.co/tracking/${x.awb}`}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full px-2 py-2 text-sm text-center duration-100 border rounded-full hover:text-white hoaver:bg-primary md:px-8 hover:bg-primary md:w-auto"
                          >
                            <button aria-label="Shop">Track Now</button>{" "}
                          </a>
                        )}
                        {/* <button
                        aria-label="Shop"
                        className="px-2 py-2 text-sm border rounded-full hover:text-white hoaver:bg-primary md:px-8"
                      >
                        invoice
                      </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="lg:text-lg">
              You're one step away from your NuForm!
            </div>
            <Link to="/shop">
              <button
                aria-label="Shop"
                className="px-4 py-2 mt-5 text-white rounded-r-full rounded-bl-full bg-primary lg:px-10"
              >
                Shop Now
              </button>
            </Link>
          </div>
        )}

        {/* No order found 
        <div className="flex flex-col items-center justify-center">
          <div className="lg:text-lg">
            You're one step away from your NuForm! 
          </div>
          <Link to="/shop">
            <button aria-label="Shop" className="px-4 py-2 mt-5 text-white rounded-r-full rounded-bl-full bg-primary lg:px-10">
              Shop Now
            </button>
          </Link>
        </div>*/}
      </div>
      <ModalSidePanel />
      <ModalCheckout2 />
      <ModalOpacity />
      <Footer />
    </>
  );
};

export default AllOrders;
