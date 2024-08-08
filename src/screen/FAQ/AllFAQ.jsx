import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const AllFAQ = () => {
  const [index, setIndex] = useState(0);
  const data = [
    {
      no: "01",
      question: "How do I go about consuming the supplements?",
      answer:
        " It’s easy-peasy. Our supplements come in an easy-to-consume powder formula which you can directly have from the stick. A pack of 30 sticks is made for a one month supply. Take one per day for a period  of 90 days. ",
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
    },
    {
      no: "05",
      question: " Are your supplements suitable for vegetarians/vegans?    ",
      answer:
        "Yes! We offer products suitable for vegetarians. You can find this information clearly labeled on our product packaging and website",
    },
    {
      no: "06",
      question: " Is it Halal certified?      ",
      answer: "Yes, It is Halal & Kosher certified.      ",
    },
    {
      no: "07",
      question: "Is it FSSAI certified ?      ",
      answer:
        "Nuform proudly holds FSSAI certification, ensuring that our products meet the highest standards of safety and quality. Your well-being is our top priority, and our FSSAI certification is a testament to our commitment to delivering trusted and reliable nutritional supplements.      ",
    },
    {
      no: "08",
      question: "How many servings in a jar ?",
      answer:
        "We have 30 servings in a jar, covering you for an entire month’s worth of doses!",
    },
    {
      no: "09",
      question: "CAN PREGNANT WOMEN TAKE XYZ?",
      answer:
        "Beauty formula with Vitamin A? Pregnant women should steer clear. But hey, our glutathione's good to go—just loop in your doctor before diving into these supplements. Safety first, you know?",
    },
    {
      no: "10",
      question: "SHOULD NUFORM SUPPLEMENTS BE TAKEN WITH OR WITHOUT FOOD?",
      answer:
        "No need to fuss about timing with our supplements. Take them whenever it suits you—morning, night, or stirred into your afternoon munchies. Flexibility, because we get you.",
    },
    {
      no: "11",
      question: "HOW DO GLUTATHIONE SUPPLEMENTS HELP IMPROVE SKIN RADIANCE?",
      answer:
        "The powerful blend of Glutathione, marine collagen, and SkinAx²™ boosts skin luminosity and fights aging. As a potent antioxidant, Glutathione reduces Melanin, giving you an even, glowing complexion.",
      answer2:
        "It's not just about beauty—Glutathione is a detox agent, addressing acne, pigmentation, and other skin concerns while purifying your system. Your shortcut to healthier, radiant skin.",
      answer3:
        "Please go through the link. There are interesting ways we can talk about product through benefits but with pictorial/icons presentation.",
      link: "https://wellbeingnutrition.com/products/glow-collagen-powder-for-skin#",
    },
    {
      no: "12",
      question:
        "DOES ABC CLEAR CYSTIC ACNE? (FOR THE INGESTIBLE BEAUTY FORMULA)",
      answer:
        "ABC supports your natural elimination processes and offers antioxidant support. Perfect for tackling breakouts and non-cystic acne. For the tougher stuff like cystic acne, it's a smart move to consult your dermatologist.",
    },
    {
      no: "13",
      question: "IS IT GLUTEN FREE? IS IT NON GMO?",
      answer: "Absolutely, yes! Our products are both Gluten-free and Non-GMO.",
    },
    {
      no: "14",
      question: "HOW LONG SHOULD IT BE CONSUMED?",
      answer:
        "Stick with it for up to 3 months. Here's the deal: Take 2 sticks daily for 2-3 months, and get ready to witness visibly reduced skin pigmentation, increased skin elasticity, and a radiant glow that speaks volumes.",
    },
    {
      no: "15",
      question: "CAN I CONTINUE MY SKINCARE ROUTINE WHILE CONSUMING THIS?",
      answer:
        "Yes, it is completely safe to continue using topical skincare products.",
    },
    {
      no: "16",
      question: "ARE THERE ANY SIDE EFFECTS?",
      answer:
        "The ingredients used are classified as dietary supplements & are within the RDA% recommended by ICMR. As a best practice, pregnant or nursing or anyone with chronic medical conditions should consult a physician before consuming the products.",
    },
    {
      no: "17",
      question:
        "      CAN THIS PRODUCT BE COMBINED WITH THE OTHER PRODUCT BY THE BRAND?",
      answer:
        "Absolutely, yes! Our products are meticulously crafted to complement each other seamlessly, and you can confidently combine them. Rest assured, this combination is designed to enhance the benefits, ensuring you receive the utmost support.",
    },
  ];

  return (
    <div className="container px-1 py-10 mx-auto lg:pb-20 lg:max-w-7xl">
      {/* <p className="mb-6 text-center text-primary lg:text-left">
        .. ASK QUESTION ..
      </p> */}
      <h3 className="mb-10 text-2xl text-center md:text-3xl text-primary">
        Frequently Asked Questions
      </h3>

      {data.map((x, i) => {
        return (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`p-6 duration-200 cursor-pointer  ${
              index === i ? "bg-white  shadow-md" : " border-b"
            }  `}
          >
            <div className="flex justify-between ">
            <h5 className="text-lg ">
                <span className="pr-6 text-primary ">{x.no}. </span>{" "}
                {x.question}
              </h5>
              <IoIosArrowDown
                className={`text-xl  ${
                  index === i
                    ? "text-[#FAA432] rotate-180 duration-500"
                    : "text-[#777777]"
                }  `}
              />
            </div>

            {index === i && (
              <div className="text-[#777777] md:pl-[50px] pb-2 md:pb-4">
                <p className="pb-2">{x.answer}</p>

                {x.answer2 && <p className="pb-2">{x.answer2}</p>}
                {x.answer3 && (
                  <p className="pb-2">
                    {x.answer3}{" "}
                    {x.link && (
                      <a
                        href={x.link}
                        target="_blank"
                        rel="noreferrer"
                        className="italic text-primary"
                      >
                        Link
                      </a>
                    )}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AllFAQ;
