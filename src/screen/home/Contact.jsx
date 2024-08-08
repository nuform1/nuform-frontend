import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const phoneRegExp = /^[6-9]\d{9}$/;

const proposelSchema = Yup.object().shape({
  name: Yup.string().required("Name is required*"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required*"),
  phone: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .required("Number is required*"),
  subject: Yup.string().required("Subject is required*"),
  //   company: Yup.string().required("Company name is required*"),
  message: Yup.string().required("Message is required*"),
});

const Contact = ({ notifyError, notifySuccess }) => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    // company: "",
    subject: "",
    message: "",
  };

  const [loading, setLoading] = useState(false);

  return (
    <div id="connect">
      <div className="container gap-10 py-16 mx-auto lg:py-20 xl:max-w-7xl">
        {/* <div className="w-full text-5xl lg:text-6xl lg:w-1/2">
          <div className="container px-1 mx-auto mb-12 overflow-hidden rounded lg:mb-20 ">
            <iframe
              id="map"
              width="100%"
              height="500"
              // loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3806.19024831666!2d78.381187!3d17.450606!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ded9f6f0d7%3A0xa3d91e5d00d50b63!2sCyber%20Towers!5e0!3m2!1sen!2sin!4v1707115793798!5m2!1sen!2sin"
              title="Cyber Towers"
              className=" bg-[#F5F5F5]"
            ></iframe>
          </div>
        </div> */}
        <div className="w-full space-y-6 lg:w-1/2">
          <Formik
            initialValues={initialValues}
            validationSchema={proposelSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setLoading(true);
              axios
                .post("https://nuform-backend.vercel.app/contactform", values)
                .then((response) => {
                  if (response.data.status === true) {
                    // notify();
                    setLoading(false);
                    resetForm({ values: initialValues });
                    notifySuccess();
                  } else {
                    // setError(error.message);
                    notifyError();
                    setLoading(false);
                  }
                  setSubmitting(false);
                })
                .catch((error) => {
                  // console.error(error);
                  //   setError(error.message);
                  notifyError();
                  setLoading(false);
                  // alert(`Invalid data ~ ${error.message}`);
                  setSubmitting(false);
                });
            }}
          >
            {({ isSubmitting }) => (
              <Form className="px-5 md:max-w-3xl ">
                {/* <p className="mb-6 text-lg text-center text-primary lg:text-left">
                  .. Request make ..
                </p> */}
                <h3 className="mb-10 text-2xl text-center md:text-3xl text-primary lg:text-left">
                  Asked anything you want to know
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="w-full ">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="name"
                        className="text-xl leading-7 whitespace-nowrap "
                      >
                        Full Name
                      </label>
                      <ErrorMessage
                        name="name"
                        component="div"
                        className=" bg-[#FF0000] font-medium text-white text-sm px-1 py-0.5"
                      />
                    </div>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter here"
                      required
                      className="w-full p-4 outline-none focus:ring-primary ring-1 ring-gray-200 "
                    />
                  </div>

                  <div className="w-full ">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="email"
                        className="text-xl leading-7 whitespace-nowrap "
                      >
                        Email Address
                      </label>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className=" bg-[#FF0000] font-medium text-white text-sm px-1 py-0.5"
                      />
                    </div>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter here"
                      required
                      className="w-full p-4 outline-none focus:ring-primary ring-1 ring-gray-200"
                    />
                  </div>
                  <div className="w-full ">
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <label
                        htmlFor="phone"
                        className="text-xl leading-7 whitespace-nowrap "
                      >
                        Phone Number
                      </label>
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className=" bg-[#FF0000] font-medium text-white text-sm px-1 py-0.5"
                      />
                    </div>
                    <Field
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Enter here"
                      maxLength={10}
                      required
                      className="w-full p-4 font-semibold outline-none focus:ring-primary ring-1 ring-gray-200 "
                    />
                  </div>

                  {/* <div className="w-full mb-6">
                  <Field
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company* "
                    required
                    className="w-full py-1 font-semibold border-b outline-none placeholder:text-md placeholder:text-black placeholder:font-medium"
                  />
                  <ErrorMessage
                    name="company"
                    component="div"
                     className=" bg-[#FF0000] font-medium text-white text-sm px-1 py-0.5"
                  />
                </div> */}
                  <div className="w-full ">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="subject"
                        className="text-xl leading-7 whitespace-nowrap "
                      >
                        Subject
                      </label>
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className=" bg-[#FF0000] font-medium text-white text-sm px-1 py-0.5"
                      />
                    </div>

                    <Field
                      as="select"
                      className="w-full p-4 outline-none focus:ring-primary ring-1 ring-gray-200"
                      name="subject"
                      id="subject"
                      required
                      placeholder="Select Subject"
                    >
                      <option value="" disabled className="bg-gray-100 ">
                        Select Subject
                      </option>
                      <option
                        value="Delivery & Orders"
                        className="bg-gray-100 "
                      >
                        Delivery & Orders
                      </option>
                      <option value="Diet & Exercise" className="bg-gray-100 ">
                        Diet & Exercise
                      </option>
                      <option
                        value="Marketing & Press"
                        className="bg-gray-100 "
                      >
                        Marketing & Press
                      </option>
                      <option
                        value="Share Your Success"
                        className="bg-gray-100 "
                      >
                        Share Your Success
                      </option>
                      <option
                        value="Wholesale And Returns"
                        className="bg-gray-100 "
                      >
                        Wholesale And Returns
                      </option>
                    </Field>
                  </div>

                  <div className="w-full sm:col-span-2">
                    <div className="flex flex-wrap justify-between mb-2">
                      <label
                        htmlFor="message"
                        className="text-xl leading-7 whitespace-nowrap "
                      >
                        Message
                      </label>
                      <ErrorMessage
                        name="message"
                        component="div"
                        className=" bg-[#FF0000] font-medium text-white text-sm px-1 py-0.5"
                      />
                    </div>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="Enter here"
                      className="w-full p-4 outline-none focus:ring-primary ring-1 ring-gray-200"
                    ></Field>
                  </div>
                </div>
                <div className="w-full mt-6 md:mt-12">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                     py-4 px-16 bg-primary rounded-full text-white hover:scale-95 duration-200  `}
                  >
                    {loading ? "Requesting" : "Make Request"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
