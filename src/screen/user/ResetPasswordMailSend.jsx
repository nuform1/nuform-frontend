import React, { useEffect, useState } from "react";
import ModalSidePanel from "../../components/ModalSidePanel";
import ModalCheckout2 from "../../components/ModalCheckout2";
// import Footer from "../../components/Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import banner1 from "../../assets/products/Login_Banner.webp";
import { Link } from "react-router-dom";
import { ImSpinner } from "react-icons/im";
// import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useCart } from "../../components/CartProvider";

const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .matches(emailRegExp, "Invalid email"),
});

const ResetPasswordMailSend = () => {
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [timer, setTimer] = useState(0);
  const { setIsLogin } = useCart();

  const initialValues = {
    email: "",
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShake(false);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [shake]);

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => {
      clearInterval(countdown);
    };
  }, [timer]);

  const handleSubmit = async (values) => {
    if (attempts >= 3) {
      toast.error("You have reached the maximum reset attempts for today.");
      return;
    }
    setLoading(true);
    try {
      await axios
        .post("https://nuform-backend.vercel.app/forgotPassword", values)
        // .post("http://localhost:8000/forgotPassword", values)
        .then((response) => {
          if (response.data.status) {
            toast.success("Password Reset Link Sent to your Email");
            setIsLogin(false);
            setAttempts((prev) => prev + 1);
            setTimer(30); // Start 30 seconds timer
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error(error);
          toast.error("User not found, invalid email address");
          setShake(true);
          setLoading(false);
        });
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
          className={`w-full max-w-md p-6 py-10 bg-white shadow-lg md:mt-6 rounded-xl shadow-black backdrop-blur ${
            shake && "animate-shake"
          }`}
        >
          <h3 className="mb-4 text-2xl text-center text-primary">
            Reset Password
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
                    className="text-lg leading-7 rounded-md mb- text-primary whitespace-nowrap"
                  >
                    Email
                  </label>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-[#FF0000] font-medium text-sm px-1 py-0.5"
                  />
                </div>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your registered email address"
                  required
                  className="w-full p-3 rounded-r-full rounded-bl-full outline-none focus:ring-primary ring-1 ring-gray-200"
                />
              </div>

              <button
                type="submit"
                disabled={loading || timer > 0}
                className={`py-2.5 px-16 mt-4 bg-primary rounded-r-full rounded-bl-full text-white hover:scale-95 duration-200 mx-auto w-full ${
                  loading || timer > 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <span>Sending</span>
                    <ImSpinner className="animate-spin" />
                  </div>
                ) : (
                  ` ${
                    timer > 0
                      ? `Send again after (${timer}s)`
                      : "Get Password Reset Link"
                  }`
                )}
              </button>
              <div className="pt-4 text-center">
                {timer > 0 ? (
                  <p className="text-sm text-primary">
                    Reset password email sent to your mail address. <br />{" "}
                    Kindly check your inbox.
                  </p>
                ) : (
                  <p>
                    Already have password?{" "}
                    {!loading && (
                      <Link to="/login" className="text-primary">
                        Login
                      </Link>
                    )}
                  </p>
                )}
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="container absolute z-10 w-full h-20 mx-auto mb-2 -translate-x-1/2 top-10 left-1/2 xl:max-w-7xl lg:mb-6 ">
        <div className="container flex items-center justify-between pr-4 mx-auto lg:col-span-7">
          <div className="cursor-pointer">
            <a href="/">
              <img
                src={require("../../assets/hompage/hero section/logowhite.png")}
                alt=""
                className="h-7"
              />
            </a>
          </div>
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

export default ResetPasswordMailSend;
