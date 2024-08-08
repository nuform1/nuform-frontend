import React from "react";
import ModalCheckout2 from "../../components/ModalCheckout2";
import Footer from "../../components/Footer";
import ModalSidePanel from "../../components/ModalSidePanel";
import ModalOpacity from "../../components/ModalOpacity";
import { Helmet } from "react-helmet";

const Learn = () => {
  return (
    <>
      <Helmet>
        <title>
          Learn about the Plant-Based Supplements for Healthy Skin-Nuform
        </title>
        <meta
          name="title"
          content="Learn about the Plant-Based Supplements for Healthy Skin-Nuform"
        />
        <meta
          name="description"
          content="Designed to nourish and protect, Nuform aims to enhance skin's natural radiance and combat the effects of aging for a revitalized look. Order online today!"
        />
      </Helmet>
      <div className="min-h-screen p-2">
        <div className="container mx-auto mt-6 mb-10 md:mt-10 xl:max-w-7xl">
          <h3 className="mb-5 text-2xl font-light select-none md:text-3xl text-primary ">
            About us
          </h3>
          <h4 className="mb-3 text-lg font-light select-none md:text-xl text-primary lg:hidden">
            Nurturing Bodies, Nurturing Minds:
          </h4>
          <div className="flex flex-col-reverse gap-4 mb-10 lg:flex-row ">
            <div className="flex flex-col justify-center lg:w-1/2">
              <h4 className="hidden mb-3 text-lg font-light select-none md:text-xl text-primary lg:block">
                Nurturing Bodies, Nurturing Minds:
              </h4>
              <p className="pb-3 ">
                We get it—life's a juggling act, and health often takes a back
                seat. But Nuform rebels against the chaos. We're here to
                effortlessly bridge that nutrition gap. No info overload or
                confusing ingredients—just , well-researched, plant-based
                supplements, precisely designed to help you achieve your optimal
                form.
              </p>
              <p className="">
                It's your devoted ally on the quest for better health, a vibrant
                body, and a mind that’s at ease. Our vibe? Confident, but not
                the flashy kind. We're the friend who shoots straight—no
                sugar-coating, no empty promises. Nuform carves its own path
                with simplicity and clarity, zeroing in on what genuinely
                matters—your 'nu form'!
              </p>
            </div>
            <div className="flex items-center my-4 lg:justify-center lg:w-1/2">
              <img
                src={require("../../assets/hompage/hero section/Nuturing_Bodies.webp")}
                alt=""
                className="w-[20rem]  md:w-[28rem]  lg:w-[32rem]   lg:mx-auto rounded-xl  "
                loading="lazy"
              />
            </div>
          </div>
          <h3 className="mb-5 text-2xl font-light select-none md:text-3xl text-primary ">
            Approach
          </h3>
          <h4 className="mb-3 text-lg font-light select-none lg:hidden md:text-xl text-primary ">
            Balancing act:
          </h4>
          <div className="flex flex-col gap-2 my-10 lg:flex-row">
            <div className=" lg:w-1/2">
              <video className="w-[22rem] " autoPlay loop muted>
                <source
                  src={require("../../assets/hompage/main area/insta/video-1.mp4")}
                  type="video/mp4"
                  className="mx-auto "
                />
              </video>
            </div>{" "}
            <div className="flex flex-col justify-center lg:w-1/2">
              {/* <h3 className="hidden mb-5 text-2xl font-light select-none md:text-3xl text-primary lg:block">
                Approach
              </h3> */}
              <h4 className="hidden mb-3 text-lg font-light select-none md:text-xl text-primary lg:block">
                Balancing act:
              </h4>
              <p>
                In the hustle and bustle of modern life, finding balance is key.
              </p>
              <p className="pt-3">
                At Nuform, we're all about helping you live your best life. In
                our relentless pursuit of success, we often neglect our bodies
                and minds, pushing them beyond their limits.
              </p>
              <p className="pt-3">
                We're here for those who crave more – more energy in their days,
                more fulfillment in their lives, and more from their supplements
                without compromising quality or value. Our promise to you is
                paramount, and we're devoted to delivering excellence in every
                aspect: from product quality and transparency to efficient
                delivery format, optimal performance and delicious taste.
              </p>
            </div>
          </div>
          {/* <h3 className="mb-5 text-2xl font-light select-none md:text-3xl text-primary ">
            About us
          </h3> */}
          <h4 className="mb-3 text-lg font-light select-none md:text-xl text-primary lg:hidden">
            Science Meets Simplicity:
          </h4>
          <div className="flex flex-col-reverse gap-4 mb-10 lg:flex-row">
            <div className="flex flex-col justify-center lg:w-1/2">
              <h4 className="hidden mb-3 text-lg font-light select-none md:text-xl text-primary lg:block">
                Science Meets Simplicity:
              </h4>
              <p className="pb-4 ">
                Crafted with precision and care, our products are designed to
                nurture your body with utmost effectiveness. We delicately
                tailor the form and formulation to optimise the digestion and
                absorption of each nutrient, ensuring a gentle and seamless
                experience, allowing you to reap the full benefits effortlessly.
              </p>
            </div>
            <div className="flex items-center my-4 lg:justify-center lg:w-1/2">
              <img
                src={require("../../assets/hompage/hero section/learn3.webp")}
                alt=""
                className="w-[20rem]  lg:w-[22rem]    lg:mx-auto rounded-xl  "
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <ModalSidePanel />
      <ModalCheckout2 />
      <ModalOpacity />
      <Footer />
    </>
  );
};

export default Learn;
