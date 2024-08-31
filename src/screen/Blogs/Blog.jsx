import React from "react";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import ModalSidePanel from "../../components/ModalSidePanel";
import ModalCheckout2 from "../../components/ModalCheckout2";
import ModalOpacity from "../../components/ModalOpacity";
import { blogsData } from ".";
import { Helmet } from "react-helmet";

const Blog = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <Helmet>
        <title>
          Our latest Blogs | Plant-Based Supplements for Healthy Skin -Nuform
        </title>
        <meta
          name="title"
          content="Our latest Blogs | Plant-Based Supplements for Healthy Skin -Nuform"
        />
        <meta
          name="description"
          content="Blogs on Plant-Based Supplements for Healthy Skin -Nuform"
        />
      </Helmet>
      <div className="container min-h-screen mx-auto mt-10 xl:max-w-7xl">
        <h3 className="mb-6 text-2xl font-medium text-center sm:mb-10 md:text-3xl text-primary xl:text-left">
          Our latest Blogs
        </h3>

        <div className="grid grid-cols-1 gap-4 px-2 pb-10 md:grid-cols-2 xl:grid-cols-3">
          {blogsData.map((blog, index) => (
            <div
              key={index}
              className="relative flex flex-col w-full mx-auto mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl lg:w-96 sm:w-96 md:w-auto "
            >
              {/* <div className="mx-4 -mt-6 ">
                <img src={blog.image} alt={blog.title} className="w-full overflow-hidden rounded-lg" />
              </div> */}
              <div className="mx-4 md:h-56 ">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="relative -mt-6 overflow-hidden text-white rounded-lg shadow-lg bg-clip-border md:rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
                />
              </div>

              <div className="p-6">
                <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {blog.title}
                </h5>
                <p className="my-2 italic">{blog.date}</p>
                <p class="line-clamp-5 text-base antialiased  leading-relaxed text-inherit font-sans">
                  {blog.description}
                </p>

                {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit line-clamp-2">
                  {blog.description}
                </p> */}
              </div>
              <div className="p-6 pt-0">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-primary text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                  onClick={() => navigate(blog.link)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <ModalSidePanel />
      <ModalCheckout2 />
      <ModalOpacity />
    </div>
  );
};

export default Blog;
