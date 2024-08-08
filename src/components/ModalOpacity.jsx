import React from "react";
import { useCart } from "./CartProvider";

const ModalOpacity = () => {
  const { open2 } = useCart();
  return (
    <>
      {open2 && (
        <div className=" top-0 left-0 z-40 w-full h-[200vh] duration-200 bg-black opacity-40 hidden md:fixed md:block"></div>
      )}
    </>
  );
};

export default ModalOpacity;
