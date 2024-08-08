import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [grandTotal, setGrandTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userProfileData, setUserProfileData] = useState({});
  const [instaData, setInstaData] = useState([]);

  // Load cartItems from localStorage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    // Calculate grandTotal whenever cartItems changes
    let total = 0;
    for (const itemId in cartItems) {
      total += cartItems[itemId].totalPrice;
    }
    setGrandTotal(total);
  }, [cartItems]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://nuform-backend.onrender.com/api/instagramFeed"
        );
        // const response = await axios.get("http://localhost:8000/api/instagramFeed");
        // const response = await axios.get("https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=IGQWRNbWc3Y1ppTUE1b3ZAsVXA5RUhORHI1VGtKc0VJMWpsdlhNT2dpTnhLbHZAjU1g0NnhCQWtESDhZARVNzTDNEpUTHQoQUJMHLrErGJyHg89uy71MyuHSU9iTENhaGZALWEk4RUdtZAEg4X0lWZA0tUY2xlZADFDQ0JRYlkZD");
        console.log(response);
        if (response.data.success) setInstaData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const userID = localStorage.getItem("userID");
      const token = localStorage.getItem("token");

      try {
        if (userID && token) {
          const res = await axios.get(
            `https://nuform-backend.onrender.com/getUserData/${userID}`,
            {
              headers: {
                "x-api-key": token,
              },
            }
          );
          if (res.data.status) {
            setUserProfileData(res.data.data);
            setIsLogin(true);
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("userID");
            setIsLogin(false);
          }

          // Uncomment and update this block if you need to set initial values
          /*
          setInitialValues((prevValues) => ({
            ...prevValues,
            firstName: userData?.shippingAddresses[0]?.firstName || userData?.name || "",
            lastName: userData?.shippingAddresses[0]?.lastName || "",
            email: userData?.email || "",
            phone: userData?.phone || "",
            age: userData?.age || "",
            address: userData?.shippingAddresses[0]?.address || "",
            city: userData?.shippingAddresses[0]?.city || "",
            state: userData?.shippingAddresses[0]?.state || "",
            pincode: userData?.shippingAddresses[0]?.pincode || "",
            gender: userData?.gender || "",
            emailMe: userData?.emailMe || "",
          }));
          */
        }
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
        localStorage.removeItem("userID");
      }
    };

    fetchData(); // Call the async function
  }, [isLogin]); // Dependency array, add other dependencies if needed

  const addToCart = (itemId, count, price, weight) => {
    if (weight === null) weight = 0.05;
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[itemId]) {
        updatedItems[itemId].totalCount += parseFloat(count);
        updatedItems[itemId].totalPrice +=
          parseFloat(count) * parseFloat(price);

        updatedItems[itemId].totalWeight += parseFloat(weight);
      } else {
        updatedItems[itemId] = {
          itemId: itemId,
          count: parseFloat(count),
          price: parseFloat(price),
          weight: parseFloat(weight),
          totalPrice: parseFloat(count) * parseFloat(price),
          totalCount: parseFloat(count),
          totalWeight: parseFloat(weight),
        };
      }
      console.log(updatedItems);
      // Store updated cartItems in localStorage
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[itemId]) {
        delete updatedItems[itemId];
      }
      // Store updated cartItems in localStorage
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const removeOneFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[itemId]) {
        if (updatedItems[itemId].totalCount > 1) {
          // If the item count is greater than 1, decrement the count

          updatedItems[itemId].totalCount -= 1;
          updatedItems[itemId].totalPrice -= updatedItems[itemId].price;
          updatedItems[itemId].totalWeight -= updatedItems[itemId].weight;
        } else {
          // If the item count is 1, remove the item from the cart
          delete updatedItems[itemId];
        }
      }
      // Store updated cartItems in localStorage
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        open,
        setOpen,
        open2,
        setOpen2,
        grandTotal,
        addToCart,
        removeFromCart,
        open3,
        setOpen3,
        removeOneFromCart,
        isLogin,
        setIsLogin,
        userProfileData,
        instaData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
