import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { useCart } from "../../components/CartProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { priceData } from "../../constant";

const phoneRegExp = /^[6-9]\d{9}$/;
const pincodeRegExp = /^[0-9]{6}$/;
const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const addressSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required*"),
  lastName: Yup.string().required("Last name is required*"),
  email: Yup.string()
    .required("Email is required*")
    .matches(emailRegExp, "Invalid email"),
  phone: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .required("Number is required*"),
  address: Yup.string().required("Address is required*"),
  state: Yup.string().required("State is required*"),
  city: Yup.string().required("City is required*"),
  pincode: Yup.string()
    .matches(pincodeRegExp, "Invalid Pincode")
    .required("Pincode is required*"),
  emailMe: Yup.boolean(),
});

const ShippingAddress = ({ setIsCartOpen }) => {
  const { grandTotal, cartItems, userProfileData, isLogin } = useCart();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    state: "",
    city: "",
    emailMe: true, // Default value true for checkbox
  });

  let stateNames = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  useEffect(() => {
    if (
      Object.keys(userProfileData).length > 0 &&
      userProfileData?.email &&
      fetching
    ) {
      setInitialValues((prevValues) => ({
        ...prevValues,
        firstName:
          userProfileData?.shippingAddresses[0]?.firstName ||
          userProfileData?.name ||
          "",
        lastName: userProfileData?.shippingAddresses[0]?.lastName || "",
        email: userProfileData?.email || "",
        phone: userProfileData?.phone || "",
        address: userProfileData?.shippingAddresses[0]?.address || "",
        city: userProfileData?.shippingAddresses[0]?.city || "",
        state: userProfileData?.shippingAddresses[0]?.state || "",
        pincode: userProfileData?.shippingAddresses[0]?.pincode || "",
      }));
      setFetching(false);
    } else {
      setFetching(false);
    }
  }, [userProfileData, fetching]);

  useEffect(() => {
    const loadRazorpayScript = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => handlePayment();
      document.body.appendChild(script);
    };
    const handlePayment = () => {
      const options = {
        key: "rzp_live_iyoRRLdWpPSEcm", // - Live
        // key: "rzp_test_ZE3thgh7YOruqb", // Enter the Key ID generated from the Dashboard - Testing
        // amount: 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        amount: data.total, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Nuform", // your business name
        description: "Test Transaction",
        image: "https://nuform.in/static/media/logo.4b69f81166ba17cf1eda.png",
        order_id: data.transactionId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        // callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
        handler: async function (response) {
          console.log(response.razorpay_payment_id);
          toast.success("Payment successful");
          setIsCartOpen(true);
          console.log(response);
          try {
            // const res = await axios.put(
            //   `https://nuform-backend.onrender.com/updateSuccessOrderData/${data.orderId}/${data.paymentId}`,
            //   // `http://localhost:8000/updateSuccessOrderData/${data.orderId}/${data.paymentId}`,
            //   {
            //     paymentResult: "SUCCESS",
            //   }
            // );
            // if (res.data.status === true) {
            toast.loading("Creating your shipment");
            const res2 = await axios.post(
              "https://nuform-backend.onrender.com/createShipment",
              // "http://localhost:8000/createShipment",
              {
                order_id: data.orderId,
                paymentId_id: data.paymentId,
                // pickup_postcode: data.pickup_postcode,
                // pickup_postcode: "500081",
                // delivery_postcode: values.pincode,
                // weight: "0.06",
              }
            );
            if (res2.data.status === true) {
              toast.success("Order placed successfully");
              console.log(res2.data);
              navigate("/thank-you");
            } else {
              toast.error("Something went wrong while creating shipment");
              toast.dismiss();
            }
          } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
            setIsCartOpen(true);
          } finally {
            toast.dismiss();
          }
        },
        prefill: {
          name: data.name || "", // your customer's name
          email: data.email || "", // your customer's email
          contact: data.contact || "", // Provide the customer's phone number for better conversion rates
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#0916ff",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    };
    if (data?.total > 0) {
      loadRazorpayScript();
    }
  }, [data, navigate, setIsCartOpen]);

  return (
    <div className="">
      {/* <h1 className="mb-10 text-3xl text-center md:text-4xl md:text-left ">
        Shipping Address
      </h1> */}
      <div>
        {fetching ? (
          <div>
            <h1>Loading... </h1>
          </div>
        ) : (
          <Formik
            initialValues={initialValues}
            validationSchema={addressSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setLoading(true); // Assuming setLoading is a state setter function
              // Assuming setSubmitting is a state setter function
              try {
                console.log(values);

                if (grandTotal) {
                  const products = [];
                  let totalWeight = 0;

                  if (cartItems["Skin101Peach1"]) {
                    products.push({
                      sku: "66486d74e4cd905411ae1c75",
                      units: cartItems["Skin101Peach1"].totalCount,
                      name: "Skin 101 Black Grape Starter pack",
                      selling_price: priceData["Skin101Peach1"].price,
                    });
                    totalWeight += cartItems["Skin101Peach1"].totalWeight;
                  }
                  if (cartItems["Skin101GrapsPack1"]) {
                    products.push({
                      sku: "66486d8ae4cd905411ae1c77",
                      units: cartItems["Skin101GrapsPack1"].totalCount,
                      name: "Skin 101 Peach Starter pack",
                      selling_price: priceData["Skin101GrapsPack1"].price,
                    });
                    totalWeight += cartItems["Skin101GrapsPack1"].totalWeight;
                  }
                  if (cartItems["Skin101Peach2"]) {
                    products.push({
                      sku: "66486dbde4cd905411ae1c79",
                      units: cartItems["Skin101Peach2"].totalCount,
                      name: "Skin 101 Peach Monthly pack",
                      selling_price: priceData["Skin101Peach2"].price,
                    });
                    totalWeight += cartItems["Skin101Peach2"].totalWeight;
                  }
                  if (cartItems["Skin101GrapsPack2"]) {
                    products.push({
                      sku: "66486de4e4cd905411ae1c7b",
                      units: cartItems["Skin101GrapsPack2"].totalCount,
                      name: "Skin 101 Black Grape Monthly pack",
                      selling_price: priceData["Skin101GrapsPack2"].price,
                    });
                    totalWeight += cartItems["Skin101GrapsPack2"].totalWeight;
                  }
                  if (cartItems["Skin101Combined"]) {
                    products.push({
                      sku: "66486e05e4cd905411ae1c7d",
                      units: cartItems["Skin101Combined"].totalCount,
                      name: "Skin 101 Combined pack",
                      selling_price: priceData["Skin101Combined"].price,
                    });
                    totalWeight += cartItems["Skin101Combined"].totalWeight;
                  }

                  console.log(products);
                  const response = await axios.post(
                    // "http://localhost:8000/placeOrder",
                    "https://nuform-backend.onrender.com/placeOrder",
                    {
                      totalPrice: grandTotal + 60,
                      shippingAddress: {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        address: values.address,
                        city: values.city,
                        state: values.state,
                        pincode: values.pincode,
                        country: "India",
                      },
                      email: values.email,
                      phone: values.phone,
                      pickupAddress: {
                        name: "Nuform",
                        address:
                          "Flat no 507, Aditya Heights,Venkat Enclave, Whitefields, Kondapur",
                        city: "Hyderabad",
                        state: "Telangana",
                        pincode: "500081",
                        country: "India",
                      },
                      products,
                      weight: totalWeight,
                      quantity: 1,
                    }
                  );

                  // const response = await axios.post(
                  //   // "https://nuform-backend.onrender.com/createShipment",
                  //   "http://localhost:8000/createShipment",
                  //   {
                  //     order_id: "6657e4c8b326d785ba92a8a2",
                  //     pickup_postcode: "500081",
                  //     delivery_postcode: values.pincode,
                  //     weight: "0.06",
                  //   }
                  // );

                  if (response.data.status === true) {
                    // Reset form and set loading to false if submission is successful
                    // setId(response.data.transactionId);
                    setData(response.data);
                    // resetForm();
                    toast.success("Address added successfully");
                    // navigate("/payment");
                    console.log(response.data);
                    // loadRazorpayScript();
                    // loadRazorpayScript(response.data);
                    // Optionally, you can add any success handling code here, like showing a success message
                  } else {
                    // Optionally, handle unsuccessful submission here
                    toast.error("Something went wrong");
                  }
                } else {
                  toast.error("Please add product to cart");
                }
              } catch (error) {
                // Optionally, handle errors here
                console.error(error);
                toast.error("Something went wrong");
              }
              setLoading(false); // Set loading to false after submission attempt, whether successful or not
              setSubmitting(false); // Set submitting to false after submission attempt
            }}
          >
            {({ isSubmitting }) => (
              <Form className="px-2 rounded-2xl">
                <div className="grid gap-4 sm:grid-cols-2 ">
                  <div className="flex justify-between sm:col-span-2">
                    <h3 className="text-xl md:text-2xl text-primary ">
                      Contact
                    </h3>
                    {!isLogin && (
                      <Link
                        to="/login"
                        className="text-sm underline text-primary md:text-base underline-offset-2"
                      >
                        Login
                      </Link>
                    )}
                  </div>

                  <div className="w-full ">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="email"
                        className="z-10 px-2 -mb-2 leading-7 text-gray-600 rounded-md whitespace-nowrap "
                      >
                        Email
                      </label>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className=" bg-[#FF0000] font-medium text-white text-sm px-1 py-0.5"
                      />
                    </div>
                    <Field
                      type="text"
                      id="email"
                      name="email"
                      // placeholder= ""
                      required
                      className="w-full p-3 rounded-lg outline-none focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>
                  <div className="w-full ">
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <label
                        htmlFor="phone"
                        className="z-10 px-2 -mb-2 leading-7 text-gray-600 rounded-md whitespace-nowrap "
                      >
                        Mobile Number
                      </label>
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className=" bg-[#FF0000] font-medium text-white text-sm px-1 py-0.5"
                      />
                    </div>
                    <Field
                      type="text"
                      id="phone"
                      name="phone"
                      // placeholder= ""
                      maxLength={10}
                      required
                      className="w-full p-3 rounded-lg outline-none focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>
                  <div className="w-full mb-2 ">
                    <label
                      htmlFor="emailMe"
                      className="flex items-center -mt-2 text-gray-500 cursor-pointer"
                    >
                      <Field
                        type="checkbox"
                        id="emailMe"
                        name="emailMe"
                        className="w-4 h-4 mr-2 bg-primary text-primary"
                      />
                      Email me with news and offers
                    </label>
                  </div>
                  <h3 className="text-xl sm:col-span-2 md:text-2xl text-primary">
                    Shipping Address
                  </h3>
                  <div className="w-full ">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="firstName"
                        className="z-10 px-2 -mb-2 leading-7 text-gray-600 rounded-md whitespace-nowrap "
                      >
                        First Name
                      </label>
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className=" bg-[#FF0000] font-medium text-white text-sm px-1 py-0.5"
                      />
                    </div>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      // placeholder= ""
                      required
                      className="w-full p-3 rounded-lg outline-none focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="lastName"
                        className="z-10 px-2 -mb-2 leading-7 text-gray-600 rounded-md whitespace-nowrap "
                      >
                        Last Name
                      </label>
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className=" bg-[#FF0000] font-medium text-white text-sm px-1 py-0.5"
                      />
                    </div>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      // placeholder= ""
                      required
                      className="w-full p-3 rounded-lg outline-none focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>

                  <div className="w-full sm:col-span-2 ">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="address"
                        className="z-10 px-2 -mb-2 leading-7 text-gray-600 rounded-md whitespace-nowrap "
                      >
                        Address
                      </label>
                      <ErrorMessage
                        name="address"
                        component="div"
                        className=" bg-[#FF0000] font-medium text-white text-sm px-1 py-0.5"
                      />
                    </div>
                    <Field
                      type="text"
                      id="address"
                      name="address"
                      // placeholder= ""
                      required
                      className="w-full p-3 rounded-lg outline-none focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>
                  <div className="w-full ">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="city"
                        className="z-10 px-2 -mb-2 leading-7 text-gray-600 rounded-md whitespace-nowrap "
                      >
                        City
                      </label>
                      <ErrorMessage
                        name="city"
                        component="div"
                        className=" bg-[#FF0000] font-medium text-white text-sm px-1 py-0.5"
                      />
                    </div>
                    <Field
                      type="text"
                      id="city"
                      name="city"
                      // placeholder= ""
                      required
                      className="w-full p-3 rounded-lg outline-none focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>
                  <div className="w-full ">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="state"
                        className="z-10 px-2 -mb-2 leading-7 text-gray-600 rounded-md whitespace-nowrap "
                      >
                        State
                      </label>
                      <ErrorMessage
                        name="state"
                        component="div"
                        className=" bg-[#FF0000] font-medium text-white text-sm px-1 py-0.5"
                      />
                    </div>
                    <Field
                      as="select"
                      id="state"
                      name="state"
                      // placeholder= ""
                      required
                      className="w-full p-3 rounded-lg outline-none focus:ring-primary ring-1 ring-gray-200"
                    >
                      <option value="" disabled>
                        Select State
                      </option>
                      {stateNames.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </Field>
                  </div>

                  <div className="w-full ">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="pincode"
                        className="z-10 px-2 -mb-2 leading-7 text-gray-600 rounded-md whitespace-nowrap "
                      >
                        Pincode
                      </label>
                      <ErrorMessage
                        name="pincode"
                        component="div"
                        className=" bg-[#FF0000] font-medium text-white text-sm px-1 py-0.5"
                      />
                    </div>
                    <Field
                      type="text"
                      id="pincode"
                      name="pincode"
                      // placeholder= ""
                      required
                      maxLength={6}
                      className="w-full p-3 rounded-lg outline-none focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>
                </div>
                <div className="mt-6 md:mt-10 ">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                     py-4 px-16 bg-primary rounded-full text-white hover:scale-95 duration-200  `}
                  >
                    {loading ? "Continuing" : "Continue to payment"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default ShippingAddress;
