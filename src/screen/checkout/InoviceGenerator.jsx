import React from "react";
import ReactToPrint from "react-to-print";

const InoviceGenerator = () => {
  const componentRef = React.useRef(null);
  return (
    <div className="min-h-screen p-1 bg-black bg-opacity-50">
      <div className="container flex justify-end pt-1 mx-auto md:max-w-2xl ">
        <ReactToPrint
          trigger={() => (
            <button className="px-8 py-1 text-white rounded-md bg-primary ">
              Print / Download
            </button>
          )}
          content={() => componentRef.current}
          documentTitle="Nuform - Invoice"
        />
      </div>

      <div
        ref={componentRef}
        className=" p-5 mx-auto mt-2  md:max-w-2xl min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between gap-2 bg-white sm:p-8  "
      >
        <div>
          <div className="flex justify-between ">
            <div>
              <h3 className="text-2xl md:text-3xl text-primary">Invoice</h3>
              <p className="text-xs ">Invoice number: 4973548195</p>
              <p className="text-xs sm:hidden">
                Ref ID: 6640805a3a958231d7db3d47
              </p>{" "}
              <p className="text-xs ">
                Invoice Date:
                <span>12/05/2024</span>
              </p>
            </div>{" "}
            <div className="flex flex-col items-end text-right whitespace-nowrap">
              <img
                src={require("../../assets/hompage/hero section/logo.png")}
                alt=""
                className="h-7"
              />
              <p className="hidden pt-4 text-xs sm:block">
                Ref ID: 6640805a3a958231d7db3d47
              </p>{" "}
              {/* <p className="hidden pt-4 text-xs sm:block">Ref ID: 6640805a3a958231d7db3d47</p>{" "} */}
            </div>
          </div>
          <div className="my-2 bg-primary md:my-3 h-[1px]" />
          <div className="flex flex-col justify-between gap-1 mb-2 sm:mb-6 md:mb-10 sm:flex-row-reverse">
            <div className="pb-2 sm:text-right md:w-1/2">
              {/* <div className="text-xs">From to:</div> */}
              <h5 className="text-xs ">
                Arzen Health & Wellness Private Limited
              </h5>
              <p className="text-xs ">
                Hyderabad,
                <br className="hidden sm:block" /> Telangana
              </p>
            </div>

            <div className=" md:w-1/2">
              <div className="text-xs">Bill to:</div>
              <div className="pb-5 ">
                <h5 className="text-sm font-semibold">Salman Ansari</h5>
                <p className="pb-0.5 md:pb-1 text-xs">
                  Hyderabad, Telangana
                </p>
                <p className="text-xs ">Ph: +91 9000000000</p>
                {/* <p className="pb-1">Email: salman.broaddcast@gmail.com</p> */}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="text-left border-b-2 border-gray-300">
                  <th className="py-2">Description</th>
                  <th className="py-2">Qty</th>
                  <th className="py-2 text-center">Price</th>
                  <th className="py-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-2">Product 1</td>
                  <td className="py-2">1</td>
                  <td className="py-2 text-center">₹ 1000</td>
                  <td className="py-2 text-right">₹ 1000</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2">Product 2</td>
                  <td className="py-2">1</td>
                  <td className="py-2 text-center">₹ 1000</td>
                  <td className="py-2 text-right">₹ 1000</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2">Product 3</td>
                  <td className="py-2">1</td>
                  <td className="py-2 text-center">₹ 1000</td>
                  <td className="py-2 text-right">₹ 1000</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2">Product 4</td>
                  <td className="py-2">1</td>
                  <td className="py-2 text-center">₹ 1000</td>
                  <td className="py-2 text-right">₹ 1000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between mt-2 text-xs">
            <div>
              <p>Subtotal</p>
              <p>Shipping</p>
              <p>Tax</p>
              <p className="pt-1 ">
                {" "}
                <span className="text-xl font-semibold">Total </span> ( in INR )
              </p>
            </div>
            <div className="text-right">
              <p>₹ 4000</p>
              <p>₹ 100</p>
              <p>₹ 200</p>
              <p className="pt-1 text-xl font-semibold">₹ 4300</p>
            </div>
          </div>
        </div>
        <div className=" text-[9px] md:text-[10px] text-gray-500">
          <p>
            Tax may be deducted at Source (TDS) @ 2% under section 194C of the
            Income Tax Act, 1961.
            {/* </p> */}
            {/* <p>
            Tax should not be deducted on the GST component charged on the
            invoice as per circular no. 23 of 2017 dated 19 July 2017 issued by
            the Central Board of Direct Taxes, Ministry of Finance, Govt of
            India.
          </p> */}
            {/* <p> */}
            Note: Unless otherwise stated, tax on this invoice is not payable
            under reverse charge. Supplies under reverse charge are to be
            mentioned separately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InoviceGenerator;
