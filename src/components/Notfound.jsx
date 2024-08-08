import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import ModalSidePanel from "./ModalSidePanel";
import ModalCheckout2 from "./ModalCheckout2";

const Notfound = () => {
  return (
    <>
      <main className="flex justify-center h-[85vh] min-h-full px-6 bg-white place-items-center lg:px-8 md:h-[90vh] ">
        <div className="text-center ">
          <p className="text-5xl font-semibold text-primary ">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:scale-105 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            {/* <a href="#" className="text-sm font-semibold text-gray-900">
      Contact support <span aria-hidden="true">&rarr;</span>
    </a> */}
          </div>
        </div>
      </main>
      <Footer />
      <ModalSidePanel />
      <ModalCheckout2 />
    </>
  );
};

export default Notfound;
