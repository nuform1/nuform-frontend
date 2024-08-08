import React from "react";

const Ingredients = ({ setShowIng }) => {
  return (
    <div className="container px-2 py-6 mx-auto mt-6 xl:max-w-7xl rounded-xl lg:mt-8">
      <h3 className="mb-4 text-xl font-light select-none md:text-2xl text-primary lg:mb-6 ">
        Ingredients
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        <div className="relative p-6 overflow-hidden border-2 border-gray-100 rounded-xl lg:py-8 group">
          <p className="z-10 text-lg text-primary"> Vitamin A</p>
          <p className="z-10">
            Known for its hydrating, anti-oxidative and anti-inflammatory
            properties, your skin will thank you for introducing this super
            nutrient to it.
          </p>
          <div className="absolute -top-4 -z-10 right-2">
            <img
              src="https://ases.in/cdn/shop/products/download_10_e9d89c3a-6000-4fed-9779-1a30da028c2d.jpg?v=1617951046"
              alt=""
              className="z-0 h-24 duration-500 group-hover:-translate-x-2"
            />
          </div>
        </div>
        <div className="relative p-6 overflow-hidden border-2 border-gray-100 rounded-xl lg:py-8 group">
          <p className="z-10 text-lg text-primary"> Zinc</p>
          <p className="z-10">
            Strengthen your skin's natural defenses and support a clear
            complexion with anti-inflammatory superhero Zinc.
          </p>
          <div className="absolute duration-500 -top-1 -right-2 -z-10 group-hover:-translate-x-2">
            <img
              src={require("../../../assets/products/zinc.webp")}
              alt=""
              className="z-0 h-14"
            />
          </div>
        </div>
        <div className="relative p-6 overflow-hidden border-2 border-gray-100 rounded-xl lg:py-8 group">
          <p className="z-10 text-lg text-primary"> LipoDuo Vitamin C</p>
          <p className="z-10">
            The prowess of Vitamin C isn’t unknown but did you know it also
            shields your skin against sun damage while aiding collagen
            production and giving your skin a radiant boost.
          </p>
          <div className="absolute duration-500 -top-6 -right-4 -z-10 group-hover:-translate-x-2">
            <img
              src={require("../../../assets/products/vitaminC.webp")}
              alt=""
              className="z-0 h-24"
            />
          </div>
        </div>
        <div className="relative p-6 overflow-hidden border-2 border-gray-100 rounded-xl lg:py-8 group">
          <div className="z-10 text-lg text-primary">
            Grantria Pomegranate Extract
          </div>
          {/* <p className="z-10">
              Grantria Pomegranate Extract: Rich in antioxidants, it revitalizes
              skin, while its anti-inflammatory properties promote a calm
              complexion, making it a must-have for skincare routines seeking
              rejuvenation and protection.
            </p> */}
          <p className="z-10">
            <div className="text-lg ">Benefits of Grantria:</div>
            <ul className="ml-4 list-disc ">
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
              {/* <li>Reduction: Helps diminish the look of wrinkles. </li>
                <li>Hydration : Hydrates skin, preventing moisture loss.</li>
                <li>
                  Collagen Synthesis: Supports collagen production for skin
                  health.
                </li>
                <li>Anti-Aging: Fights signs of aging for a youthful look.</li>
                <li>
                  Brightening: Reduces hyperpigmentation for a more even skin
                  tone.
                </li> */}
            </ul>
          </p>
          <div className="absolute duration-500 -top-3 right-1 -z-10 group-hover:-translate-x-2">
            <img
              src={require("../../../assets/products/garntria.webp")}
              alt=""
              className="z-0 h-20"
            />
          </div>
          <div
            onClick={() => setShowIng(true)}
            className="absolute z-10 flex items-center justify-center w-6 h-6 text-xl text-white bg-opacity-0 rounded-full cursor-pointer right-4 bottom-4 bg-primary group-hover:bg-opacity-100"
          >
            +
          </div>
        </div>{" "}
        <div className="relative p-6 overflow-hidden border-2 border-gray-100 rounded-xl lg:py-8 group">
          <p className="z-10 text-lg text-primary"> Licorice Extract</p>
          <p className="z-10">
            Bask in the glory of Licorice that offers a wide range of benefits,
            including anti-ageing and antioxidant properties, reduction of
            pigmentation, and the potent power of flavonoids, providing
            anti-inflammatory effects, protection against UV damage, and
            powerful antioxidants for combating aging.
          </p>
          <div className="absolute top-0 duration-500 right-2 -z-10 group-hover:-translate-x-2">
            <img
              src="https://cdn.shopify.com/s/files/1/0240/2942/9840/files/wbn3_Licorice.png"
              alt=""
              className="z-0 h-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
