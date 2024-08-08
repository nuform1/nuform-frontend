import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const FAQ = () => {
  const data = [
    {
      no: "01",
      question: "How do I go about consuming the supplements?",
      answer:
        " It’s easy-peasy. Our supplements come in an easy-to-consume powder formula which you can directly have from the stick. A pack of 30 sticks is made for a one month supply. Take one per day for a period  of 90 days. ",
      answer2: "",
    },
    {
      no: "02",
      question: "What kind of testing do you do?",
      answer:
        "Giving you only the best is at the core of our intentions. To ensure we’re only putting out the highest quality products, each product undergoes stringent checks for ingredients, dosage and precision at our facility. To ensure impartiality, we also conduct third-party testing to ensure our products meet regulatory standards and guidelines.      ",
      answer2:
        "Your trust and well-being are of utmost importance to us. That's why we hold ourselves to the highest standards and make testing an integral part of our process. With Nuform, you can have confidence in the quality and consistency of our products.      ",
    },
    {
      no: "03",
      question: "How long until I see results?",
      answer:
        "It takes 21 days for any good habit to be formed. But you’ll see the difference in just 10 days with Skin101 but to see its magic in full power, we recommend taking it for 4 weeks.      ",
      answer2:
        "You can see “second product” in full-blown action within 4-6 weeks, we recommend you take it for 90 days for everlasting effects.      ",
    },
    {
      no: "04",
      question: "How and when should I take the skin supplement?",
      answer:
        "You can gulp the powder before or after food. This hassle free format also helps you take it on the go because we know life is H-E-C-T-I-C!      ",
      answer2: "",
    },
    {
      no: "05",
      question: " Are your supplements suitable for vegetarians/vegans?    ",
      answer:
        "Yes! We offer products suitable for vegetarians. You can find this information clearly labeled on our product packaging and website      ",
      answer2: "",
    },
  ];
  return (
    <section className="">
      <div className="container px-1 pt-20 mx-auto lg:pt-28 ">
        <h3 className="mb-10 text-2xl text-center md:text-3xl text-primary">
          Get every answers
        </h3>{" "}
        {/* <p className="mb-10 text-center text-primary ">
          Your questions answered: discover insights in our nu faq section
        </p> */}
        {/* <div className="flex flex-col border-t">
          {data.map((x, i) => {
            return (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`p-6 duration-200 cursor-pointer  ${
                  index === i ? "bg-white  shadow-md " : " border-b"
                }  `}
              >
                <div className="flex justify-between ">
                  <h5 className="text-xl">
                    <span className="text-primary pr-6  ">{x.no}. </span>{" "}
                    {x.question}
                  </h5>
                  <IoIosArrowDown
                    className={`text-xl text-primary ${
                      index === i && " rotate-180 duration-500"
                    }  `}
                  />
                </div>

                {index === i && (
                  <div className=" md:pl-[55px] pb-2 md:pb-4 pt-4">
                    <p className="pb-2">{x.answer}</p>
                    <p>{x.answer2}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div> */}
        <div className="">
          {data.map((x, i) => {
            return (
              <div
                key={i}
                className={` duration-200 cursor-pointer border-b border-primary rounded mb-3 `}
              >
                <Accordion
                  style={{ boxShadow: "0 1px 1px rgba(0, 0, 0, 0.3)" }}
                  className=""
                >
                  <AccordionSummary
                    expandIcon={<IoIosArrowDown className="text-primary" />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className=""
                  >
                    <h5 className="py-2 md:text-lg lg:text-xl ">
                      <span className="pr-3 text-primary">{x.no}. </span>{" "}
                      {x.question}
                    </h5>
                  </AccordionSummary>
                  <AccordionDetails className="ml-4 -mt-4 lg:ml-12 ">
                    <p className="pb-2 ">{x.answer}</p>
                    <p>{x.answer2}</p>
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center p-1 ">
          {/* <Link
            to="/faq"
            className="relative inline-flex items-center justify-center p-4 px-10 py-2.5 overflow-hidden font-medium  transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group mt-10  "
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
              More Questions?
            </span>
            <span className="relative invisible">More Questions?</span>
          </Link> */}
          <Link to="/faq" className="mt-10">
            <button className="py-4 px-16 bg-primary rounded-full text-white hover:scale-95 duration-200 ">
              More Questions?
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
