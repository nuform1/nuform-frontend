import React from "react";

const PaymentPage = () => {
  const loadRazorpayScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => handlePayment();
    document.body.appendChild(script);
  };

  const handlePayment = () => {
    const options = {
      key: "rzp_test_ZE3thgh7YOruqb", // Enter the Key ID generated from the Dashboard
      amount: "65000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Nuform", // your business name
      description: "Test Transaction",
      image: "https://nuform.in/static/media/logo.4b69f81166ba17cf1eda.png",
      order_id: "order_OBr3Kjm1yYhjvG", // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      // callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "Gaurav Kumar", // your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000", // Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#0916ff",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div>
      <button id="rzp-button1" onClick={loadRazorpayScript}>
        Pay
      </button>
    </div>
  );
};

export default PaymentPage;
