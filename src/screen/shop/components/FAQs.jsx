import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IoIosArrowDown } from "react-icons/io";
import { faqData } from "../../../constant";

const FAQs = () => {
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const questionsToShow = showAllQuestions ? faqData : faqData.slice(0, 5);
  return (

      <div className="container px-2 py-6 mx-auto mt-6 xl:max-w-7xl rounded-xl">
        <h3 className="mb-4 text-xl font-light select-none md:text-2xl text-primary lg:mb-6 ">
          FAQs
        </h3>
        {questionsToShow.map((item, index) => (
          <Accordion
            key={index}
            style={{ boxShadow: "0 1px 1px rgba(0, 0, 0, 0.3)" }}
          >
            <AccordionSummary
              expandIcon={<IoIosArrowDown className="text-primary" />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <p className="py-2 md:text-lg text-primary">
                {`${index + 1}. ${item.question}`}
              </p>
            </AccordionSummary>
            <AccordionDetails className="-mt-4">
              <p>{item.answer}</p>
            </AccordionDetails>
          </Accordion>
        ))}
        {!showAllQuestions && (
          <button
            aria-label="Add to cart"
            type="button"
            className="px-4 py-2 mx-auto mt-6 text-white duration-200 border rounded-full md:px-6 bg-primary hover:scale-95"
            onClick={() => setShowAllQuestions(true)}
          >
            Show all questions
          </button>
        )}
      </div>
   
  );
};

export default FAQs;
