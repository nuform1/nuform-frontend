import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { LuGrape } from "react-icons/lu";
import { GiPeach } from "react-icons/gi";

import ImageSlider from "./ImageSlider";

import ModalSidePanel from "../../components/ModalSidePanel";
import Footer from "../../components/Footer";
import { useCart } from "../../components/CartProvider";
import toast from "react-hot-toast";
import { priceData } from "../../constant";
import ModalCheckout2 from "../../components/ModalCheckout2";
import ModalOpacity from "../../components/ModalOpacity";
import FAQs from "./components/FAQs";
import Ingredients from "./components/Ingredients";
import HowToConsume from "./components/HowToConsume";
import DairyLogos from "./components/DairyLogos";
import Reviews from "./components/Reviews";
import { Helmet } from "react-helmet";

// import toast from "react-hot-toast";

const ProductDetails2 = () => {
  const [flavor, setFlavor] = React.useState("Black Grape");

  const { addToCart, setOpen2 } = useCart();

  // console.log(document.documentElement.scrollTop);

  const imageSources = [
    require("../../assets/WHITE BGS/GRAPE PAIR.webp"),
    require("../../assets/WHITE BGS/Skin101_Grape_1.webp"),
    require("../../assets/WHITE BGS/Skin101_Grape_2.webp"),
    require("../../assets/WHITE BGS/GRAPE 4.JPG"),
    require("../../assets/WHITE BGS/Skin101_Grape_4.webp"),
    require("../../assets/WHITE BGS/GRAPE 2.JPG"),
  ];

  const [showIng, setShowIng] = useState(false);

  const handleChange = (event) => {
    setFlavor(event.target.value);
  };
  // const notifySuccess = () => toast.success("Successfully added to cart !");

  const [selected, setSelected] = useState(2); // Initial selected state
  // const [selected2, setSelected2] = useState(1); // Initial selected state

  // Empty dependency array ensures this effect runs only once on mount
  const notifySuccess = () => toast.success("Successfully added to cart !");

  const handleAddToCart = () => {
    if (selected === 1 && flavor === "Black Grape") {
      addToCart("Skin101GrapsPack1", 1, priceData.Skin101GrapsPack1.price, priceData.Skin101GrapsPack1.weight);
    } else if (selected === 2 && flavor === "Black Grape") {
      addToCart("Skin101GrapsPack2", 1, priceData.Skin101GrapsPack2.price, priceData.Skin101GrapsPack2.weight);
    } else if (selected === 1 && flavor === "Peach Flavor") {
      addToCart("Skin101Peach1", 1, priceData.Skin101Peach1.price, priceData.Skin101Peach1.weight);
    } else if (selected === 2 && flavor === "Peach Flavor") {
      addToCart("Skin101Peach2", 1, priceData.Skin101Peach2.price, priceData.Skin101Peach2.weight);
    } else if (selected === 2 && flavor === "Black Grape + Peach Flavor") {
      addToCart("Skin101Combined", 1, priceData.Skin101Combined.price, priceData.Skin101Combined.weight);
      // addToCart("Skin101GrapsPack1", 1, priceData.Skin101GrapsPack1.price);
    }
    // addToCart(itemId, 1, price); // Add item to cart
    // console.log(cartItems)
    setOpen2(true);
    notifySuccess();
    // setTotal(1); // Reset total after adding to cart
  };

  return (
    <>
      <Helmet>
        <title>
          Order the Best Skin Care Products for Glowing Skin at Nuform
        </title>
        <meta
          name="title"
          content=" Order the Best Skin Care Products for Glowing Skin at Nuform"
        />
        <meta
          name="description"
          content="Unveil radiant skin with our revolutionary formula, enhancing clarity and brightness while addressing mild acne and pigmentation. Order best supplements for skin."
        />
      </Helmet>
      <div className="px-1 pt-6 lg:pt-10 md:px-0">
        {/* Top Section */}
        {/* <div className="flex"> */}
        <div className="container gap-10 mx-auto md:flex xl:max-w-7xl">
          <div className="relative md:w-1/2 ">
            <h1 className="mb-2 text-3xl uppercase md:font-bold lg:text-4xl text-primary">
              Skin 101
            </h1>

            {/* <p className="mb-4 text-xl italic lg:text-2xl md:mb-2">
            Your beauty ally
          </p> */}
            {/* Mobile Image Section */}
            <div className="flex flex-col-reverse w-full md:hidden">
              <ImageSlider imageSources={imageSources} />
            </div>
            <p className="mb-5 lg:mb-6">
              Reveal radiant skin with our breakthrough formula, promoting
              clarity, brightness, and eliminating mild acne and pigmentation.
              Experience true luminosity and embrace a flawless complexion
              effortlessly.
            </p>

            <div className="grid gap-2 mb-5 md:grid-cols-2 lg:mb-8 text-primary lg:gap-4 ">
              <div className="flex items-center gap-2 mb-2 ">
                <div className="flex items-center justify-center w-8 h-8 p-1 border rounded-full border-primary">
                  <img
                    src={require("../../assets/products/Skin care.svg").default}
                    alt=""
                    className="w-7 drop-shadow-xl"
                  />
                </div>
                <p className="">Unlocks your skin’s true luminosity</p>
              </div>
              <div className="flex items-center gap-2 mb-2 ">
                <div className="flex items-center justify-center w-8 h-8 p-1 border rounded-full border-primary">
                  <img
                    src={
                      require("../../assets/products/moisturisation.svg")
                        .default
                    }
                    alt=""
                    className="w-7 drop-shadow-xl"
                  />
                </div>
                <p className="">Clears complexion and brightens</p>
              </div>
              <div className="flex items-center gap-2 mb-2 ">
                <div className="flex items-center justify-center w-8 h-8 p-1 border rounded-full border-primary">
                  <img
                    src={
                      require("../../assets/products/skin pigmentation.svg")
                        .default
                    }
                    alt=""
                    className="w-7 drop-shadow-xl"
                  />
                </div>
                <p className="">Banishes mild acne and pigmentation</p>
              </div>
            </div>

            <div className="flex justify-center w-full gap-4 select-none lg:justify-start">
              <div
                onClick={() => {
                  setSelected(2);
                  setFlavor("Black Grape");
                }}
                className={` pt-5 text-center w-min whitespace-nowrap rounded-xl lg:w-1/3 relative pb-3 cursor-pointer ${
                  selected === 2
                    ? "border-primary text-black border-2"
                    : "text-gray-400 border"
                }`}
              >
                <div className="px-2 text-center ">
                  <p className="text-lg text-center">1 Month </p>
                  <p className="text-sm text-gray-400">
                    MRP:{" "}
                    <span className="line-through">
                      ₹ {priceData["Skin101GrapsPack2"].ogPrice}
                    </span>
                  </p>
                  <p className="font-semibold ">
                    You Pay:
                    <span className="ml-2 text-sm"> ₹ </span>
                    <span className="text-lg ">
                      {priceData["Skin101GrapsPack2"].price} /-
                    </span>
                  </p>
                </div>

                <div
                  className={`absolute px-6 py-1  -translate-x-1/2 rounded-full  -top-4 left-1/2 lg:px-10 ${
                    selected === 2
                      ? "bg-primary text-white"
                      : "border bg-white border-primary text-primary "
                  }`}
                >
                  Save {priceData["Skin101GrapsPack2"].discount}
                </div>
              </div>{" "}
              <div
                onClick={() => {
                  setSelected(1);
                  setFlavor("Black Grape");
                }}
                className={` pt-5 text-center  w-min whitespace-nowrap rounded-xl lg:w-1/3 relative pb-3 cursor-pointer ${
                  selected === 1
                    ? "border-primary text-black border-2"
                    : "text-gray-400 border"
                }`}
              >
                <div className="px-2 text-center ">
                  <p className="text-lg text-center">Starter Pack </p>
                  <p className="text-sm ">
                    MRP:{" "}
                    <span className="line-through">
                      ₹ {priceData["Skin101GrapsPack1"].ogPrice}
                    </span>
                  </p>
                  <p className="font-semibold ">
                    You Pay:
                    <span className="ml-2 text-sm"> ₹ </span>
                    <span className="text-lg ">
                      {" "}
                      {priceData["Skin101GrapsPack1"].price} /-
                    </span>
                  </p>
                </div>
                <div
                  className={`absolute px-6 py-1  -translate-x-1/2 rounded-full  -top-4 left-1/2 lg:px-10 ${
                    selected === 1
                      ? "bg-primary text-white"
                      : "border bg-white border-primary text-primary "
                  }`}
                >
                  Save {priceData["Skin101GrapsPack1"].discount}
                </div>
              </div>{" "}
            </div>
            <p className="pt-2 text-sm italic">
              Note: Box contains {selected === 1 ? "15" : "30"} sachets
            </p>

            <div className="pt-4 my-4 ">
              {/* <p className="md:text-lg">Flavor</p> */}

              <Box
                sx={{
                  minWidth: 8,
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    { borderColor: "#0916ff" },
                }}
              >
                <FormControl fullWidth>
                  <InputLabel
                    sx={{ color: "#0916ff" }}
                    id="demo-simple-select-label"
                  >
                    Flavor
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={flavor}
                    label="Flavor"
                    onChange={handleChange}
                    // open={selected === 2 ? true : false}
                  >
                    {selected !== 1 && (
                      <MenuItem value={"Black Grape + Peach Flavor"}>
                        <div className="flex items-center gap-1 sm:gap-2 ">
                          <LuGrape className="" />
                          Black Grape & <GiPeach className="text-[#FFE5B4]  " />{" "}
                          Peach
                          <span className="text-sm text-primary">
                            ( Combined pack )
                          </span>{" "}
                        </div>
                      </MenuItem>
                    )}{" "}
                    <MenuItem value={"Black Grape"}>
                      <div className="flex items-center gap-2 ">
                        <LuGrape />
                        Black Grape
                      </div>
                    </MenuItem>
                    <MenuItem value={"Peach Flavor"}>
                      <div className="flex items-center gap-2 ">
                        <GiPeach className="text-[#FFE5B4] " />
                        Peach
                      </div>
                    </MenuItem>{" "}
                  </Select>
                </FormControl>
              </Box>
            </div>
            {/* <p className="pb-2 text-xs text-gray-400">
            Tax included. Shipping calculated at checkout.
          </p> */}
            <div className="flex gap-4 ">
              <div className="w-full ">
                <button
                  aria-label="Add to cart"
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full px-6 py-3 mt-2 text-white duration-200 rounded-full bg-primary hover:scale-95 "
                >
                  Buy it now
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
        <div className="absolute right-0 md:flex justify-end w-1/2 h-screen top-[96px] hidden ">
          <div className="w-full ">
            {/* <div className="absolute top-0 right-0 w-1/2 h-full"> */}

            <ImageSlider imageSources={imageSources} />
          </div>
        </div>

        <DairyLogos />
        <HowToConsume />
        <Ingredients setShowIng={setShowIng} />
        <FAQs />
        <Reviews id="66486d74e4cd905411ae1c75" />
        <div className="mt-10 lg:mt-16">
          <Footer disclaimer={true} />
        </div>
        <ModalSidePanel />
        <ModalCheckout2 />
        <ModalOpacity />
        {showIng && (
          <div
            id="container2"
            onClick={(e) => {
              if (e.target.id === "container2") {
                setShowIng(false);
              }
            }}
            className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-25"
          >
            <div className="w-full px-4 py-6 mx-1 bg-white rounded-xl md:max-w-lg lg:max-w-xl ">
              <div className="overflow-y-scroll  bg-gray-100  lg:mx-0 h-[70vh] px-2 rounded-xl py-1">
                <div className="text-lg text-primary">
                  Benefits of Grantria:
                </div>
                <ul className="ml-4 space-y-1 list-disc ">
                  <li>
                    Improved Elasticity: Enhances skin firmness and elasticity.
                  </li>
                  <li>
                    Refined Texture: Smooths skin for a more refined appearance.
                  </li>
                  <li>
                    Radiant Skin: Boosts radiance with powerful antioxidants.
                    Wrinkle
                  </li>
                  <li>Reduction: Helps diminish the look of wrinkles. </li>
                  <li>Hydration : Hydrates skin, preventing moisture loss.</li>
                  <li>
                    Collagen Synthesis: Supports collagen production for skin
                    health.
                  </li>
                  <li>
                    Anti-Aging: Fights signs of aging for a youthful look.
                  </li>
                  <li>
                    Brightening: Reduces hyperpigmentation for a more even skin
                    tone.
                  </li>
                </ul>
                <div className="mt-4 text-lg text-primary">Clinical study:</div>
                <ul className="ml-4 space-y-1 list-disc ">
                  <li>
                    Tap into the maximum efficiency of our polyphenolic,
                    flavonoid source that's the gold standard for pomegranate
                    extract, Grantria. It's the first Pomegranate based
                    ingredient standardized for three bio-actives, namely
                    Ellagic acid, Punicalgins and Punicic acid so you get only
                    the best.
                  </li>
                  <li>
                    Grantria contains a unique and effective ratio of all three
                    bioactives at standardized/optimized concentration.
                  </li>
                </ul>
                <div className="mt-6 text-lg text-primary">
                  Features of Grantria:
                </div>
                <ul className="ml-4 space-y-1 list-disc ">
                  <li>
                    Enhanced in-vivo characteristics, absorption, and efficacy.
                  </li>
                  <li>Clean label, Green Process & Vegan Ingredient</li>
                </ul>

                <button
                  aria-label="Add to cart"
                  type="button"
                  className="px-4 py-2 mx-auto mt-6 text-white duration-200 border rounded-full w-min md:px-6 bg-primary hover:scale-95"
                  onClick={() => setShowIng(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails2;
