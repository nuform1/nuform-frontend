import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useCart } from "./CartProvider";

const EditQuantity = ({ quantiy, itemId, price, weight }) => {
  const [total, setTotal] = useState(quantiy);
  useEffect(() => {
    if (quantiy) {
      setTotal(quantiy);
    }
  }, [quantiy]);
  const { removeOneFromCart, addToCart } = useCart();

  const handleIncrement = () => {
    if (total < 100) {
      setTotal((prevTotal) => prevTotal + 1);
      addToCart(itemId, 1, price, weight);
    } else {
      toast.error("You can't add more than 100 items at a time");
    }
  };

  const handleDecrement = () => {
    if (total > 0) {
      setTotal((prevTotal) => prevTotal - 1);
      removeOneFromCart(itemId);
    }
  };
  return (
    <div className="flex items-center border rounded select-none ">
      <button
        className={`px-2 py-1   rounded-l ${
          total === 1
            ? "cursor-not-allowed"
            : "hover:bg-[#002efe] hover:text-white"
        }`}
        onClick={handleDecrement}
        disabled={total === 1} // Disable button when total is 1
      >
        -
      </button>
      <p className="px-3 text-sm border-x">{total}</p>
      <button
        className="px-2 py-1 hover:bg-[#002efe] hover:text-white rounded-r"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default EditQuantity;
