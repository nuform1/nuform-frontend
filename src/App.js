import { Routes, Route, useLocation } from "react-router-dom";
import Heromain from "./screen/home/Heromain";
import ShopPage from "./screen/shop/ShopPage";
import Notfound from "./components/Notfound";
// import FAQPage from "./screen/FAQ/FAQPage";
import { useEffect, useState } from "react";

// import Checkout from "./screen/checkout/Checkout";
// import ContactUs from "./screen/contactus/ContactUs";
import Learn from "./screen/learn/Learn";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import ProductDetails2 from "./screen/shop/ProductDetails2";
import ProductDetailsPeach2 from "./screen/shop/ProductDetailsPeach2";
import Privacy from "./screen/privacy/Privacy";
// import Blog from "./screen/Blogs/Blog";
import TermsAndConditions from "./screen/privacy/TermsAndConditions";
import ShippingPolicy from "./screen/privacy/ShippingPolicy";
import CancellationAndReturn from "./screen/privacy/CancellationAndReturn";
import Checkout2 from "./screen/checkout/Checkout2";
import Login from "./screen/user/Login";
import AdminDashboard from "./screen/dashboard/AdminDashboard";
import UsersDashboard from "./screen/dashboard/UsersDashboard";
// import InoviceGenerator from "./screen/checkout/InoviceGenerator";
import SignUp from "./screen/user/SignUp";
import Myprofile from "./screen/user/Myprofile";
import AllOrders from "./screen/user/AllOrders";
import ThankYou from "./screen/ThankYou/ThankYou";
import ResetPasswordMailSend from "./screen/user/ResetPasswordMailSend";
import ResetPass from "./screen/user/ResetPass";
import axios from "axios";
import Blog from "./screen/Blogs/Blog";
import BlogDetails from "./screen/Blogs/BlogDetails";

// import PaymentPage from "./screen/checkout/PaymentPage";

function App() {
  const { pathname } = useLocation();
  const isShow =
    pathname === "/checkout" ||
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname.startsWith("/resetpassword/") ||
    // pathname === "/invoice" ||
    pathname === "/send-reset-password-mail" ||
    // pathname === "/user-profile" ||
    pathname === "/admin-dashboard"
      ? false
      : true;

 useEffect(() => {
   const fetchData = async () => {
     try {
       await axios.get("https://nuform-backend.onrender.com/test-me");
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };

   const intervalId = setInterval(() => {
     fetchData();
   }, 5000);

   // Clean up the interval when the component unmounts or useEffect runs again
   return () => clearInterval(intervalId);

   // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (sessionStorage.getItem("visible") === "false") return setVisible(false);
    setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("visible", false);
    }, 500);
  }, []);

  return (
    <div>
      {visible ? (
        <div className="">
          <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full ">
            <img
              src={require("./assets/hompage/hero section/logo.png")}
              alt=""
              className="w-[150px] animate-pulse"
            />
          </div>
        </div>
      ) : (
        <div className="">
          {isShow && (
            <div className="pb-20 lg:pb-24 scroll-smooth">
              <Header />
            </div>
          )}
          <Routes>
            <Route exact path="/" element={<Heromain />} />
            <Route exact path="/learn" element={<Learn />} />
            {/* <Route exact path="/join" element={<Learn />} /> */}
            <Route exact path="/shop" element={<ShopPage />} />
            <Route exact path="/checkout" element={<Checkout2 />} />

            <Route
              exact
              path="/product/SKIN-101/black-grape"
              element={<ProductDetails2 />}
            />
            <Route
              exact
              path="/product/SKIN-101/peach"
              element={<ProductDetailsPeach2 />}
            />
            {/* <Route exact path="/contact" element={<ContactUs />} /> */}
            {/* <Route exact path="/faq" element={<FAQPage />} /> */}
            <Route exact path="/blogs" element={<Blog />} />
            <Route exact path="/blogs/:title" element={<BlogDetails />} />
            <Route exact path="/privacy-policy" element={<Privacy />} />
            <Route exact path="/shipping-policy" element={<ShippingPolicy />} />
            <Route
              exact
              path="/cancellation-policy"
              element={<CancellationAndReturn />}
            />
            <Route
              exact
              path="/tearms-and-condition"
              element={<TermsAndConditions />}
            />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/admin-dashboard" element={<AdminDashboard />} />
            <Route exact path="/user-profile" element={<UsersDashboard />} />
            {/* <Route exact path="/payment" element={<PaymentPage />} /> */}
            {/* <Route exact path="/invoice" element={<InoviceGenerator />} /> */}
            <Route exact path="/profile" element={<Myprofile />} />
            <Route exact path="/orders" element={<AllOrders />} />
            <Route exact path="/thank-you" element={<ThankYou />} />
            <Route
              exact
              path="/send-reset-password-mail"
              element={<ResetPasswordMailSend />}
            />
            <Route
              exact
              path="/resetpassword/:email/:token"
              element={<ResetPass />}
            />

            <Route path="*" element={<Notfound />} />
          </Routes>
          <Toaster reverseOrder={false} />
        </div>
      )}
    </div>
  );
}

export default App;
