import React, { useEffect, useState } from "react";
import ModalSidePanel from "../../components/ModalSidePanel";
import ModalCheckout2 from "../../components/ModalCheckout2";
// import Footer from "../../components/Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import banner1 from "../../assets/products/Login_Banner.webp";
import { Link, useNavigate } from "react-router-dom";
import { ImSpinner } from "react-icons/im";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useCart } from "../../components/CartProvider";

const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .matches(emailRegExp, "Invalid email"),
  password: Yup.string()
    .required("Password is required")
    .matches(passwordRegExp, "Please enter a valid strong password"),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [shake, setShake] = useState(false);
  const { setIsLogin } = useCart();

  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  const initialValues = {
    email: "",
    password: "",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShake(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [shake]);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await axios
        .post("https://nuform-backend.vercel.app/login", values)
        // .post("http://localhost:8000/login", values)
        .then((response) => {
          localStorage.removeItem("token");
          localStorage.removeItem("userID");
          localStorage.removeItem("userName");
          localStorage.removeItem("email");
          if (response.data.status) {
            localStorage.setItem("token", response.data.data);
            localStorage.setItem("userID", response.data.userID);
            localStorage.setItem("userName", response.data.userName);
            localStorage.setItem("email", values.email);
            toast.success("Login successful");
            setIsLogin(true);
            //  navigate(`/dashboard`);
            setLoading(false);
            // navigate(from, { replace: true });
            navigate("/");
          }
          //  setSubmitting(false);
        })
        .catch((error) => {
          console.error(error);
          toast.error("Invalid Credential");
          //  setSubmitting(false);
          setShake(true);
          setLoading(false);
        });
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
      <div className="z-10 flex flex-col items-center justify-center w-full h-screen px-2 py-10 mx-auto text-justify bg-black bg-opacity-60">
        <div
          className={`w-full max-w-md p-6 py-10  bg-white shadow-lg md:mt-6 rounded-xl shadow-black backdrop-blur ${
            shake && "animate-shake"
          }`}
        >
          <h3 className="mb-4 text-2xl text-center md:text-3xl text-primary">
            Login
          </h3>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="w-full mb-4">
                <div className="flex flex-wrap justify-between mb-2">
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
                  // placeholder= ""
                  required
                  className="w-full p-3 rounded-r-full rounded-bl-full outline-none focus:ring-primary ring-1 ring-gray-200"
                />
              </div>
              <div className="w-full mb-3">
                <div className="flex flex-wrap justify-between mb-2">
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
                    autoComplete="off"
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
              <div className="text-sm italic text-gray-600 cursor-pointer hover:text-primary">
                <Link to="/send-reset-password-mail">Forgot Password?</Link>
              </div>
              <button
                type="submit"
                // disabled={isSubmitting}
                className="py-2.5 px-16 mt-6 bg-primary rounded-r-full rounded-bl-full text-white hover:scale-95 duration-200 mx-auto w-full"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <span>Signing in</span>
                    <ImSpinner className="animate-spin" />
                  </div>
                ) : (
                  "Login"
                )}
              </button>
              <div className="pt-2 text-center">
                <p className="text-gray-600">OR</p>
                <p>
                  Don't have an account?{" "}
                  {!loading && (
                    <Link to="/signup" className="text-primary">
                      Sign up
                    </Link>
                  )}
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="container absolute z-10 w-full h-20 mx-auto mb-2 -translate-x-1/2 top-10 left-1/2 xl:max-w-7xl lg:mb-6 ">
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

export default Login;
