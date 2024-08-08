import React, { useState } from "react";
import ModalSidePanel from "../../components/ModalSidePanel";
import ModalCheckout2 from "../../components/ModalCheckout2";
// import Footer from "../../components/Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import banner1 from "../../assets/products/Signup_Banner.webp";
import { Link, useNavigate } from "react-router-dom";
import { ImSpinner } from "react-icons/im";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
const phoneRegExp = /^[6-9]\d{9}$/;

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .matches(emailRegExp, "Invalid email"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Invalid phone number"),
  name: Yup.string().required("Name is required").max(50, "Name is too long"),

  password: Yup.string()
    .required("Password is required")
    .matches(
      passwordRegExp,
      "Password must be 6-20 characters and include at least one uppercase letter, one lowercase letter, and one digit."
    ),
});

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    phone: "",
    name: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://nuform-backend.onrender.com/addUserData",
        // "http://localhost:8000/addUserData",
        values
      );

      if (res.data.status) {
        toast.success("Account created successfully");
        navigate(`/login`);
      } else {
        toast.error("Account creation failed");
      }
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <div
      className="relative bg-cover bg-primary"
      style={{ backgroundImage: `url(${banner1})` }}
    >
      <div className="z-10 flex flex-col justify-center w-full h-screen px-2 py-10 mx-auto text-justify bg-black bg-opacity-60 ">
        <div className="w-full max-w-md p-6 py-10 mx-auto bg-white shadow-lg md:mt-6 rounded-xl shadow-black backdrop-blur">
          <h3 className="mb-4 text-2xl text-center md:text-3xl text-primary">
            Sign Up
          </h3>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            <Form className="">
              <div className="w-full mb-2">
                <div className="flex flex-wrap justify-between ">
                  <label
                    htmlFor="name"
                    className="text-lg rounded-md lea1ding-7 text-primary whitespace-nowrap"
                  >
                    First Name
                  </label>
                  <ErrorMessage
                    name="name"
                    component="div"
                    className=" text-[#FF0000] font-medium  text-sm px-1 py-0.5"
                  />
                </div>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your first name here"
                  required
                  className="w-full p-3 rounded-r-full rounded-bl-full outline-none focus:ring-primary ring-1 ring-gray-200"
                />
              </div>
              <div className="w-full mb-2">
                <div className="flex flex-wrap justify-between mb-1">
                  <label
                    htmlFor="phone"
                    className="text-lg rounded-md lea1ding-7 mb- text-primary whitespace-nowrap"
                  >
                    phone
                  </label>
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className=" text-[#FF0000] font-medium  text-sm px-1 py-0.5"
                  />
                </div>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number here"
                  required
                  autoComplete="off"
                  maxLength={10}
                  className="w-full p-3 rounded-r-full rounded-bl-full outline-none focus:ring-primary ring-1 ring-gray-200"
                />
              </div>
              <div className="w-full mb-2">
                <div className="flex flex-wrap justify-between mb-1">
                  <label
                    htmlFor="email"
                    className="text-lg rounded-md lea1ding-7 mb- text-primary whitespace-nowrap"
                  >
                    Email
                  </label>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className=" text-[#FF0000] font-medium  text-sm px-1 py-0.5"
                  />
                </div>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email here"
                  required
                  autoComplete="off"
                  autofill="off"
                  className="w-full p-3 rounded-r-full rounded-bl-full outline-none focus:ring-primary ring-1 ring-gray-200"
                />
              </div>
              <div className="w-full mb-6">
                <div className="flex flex-wrap justify-between mb-1">
                  <label
                    htmlFor="password"
                    className="text-lg rounded-md lea1ding-7 mb- text-primary whitespace-nowrap"
                  >
                    Password
                  </label>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className=" text-[#FF0000] font-medium  text-sm px-1 py-0.5"
                  />
                </div>
                <div className="relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password here"
                    autocomplete="off"
                    autofill="off"
                    required
                    className="w-full p-3 rounded-r-full rounded-bl-full outline-none focus:ring-primary ring-1 ring-gray-200"
                  />
                  <div className="absolute text-xl top-4 right-4 text-primary hover:font-bold hover:scale-110">
                    {showPassword ? (
                      <IoIosEye
                        onClick={() => setShowPassword(false)}
                        className="cursor-pointer"
                      />
                    ) : (
                      <IoIosEyeOff
                        onClick={() => setShowPassword(true)}
                        className="cursor-pointer"
                      />
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                // disabled={isSubmitting}
                className=" py-2.5 px-16 bg-primary rounded-r-full rounded-bl-full text-white hover:scale-95 duration-200 mx-auto w-full uppercase"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2 ">
                    <span>Signing up</span>
                    <ImSpinner className="animate-spin" />
                  </div>
                ) : (
                  "Sign Up"
                )}
              </button>
              <div className="pt-2 text-sm text-center">
                <p className="text-gray-600">OR</p>
                <p>
                  Already have an accout?{" "}
                  {!loading && (
                    <Link
                      to="/login"
                      className="text-base italic select-none text-primary"
                    >
                      Login
                    </Link>
                  )}
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="container absolute z-10 w-full h-20 mx-auto mb-2 -translate-x-1/2 sm:top-10 left-1/2 xl:max-w-7xl lg:mb-6 top-4">
        <div className="container flex items-center justify-between pr-4 mx-auto lg:col-span-7">
          <div className="cursor-pointer ">
            <a href="/">
              <img
                src={require("../../assets/hompage/hero section/logowhite.png")}
                alt=""
                className="h-7"
              />
            </a>
          </div>
          {/* <div className="flex items-center gap-5 sm:gap-6 md:gap-8 ">
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
          </div> */}
        </div>
      </div>
      <ModalSidePanel />
      <ModalCheckout2 />
      {/* <div className="bg-white">
        <Footer />
      </div> */}
    </div>
  );
};

export default SignUp;
