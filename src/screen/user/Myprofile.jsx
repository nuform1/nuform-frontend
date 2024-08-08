import Footer from "../../components/Footer";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import axios from "axios";
import toast from "react-hot-toast";
import ModalSidePanel from "../../components/ModalSidePanel";
import ModalCheckout2 from "../../components/ModalCheckout2";
import { useCart } from "../../components/CartProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ModalOpacity from "../../components/ModalOpacity";

const Myprofile = () => {
  const { isLogin, userProfileData } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const userID = localStorage.getItem("userID");
  const token = localStorage.getItem("token");
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    gender: "",
    emailMe: true,
  });

  useEffect(() => {
    if (!isLogin) {
      toast.error("Please login to continue");
      navigate("/login");
    }
    toast.dismiss();
    const fetchData = async () => {
      toast.loading("Fetching user data...");
      try {
        if (!userID) {
          toast.error("Kindly login to continue");
          toast.dismiss();
          localStorage.removeItem("token");
          localStorage.removeItem("userID");
          localStorage.removeItem("userName");

          navigate("/login");
        } else {
          setFetching(true);

          const res = await axios.get(
            // `http://localhost:8000/getUserData/${userID}`,
            `https://nuform-backend.vercel.app/getUserData/${userID}`,
            {
              headers: {
                "x-api-key": token,
              },
            }
          );
          const userData = res.data.data;

          setInitialValues((prevValues) => ({
            ...prevValues,
            firstName:
              userData?.shippingAddresses[0]?.firstName || userData?.name || "",
            lastName: userData?.shippingAddresses[0]?.lastName || "",
            email: userData?.email || "",
            phone: userData?.phone || "",
            age: userData?.age || "",
            address: userData?.shippingAddresses[0]?.address || "",
            city: userData?.shippingAddresses[0]?.city || "",
            state: userData?.shippingAddresses[0]?.state || "",
            pincode: userData?.shippingAddresses[0]?.pincode || "",
            gender: userData?.gender || "",
            emailMe: userData?.emailMe || false,
          }));
        }
        toast.dismiss();
        setFetching(false);

        // Assuming response data will be set to state
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Unable to fetch user data");
        toast.dismiss();
        navigate("/login");
        // Handle error, show error message, etc.
      }
    };
    if (Object.keys(userProfileData).length > 0) {
      console.log("Data already exists");
      setFetching(true);
      setInitialValues((prevValues) => ({
        ...prevValues,
        firstName:
          userProfileData?.shippingAddresses[0]?.firstName ||
          userProfileData?.name ||
          "",
        lastName: userProfileData?.shippingAddresses[0]?.lastName || "",
        email: userProfileData?.email || "",
        phone: userProfileData?.phone || "",
        age: userProfileData?.age || "",
        address: userProfileData?.shippingAddresses[0]?.address || "",
        city: userProfileData?.shippingAddresses[0]?.city || "",
        state: userProfileData?.shippingAddresses[0]?.state || "",
        pincode: userProfileData?.shippingAddresses[0]?.pincode || "",
        gender: userProfileData?.gender || "",
        emailMe: userProfileData?.emailMe || false,
      }));
    } else {
      fetchData();
    }
  }, [isLogin, navigate, token, userID, userProfileData]);

  useEffect(() => {
    if (initialValues.email && fetching) {
      setFetching(false);
    }
  }, [initialValues, fetching]);

  const phoneRegExp = /^[6-9]\d{9}$/;
  const pincodeRegExp = /^[0-9]{6}$/;

  const addressSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required*"),
    lastName: Yup.string(),

    phone: Yup.string()
      .matches(phoneRegExp, "Invalid phone number")
      .required("Number is required*"),
    address: Yup.string(),
    state: Yup.string(),
    city: Yup.string(),
    age: Yup.number()
      .max(100, "Age must be less than 100")
      .min(6, "Age must be greater than 6"),
    gender: Yup.string(),
    // address: Yup.string().required("Address is required*"),
    // state: Yup.string().required("State is required*"),
    // city: Yup.string().required("City is required*"),
    pincode: Yup.string().matches(pincodeRegExp, "Invalid Pincode"),
    // .required("Pincode is required*"),
    emailMe: Yup.boolean(),
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

  return (
    <div>
      <div className="container px-1 py-10 mx-auto mb-20 text-justify lg:pb-20 xl:max-w-7xl">
        {fetching ? (
          <div>
            <h1>Loading... </h1>
          </div>
        ) : (
          <Formik
            initialValues={initialValues}
            validationSchema={addressSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setLoading(true);
              try {
                const res = await axios.put(
                  // `http://localhost:8000/updateUserData/${userID}`,
                  `https://nuform-backend.vercel.app/updateUserData/${userID}`,
                  {
                    name: values.firstName,
                    email: values.email,
                    phone: values.phone,
                    age: values.age,
                    gender: values.gender,
                    emailMe: values.emailMe,
                    shippingAddresses: {
                      address: values.address,
                      city: values.city,
                      state: values.state,
                      pincode: values.pincode,
                      firstName: values.firstName,
                      lastName: values.lastName,
                    },
                  },
                  {
                    headers: {
                      "x-api-key": token,
                    },
                  }
                );
                if (res.data.status) {
                  toast.success("Profile updated successfully");
                  setShowButton(false);
                } else {
                  toast.error("Unable to update profile");
                  setShowButton(false);
                }
              } catch (error) {
                // Optionally, handle errors here
                console.error(error);
                toast.error("Something went wrong");
              }
              setLoading(false);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="px-2 rounded-2xl">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <h3 className="text-xl md:text-2xl text-primary sm:col-span-2 lg:col-span-3 ">
                    Personal Information
                  </h3>

                  <div className="w-full ">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="firstName"
                        className="z-10 px-2 -mb-2 leading-7 rounded-md whitespace-nowrap text-primary "
                      >
                        First Name
                      </label>
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        plceholder="Enter you firstname"
                        className=" bg-[#FF0000] font-medium text-white text-sm px-1 py-0.5"
                      />
                    </div>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      // placeholder= ""
                      required
                      className="w-full p-3 rounded-r-full rounded-bl-full outline-none focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="lastName"
                        className="z-10 px-2 -mb-2 leading-7 rounded-md whitespace-nowrap text-primary "
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
                      className="w-full p-3 rounded-r-full rounded-bl-full outline-none focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>
                  <div className="w-full select-none ">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="email"
                        className="z-10 px-2 -mb-2 leading-7 rounded-md whitespace-nowrap text-primary "
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
                      disabled
                      required
                      className="w-full p-3 rounded-r-full rounded-bl-full outline-none cursor-not-allowed select-none focus:ring-primary ring-1 ring-gray-200"
                    />
                    <div className="w-full mt-3">
                      <label
                        htmlFor="emailMe"
                        className="flex items-center -mt-2 text-gray-500 cursor-pointer"
                      >
                        <Field
                          type="checkbox"
                          id="emailMe"
                          name="emailMe"
                          defaultChecked={initialValues.emailMe}
                          className="w-4 h-4 mr-2 bg-primary text-primary"
                        />
                        Email me with news and offers
                      </label>
                    </div>
                  </div>
                  <div className="w-full ">
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <label
                        htmlFor="phone"
                        className="z-10 px-2 -mb-2 leading-7 rounded-md whitespace-nowrap text-primary "
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
                      className="w-full p-3 rounded-r-full rounded-bl-full outline-none focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="age"
                        className="z-10 px-2 -mb-2 leading-7 rounded-md whitespace-nowrap text-primary "
                      >
                        Age
                      </label>
                      <ErrorMessage
                        name="age"
                        component="div"
                        className=" bg-[#FF0000] font-medium text-white text-sm px-1 py-0.5"
                      />
                    </div>
                    <Field
                      type="number"
                      id="age"
                      name="age"
                      // placeholder= ""
                      required
                      className="w-full p-3 rounded-r-full rounded-bl-full outline-none focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="gender"
                        className="z-10 px-2 -mb-2 leading-7 rounded-md whitespace-nowrap text-primary "
                      >
                        Gender
                      </label>
                      <ErrorMessage
                        name="gender"
                        component="div"
                        className=" bg-[#FF0000] font-medium text-white text-sm px-1 py-0.5"
                      />
                    </div>
                    <div className="flex pt-2">
                      <label
                        htmlFor="male"
                        className="flex w-1/3 px-2 py-2 mr-2 border rounded-r-full rounded-bl-full cursor-pointer hover:border-primary "
                      >
                        <Field
                          type="radio"
                          id="male"
                          name="gender"
                          value="Male"
                          className="mr-1"
                        />
                        Male
                      </label>
                      <label
                        htmlFor="female"
                        className="flex w-1/3 px-2 py-2 mr-2 border rounded-r-full rounded-bl-full cursor-pointer hover:border-primary "
                      >
                        <Field
                          type="radio"
                          id="female"
                          name="gender"
                          value="Female"
                          className="mr-1"
                        />
                        Female
                      </label>
                      <label
                        htmlFor="other"
                        className="flex w-1/3 px-2 py-2 mr-2 border rounded-r-full rounded-bl-full cursor-pointer hover:border-primary "
                      >
                        <Field
                          type="radio"
                          id="other"
                          name="gender"
                          value="Other"
                          className="mr-1"
                        />
                        Other
                      </label>
                    </div>
                  </div>

                  {/* <div className="w-full mb-2 ">
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
                </div> */}
                  <h3 className="text-xl sm:col-span-2 md:text-2xl text-primary lg:col-span-3">
                    Shipping Address
                  </h3>

                  <div className="w-full sm:col-span-2 lg:co">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="address"
                        className="z-10 px-2 -mb-2 leading-7 rounded-md whitespace-nowrap text-primary "
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
                      className="w-full p-3 rounded-r-full rounded-bl-full outline-none focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>
                  <div className="w-full ">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="city"
                        className="z-10 px-2 -mb-2 leading-7 rounded-md whitespace-nowrap text-primary "
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
                      className="w-full p-3 rounded-r-full rounded-bl-full outline-none focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>
                  <div className="w-full ">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="state"
                        className="z-10 px-2 -mb-2 leading-7 rounded-md whitespace-nowrap text-primary "
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
                      className="w-full p-3 rounded-r-full rounded-bl-full outline-none focus:ring-primary ring-1 ring-gray-200"
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
                        className="z-10 px-2 -mb-2 leading-7 rounded-md whitespace-nowrap text-primary "
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
                      className="w-full p-3 rounded-r-full rounded-bl-full outline-none focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>
                </div>
                <div className="mt-6 md:mt-10 ">
                  {showButton ? (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`
                     py-4 px-16 bg-primary rounded-r-full text-white hover:scale-95 duration-200 rounded-bl-full  `}
                    >
                      {loading ? "Updating" : "Update Profile"}
                    </button>
                  ) : (
                    <div className="mt-2 text-sm italic text-primary">
                      Your profile has been successfully updated.
                    </div>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
      <ModalSidePanel />
      <ModalCheckout2 />
      <ModalOpacity />
      <Footer />
    </div>
  );
};

export default Myprofile;
