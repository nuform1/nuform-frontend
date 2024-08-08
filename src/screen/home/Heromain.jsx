import React from "react";
// import HeroSection from "./HeroSection";
// import Header from "../../components/Header";
import Cards from "./Cards";
// import Ingredient from "./Ingredient";
// import WhyToChoose from "./WhyToChoose";
import ModalSidePanel from "../../components/ModalSidePanel";
import SupplementPackages from "./SupplementPackages";
// import FAQ from "./FAQ";
import Footer from "../../components/Footer";
// import toast, { Toaster } from "react-hot-toast";
// import HeroSection2 from "./HeroSection2";
import HeroSection from "./HeroSection";
import Cetifications from "./Cetifications";
import Insta from "./Insta";
import ModalCheckout2 from "../../components/ModalCheckout2";
import ModalOpacity from "../../components/ModalOpacity";
import { Helmet } from "react-helmet";

const Heromain = () => {
  // const notifySuccess = () => toast.success("Successfully submitted!");
  // const notifyError = () =>
  //   toast.error("This didn't submitted.", {
  //     style: {
  //       borderRadius: "10px",
  //       background: "red",
  //       color: "#fff",
  //     },
  //   });

  return (
    <>
      <Helmet>
        <title>
          Buy skin care vitamin supplements for glowing skin at Nuform
        </title>
        <meta
          name="title"
          content="Buy skin care vitamin supplements for glowing skin at Nuform"
        />
        <meta
          name="description"
          content="Nuform skin supplements promise radiant skin through a blend of vitamins and antioxidants promoting a healthy complexion from within. Order Online Today."
        />
      </Helmet>

      <div>
        {/* <div className="pb-20 lg:pb-[100px]  ">
        <Header icon={true} />
      </div> */}
        <HeroSection />
        <div className="px-1">
          <Cards />
          {/* <Learn2 /> */}
          {/* <Ingredient /> */}
          {/* <WhyToChoose /> */}
          <SupplementPackages />
          <Insta />
          <Cetifications />

          {/* <Testimonials /> */}
          {/* <FAQ /> */}
          {/* <Contact notifyError={notifyError} notifySuccess={notifySuccess} /> */}
          <Footer />
          <ModalSidePanel />
          <ModalCheckout2 />
          <ModalOpacity />
        </div>
      </div>
    </>
  );
};

export default Heromain;
