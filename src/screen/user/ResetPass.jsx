import React, { useEffect, useState } from "react";
import ModalSidePanel from "../../components/ModalSidePanel";
import ModalCheckout2 from "../../components/ModalCheckout2";
// import Footer from "../../components/Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import banner1 from "../../assets/products/Signup_Banner.webp";
import { useNavigate, useParams } from "react-router-dom";
import { ImSpinner } from "react-icons/im";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useCart } from "../../components/CartProvider";

// const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .matches(passwordRegExp, "Please enter a valid strong password")
    .required("new password is required*"),
  passwordConfirm: Yup.string()
    .required("required*")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const ResetPass = () => {
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const { setIsLogin } = useCart();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { email, token } = useParams();

  useEffect(() => {
    if (!email || !token) {
      toast.error("Invalid Link");
      navigate("/send-reset-password-mail");
    }
    console.log(email, token);
  }, [email, token, navigate]);

  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  const initialValues = {
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
        // .post("http://localhost:8000/resetPassword", {
        .post("https://nuform-backend.onrender.com/resetPassword", {
          email,
          newPassword: values.password,
          resetToken: token,
        })

        .then((response) => {
          if (response.data.status) {
            toast.success("Password Updated Successfully");
            setIsLogin(false);
            //  navigate(`/dashboard`);
            setLoading(false);
            // navigate(from, { replace: true });
            navigate("/login");
          }
          //  setSubmitting(false);
        })
        .catch((error) => {
          console.error(error);
          toast.error("User not found invalid email address");
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
          <h3 className="mb-6 text-2xl text-center text-primary">
            Update Password
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
                    htmlFor="password"
                    className="text-lg rounded-md lea1ding-7 mb- text-primary whitespace-nowrap"
                  >
                    New Password
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
              <div className="w-full mb-4">
                <div className="flex flex-wrap justify-between mb-2">
                  <label
                    htmlFor="passwordConfirm"
                    className="text-lg rounded-md lea1ding-7 mb- text-primary whitespace-nowrap"
                  >
                    Confirm Password
                  </label>
                  <ErrorMessage
                    name="passwordConfirm"
                    component="div"
                    className=" text-[#FF0000] font-medium  text-sm px-1 py-0.5"
                  />
                </div>
                <Field
                  type="password"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  placeholder="Enter new password again to confirm"
                  required
                  className="w-full p-3 rounded-r-full rounded-bl-full outline-none focus:ring-primary ring-1 ring-gray-200"
                />
              </div>

              <button
                type="submit"
                // disabled={isSubmitting}
                className="py-2.5 px-16 mt-4 bg-primary rounded-r-full rounded-bl-full text-white hover:scale-95 duration-200 mx-auto w-full"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <span>Updating new password</span>
                    <ImSpinner className="animate-spin" />
                  </div>
                ) : (
                  "Update Password"
                )}
              </button>
              {/* <div className="pt-4 text-center">
                {/* <p className="text-gray-600">OR</p> 
                <p>
                  Already have password?{" "}
                  {!loading && (
                    <Link to="/login" className="text-primary">
                      Login
                    </Link>
                  )}
                </p>
              </div> */}
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

export default ResetPass;
