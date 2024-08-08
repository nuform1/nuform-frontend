import React, { useEffect, useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
import toast from "react-hot-toast";
import axios from "axios";

const Reviews = ({ id }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(null);
  const [clickedStar, setClickedStar] = useState(null);
  const [data, setData] = useState([]);
  // const [page, setPage] = React.useState(1);
  const phoneRegExp = /^[6-9]\d{9}$/;
  const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required*"),
    email: Yup.string()
      .matches(emailRegExp, "Email is not valid")
      .required("Email is required*"),
    // rating: Yup.number().required("Rating is required*"),
    phone: Yup.string().matches(phoneRegExp, "Phone is not valid"),

    title: Yup.string().max(1000),
    review: Yup.string().required("Review is required*").max(5000),
  });

  const initialValues = {
    name: "",
    email: "",
    // rating: "",
    phone: "",
    review: "",
    title: "",
  };

  const handleMouseEnter = (index) => {
    setHoveredStar(index);
  };

  const handleMouseLeave = () => {
    setHoveredStar(null);
  };

  const handleClick = (index) => {
    setClickedStar(index);
    // console.log(clickedStar);
  };

  // const handleChange = (event, value) => {
  //   setPage(value);
  //   console.log(page);
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(
  //         `http://localhost:8000/getProductReview`,
  //         // `https://nuform-backend.onrender.com/getProductReview/`,
  //         {
  //           params: {
  //             productId: id,
  //             limit: 20,
  //           },
  //         }
  //       );
  //       setData(res.data.data);
  //       console.log(res.data.data);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //       toast.error("Unable to fetch user data");
  //     }
  //   };
  //   fetchData();
  // }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          // `http://localhost:8000/getProductReview`,
          `https://nuform-backend.onrender.com/getProductReview/`,
          {
            params: {
              productId: id,
              limit: 20,
            },
          }
        );

        // if(res.data.data.length > 0){
        //   setAvgRating(res.data.averageRating);
        // }
        // console.log(res.data)
        // Add 'daysAgo' property to each review object
        const updatedData = res.data.data.map((review) => {
          const createdAt = new Date(review.createdAt);
          const now = new Date();

          const diff = now - createdAt;
          const seconds = Math.floor(diff / 1000);
          let daysAgo = "";
          let avgRating = res.data.averageRating;

          if (seconds < 60) {
            daysAgo = "Just now";
          } else if (seconds < 3600) {
            daysAgo = Math.floor(seconds / 60) + " min ago";
          } else if (seconds < 86400) {
            daysAgo = Math.floor(seconds / 3600) + " hours ago";
          } else {
            const days = Math.floor(seconds / 86400);
            daysAgo = days + " day" + (days > 1 ? "s" : "") + " ago";
          }

          return {
            ...review,
            daysAgo,
            avgRating,
          };
        });

        setData(updatedData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Unable to fetch user data");
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="container px-2 py-6 mx-auto mt-6 xl:max-w-7xl rounded-xl">
      <h3 className="mb-4 text-xl font-light select-none md:text-2xl text-primary lg:mb-6 ">
        Customer Reviews
      </h3>{" "}
      <div className="flex items-center justify-between mb-4 ">
        <div>
          <div className="flex gap-2 text-xl text-primary">
            {/* <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf /> */}
            {[0, 1, 2, 3, 4].map((index) => (
              <div>
                {index < (data.length > 0 ? data[0].avgRating : 0) ? (
                  <BsStarFill />
                ) : (
                  // ) : index === item.rating ? (
                  //   <BsStarHalf />
                  <BsStar />
                )}
              </div>
            ))}
          </div>
          <div className="mt-2 text-sm">Based on {data.length} reviews</div>
        </div>
        <div
          onClick={() => setVisible(!visible)}
          className="px-4 py-2 text-sm text-center text-white duration-200 border rounded-full cursor-pointer select-none min-w-32 md:px-6 bg-primary hover:scale-95 md:text-base"
        >
          {visible ? "Cancel" : " Write a review"}
        </div>
      </div>
      {visible && (
        <div className="px-2 py-6 border rounded-lg ">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setLoading(true); // Assuming setLoading is a state setter function
              // Assuming setSubmitting is a state setter function
              toast.dismiss();
              if (clickedStar === null) {
                toast.error("Please select a rating");
                return;
              }
              try {
                // toast.loading("Submitting your review...");
                const userID = localStorage.getItem("userID");
                values.rating = clickedStar + 1;
                values.product = id;
                const res = await axios.post(
                  // "http://localhost:8000/addEditProductReview",
                  "https://nuform-backend.onrender.com/addEditProductReview",
                  {
                    userPhone: values.phone,
                    userEmail: values.email,
                    name: values.name,
                    rating: values.rating,
                    comment: values.review,
                    title: values.title,
                    product: values.product,
                    user: userID ? userID : null,
                  }
                );
                console.log(res);
                if (res.data.status) {
                  toast.success("Review submitted successfully");
                  resetForm();
                  setVisible(false);
                  data.unshift({
                    name: values.name,
                    rating: values.rating,
                    comment: values.review,
                    title: values.title,
                    daysAgo: "Just now",
                    averageRating: data.length > 0 ? data[0].avgRating : 0,
                  });
                } else {
                  toast.error("Failed to submit review");
                }
                //

                console.log(values);
              } catch (error) {
                // Optionally, handle errors here
                toast.error("Failed to submit review");
              }
              setLoading(false); // Set loading to false after submission attempt, whether successful or not
              setSubmitting(false); // Set submitting to false after submission attempt
            }}
          >
            {({ isSubmitting }) => (
              <Form className="px-2 rounded-2xl">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 ">
                  <div className="px-2 text-lg sm:col-span-2 md:col-span-3 text-primary md:text-xl">
                    Persnol Details :
                  </div>
                  <div className="w-full ">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="name"
                        className="z-10 px-2 mb-1 leading-7 text-gray-600 rounded-md whitespace-nowrap "
                      >
                        Name *
                      </label>
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="  font-medium text-red-600 text-sm px-1 py-0.5"
                      />
                    </div>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name (public)"
                      required
                      className="w-full p-3 rounded-lg outline-none focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>
                  <div className="w-full ">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="email"
                        className="z-10 px-2 mb-1 leading-7 text-gray-600 rounded-md whitespace-nowrap "
                      >
                        Email*
                      </label>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="  font-medium text-red-600 text-sm px-1 py-0.5"
                      />
                    </div>
                    <Field
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Enter your email (private)"
                      required
                      className="w-full p-3 rounded-lg outline-none focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>
                  <div className="w-full ">
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <label
                        htmlFor="phone"
                        className="z-10 px-2 mb-1 leading-7 text-gray-600 rounded-md whitespace-nowrap "
                      >
                        Mobile Number{" "}
                        <span className="text-gray-400"> - ( optional )</span>
                      </label>
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="  font-medium text-red-600 text-sm px-1 py-0.5"
                      />
                    </div>
                    <Field
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Enter your mobile number (private)"
                      maxLength={10}
                      className="w-full p-3 rounded-lg outline-none focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>
                  <div className="px-2 pt-2 text-lg sm:col-span-2 md:col-span-3 text-primary md:text-xl">
                    Review Details :
                  </div>
                  <div className="w-full sm:col-span-2">
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <label
                        htmlFor="title"
                        className="z-10 px-2 mb-1 leading-7 text-gray-600 rounded-md whitespace-nowrap "
                      >
                        Title
                      </label>
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="  font-medium text-red-600 text-sm px-1 py-0.5"
                      />
                    </div>
                    <Field
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Enter your title (optional)"
                      maxLength={100}
                      required
                      className="w-full p-3 rounded-lg outline-none focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>
                  <div className="px-2 space-y-2 ">
                    <div className="mb-1 leading-7 text-gray-600 rounded-md whitespace-nowrap">
                      Rating
                    </div>

                    <div className="flex items-center gap-2 text-2xl md:mt-4 ">
                      {[0, 1, 2, 3, 4].map((index) => (
                        <div
                          key={index}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={handleMouseLeave}
                          onClick={() => handleClick(index)}
                        >
                          {(hoveredStar !== null && index <= hoveredStar) ||
                          (clickedStar !== null && index <= clickedStar) ? (
                            <div className="flex">
                              <BsStarFill className="cursor-pointer text-primary" />
                            </div>
                          ) : (
                            <BsStar className="cursor-pointer text-primary" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full sm:col-span-2 md:col-span-3">
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <label
                        htmlFor="review"
                        className="z-10 px-2 mb-1 leading-7 text-gray-600 rounded-md whitespace-nowrap "
                      >
                        Review
                      </label>
                      <ErrorMessage
                        name="review"
                        component="div"
                        className="  font-medium text-red-600 text-sm px-1 py-0.5"
                      />
                    </div>
                    <Field
                      as="textarea"
                      id="review"
                      name="review"
                      placeholder="Write your comments here"
                      maxLength={5013}
                      required
                      className="w-full p-3 rounded-lg outline-none min-h-28 max-h-36 lg:max-h-48 focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2.5 text-sm text-center text-white duration-200 border rounded-full cursor-pointer select-none min-w-32 md:px-8 bg-primary hover:scale-95 md:text-base w-min whitespace-nowrap"
                  >
                    {loading ? "Submitting your review" : " Submit Review"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
      <div className="mt-10 ">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="flex px-2 py-4 border-t md:pt-6">
              <div className="">
                <div className="flex items-center justify-center w-10 h-10 mt-1 text-white rounded-full bg-primary">
                  {item.name[0]}
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between w-full px-2 mb-4 md:px-4 ">
                  <div className="">
                    <div className="pb-1 text-lg italic text-primary">
                      {item.name}
                    </div>
                    <div className="flex gap-1 text-lg text-primary">
                      {[0, 1, 2, 3, 4].map((index) => (
                        <div key={index}>
                          {index < item.rating ? (
                            <BsStarFill />
                          ) : (
                            // ) : index === item.rating ? (
                            //   <BsStarHalf />
                            <BsStar />
                          )}
                        </div>
                      ))}

                      {/* <BsStarHalf /> */}
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="text-gray-500">{item?.daysAgo}</div>
                  </div>
                </div>
                <div className="px-2 pb-4 md:px-4 md:pb-6">
                  <div className="mb-2 text-lg text-primary">{item.title}</div>
                  <div className="text-sm">{item.comment}</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className=" text-primary">
            Be the first to review this product.
          </div>
        )}
        {/* <div className="flex items-end justify-center gap-2 mt-4">
          <div className="flex items-center justify-center text-white border rounded-full w-9 h-9 border-primary bg-primary">
            1
          </div>
          <div className="flex items-center justify-center w-8 h-8 border rounded-full border-primary text-primary">
            2
          </div>
          <div className="flex items-center justify-center w-8 h-8 border rounded-full border-primary text-primary">
            3
          </div>
          <div className="text-primary">. . . </div>
          <div className="flex items-center justify-center w-8 h-8 border rounded-full border-primary text-primary">
            8
          </div> 
        </div>*/}
        {/* <div className="flex items-end justify-center gap-2 mt-4">
          <Stack spacing={2}>
            <Pagination
              count={5}
              // variant="outlined"
              // color="primary"
              onChange={handleChange}
              showFirstButton
              showLastButton
              // size="small"
            />
          </Stack>
        </div> */}
      </div>
    </div>
  );
};

export default Reviews;
