import React from "react";
// import Header from "../../components/Header";
// import bgImage from "../../assets/others/background/contact-us-banner.png";
import ModalSidePanel from "../../components/ModalSidePanel";
// import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import AllFAQ from "./AllFAQ";
import ModalCheckout2 from "../../components/ModalCheckout2";
import ModalOpacity from "../../components/ModalOpacity";

const FAQPage = () => {
  return (
    <div>
      {/* Headers */}
      {/* <div className="pb-20 lg:pb-[100px] scroll-smooth">
        <Header icon={false} />
      </div> */}

      {/* Hero Section */}
      {/* <div
        className="h-[55vh] "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-full h-full text-white bg-black bg-opacity-80">
          <div className="container flex items-center justify-center h-full mx-auto text-center">
            <div>
              <h2 className="pb-4 text-5xl lg:text-6xl">FAQ</h2>
              <p className="text-xl lg:text-2xl">
                <Link to="/" className="pr-4 text-primary">
                  Home
                </Link>
                | <span className="pl-4"> FAQ</span>
              </p>
            </div>
          </div>
         
        </div>
      </div> */}

      {/* FAQ */}
      <AllFAQ />

      {/* Footer */}
      <Footer />
      <ModalSidePanel />
      <ModalCheckout2 />
      <ModalOpacity />
    </div>
  );
};

export default FAQPage;
