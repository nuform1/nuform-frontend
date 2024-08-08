import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TiWorld } from "react-icons/ti";
import { GoArrowUpRight } from "react-icons/go";

const Footer = ({ disclaimer }) => {
  const linksData = [
    [
      {
        name: "Learn",
        href: "/learn",
      },
      // {
      //   name: "Products",
      //   href: "/shop",
      // },
      // {
      //   name: "Join",
      //   href: "/#Join",
      // },
      {
        name: "Shop",
        href: "/shop",
      },

      // {
      //   name: "FAQ",
      //   href: "/faq",
      // },
    ],
    [
      {
        name: "Terms & Condition",
        href: "/tearms-and-condition",
      },
      {
        name: "Privacy Policy",
        href: "/privacy-policy",
      },
      // {
      //   name: "Blog",
      //   href: "/blog",
      // },

      {
        name: "Shipping Policy",
        href: "/shipping-policy",
      },
      {
        name: "Cancellation & Return Policy",
        href: "/cancellation-policy",
      },

      // {
      //   name: "Contact Us",
      //   href: "/contact-us",
      // },
    ],
  ];
  return (
    <div className="">
      <div className="container grid grid-cols-12 gap-6 px-1 pt-16 pb-16 mx-auto border-t sm:gap-10 md:gap-14 xl:max-w-7xl border-primary">
        <div className="col-span-12 md:col-span-7 lg:col-span-3">
          <div className="">
            <img
              src={require("../assets/hompage/hero section/logo.png")}
              alt="Nuform Logo footer"
              className="block mb-6 h-7"
            />
          </div>

          {/* <p className="pb-10 cursor-pointer text-primary ">
            At Nuform, we cut through wellness confusion, offering expert-backed
            support for a clear path to better health in a noisy world of
            trends.
          </p> */}

          <a
            href="https://www.instagram.com/nuform.in/"
            target="_blank"
            rel="noreferrer"
          > <div className="flex items-center justify-center w-10 h-10 mb-6 duration-300 rounded-full cursor-pointer bg-primary">

              <IoLogoInstagram className="text-xl text-white" />

            </div></a>
          {/* <p className="text-sm text-primary ">
            Copyright © 2024 Nuform All Rights Reserved.
          </p> */}
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-2">
          <h3 className="mb-6 text-lg font-bold text-primary md:text-lg">
            About Us
          </h3>
          {linksData[0].map((x, i) => {
            return (
              <Link
                to={x.href}
                key={i}
                className="flex items-center gap-1 pb-4 duration-200 group text-primary "
              >
                <p className="">{x.name}</p>
                <GoArrowUpRight className="hidden group-hover:block" />
              </Link>
            );
          })}
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-3">
          <h3 className="mb-6 text-lg font-bold text-primary md:text-lg">
            Policies
          </h3>
          {linksData[1].map((x, i) => {
            return (
              <Link
                to={x.href}
                key={i}
                className="flex items-center gap-1 pb-4 duration-200 group text-primary "
              >
                <p className="">{x.name}</p>
                <GoArrowUpRight className="hidden group-hover:block" />
              </Link>
            );
          })}
        </div>
        <div className="col-span-12 lg:col-span-3 md:col-span-5">
          <h3 className="mb-6 text-lg font-bold text-primary md:text-lg">
            Contact Us
          </h3>
          <p className="pb-1 duration-200 cursor-pointer text-primary hover:text-primary hover:delay-300">
            B-1001, Jal Vayu Towers, Khairatabad Circle No 17, Hyderabad,
            Telangana, 500080
          </p>

          <a
            href="tel:+91 7671051443"
            className="flex items-center gap-3 pb-1 text-primary"
          >
            <FaPhone className="text-primary " />
            +91 7671051443
          </a>
          <a
            href="mailto:feedback@nuform.in"
            className="flex items-center gap-3 pb-1 text-primary"
          >
            <IoMdMail className="text-primary " />
            feedback@nuform.in
          </a>
          <a
            href="https://nuform.in/"
            className="flex items-center gap-3 pb-1 text-primary"
            target="_blank"
            rel="noreferrer"
          >
            <TiWorld className="text-xl text-primary " />
            nuform.in
          </a>
        </div>
      </div>

      {disclaimer ? (
        <div className="container px-1 py-4 mx-auto border-t xl:max-w-7xl lg:px-0 text-primary">
          <p className="italic font-medium">Disclaimer</p>
          <ul className="flex flex-wrap text-sm list-disc gap-x-4">
            <li className="ml-4">Not for medical use</li>
            <li className="ml-4">
              Do not exceed the stated recommended daily usage.
            </li>
            <li className="ml-4">
              This product is not to be used as a substitute for a varied diet.
            </li>
            <li className="ml-4">
              This product is not intended to diagnose, treat, cure or prevent
              any disease.
            </li>
            <li className="ml-4">
              Consult your doctor in case you are pregnant, lactating or taking
              any other medication.
            </li>
          </ul>
          <p className="py-4 text-opacity-70 hover:text-opacity-100">
            Copyright © 2024 Nuform All Rights Reserved.
          </p>
          {/* <img
            src={require("../assets/hompage/hero section/card_img.png")}
            alt=""
            
          /> */}
        </div>
      ) : (
        <div className="container px-1 py-4 mx-auto border-t xl:max-w-7xl lg:px-0 text-primary">
          Copyright © 2024 Nuform All Rights Reserved.
        </div>
      )}
    </div>
  );
};

export default Footer;

Footer.defaultProps = {
  disclaimer: false,
};
