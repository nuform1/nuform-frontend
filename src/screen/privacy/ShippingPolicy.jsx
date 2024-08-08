import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import ModalCheckout2 from "../../components/ModalCheckout2";
import ModalOpacity from "../../components/ModalOpacity";
import ModalSidePanel from "../../components/ModalSidePanel";

const ShippingPolicy = () => {
  return (
    <>
      <Helmet>
        <title>
          Know the Shipping Policy for Nuform's Best Skin Care Supplements
         
        </title>
        <meta
          name="title"
          content="Know the Shipping Policy for Nuform's Best Skin Care Supplements"
        />
        <meta
          name="description"
          content=" Explore Nuform's shipping policy for details on delivery timelines and
          methods. Trust our commitment to efficient and reliable shipping of
          skin supplements."
        />
      </Helmet>
      <div className="container px-1 py-10 mx-auto mb-20 text-justify lg:pb-20 lg:max-w-4xl">
        <h3 className="mb-10 text-2xl text-center md:text-3xl text-primary">
          Shipping & Delivery Policy
        </h3>
        {/*   <h5 className="mt-6 mb-2 text-lg lg:mt-6 text-primary">
          Personal Information
        </h5> */}
        <p className="">
          This Shipping & Delivery Policy is an integral part of our Terms of
          Use ("Terms") and should be read alongside our main Terms: Terms of
          Use. Please carefully review our Shipping & Delivery Policy before
          purchasing our products. This policy will apply to any order you place
          with us.
        </p>

        <h5 className="mt-6 mb-2 text-lg lg:mt-6 text-primary">
          Domestic Shipping Policy
        </h5>
        <p className=" text-primary">Estimated Shipping Time within India</p>
        <p className="pb-2 ">
          All domestic orders are shipped within 24 to 48 hours. If we are
          experiencing a high volume of orders, shipments may be delayed by a
          few days. Please allow additional days in transit for delivery. If
          there will be a significant delay in the shipment of your order, we
          will contact you via email or telephone.
        </p>
        <p className=" text-primary">Delivery Time</p>
        <p className="pb-2 ">
          From the time of shipping, domestic orders take 2-7 days to reach you.
          If you have placed an order with multiple items, please note that your
          items may arrive in multiple shipments. The estimated delivery times
          are indicative, and sometimes unavoidable delays might be beyond our
          control. We will keep you informed in case of any delays.
        </p>
        <p className=" text-primary">Shipping Charges</p>
        <p className="pb-2 ">
          We provide a minimum shipping charge will be calculated at checkout
          for a few products on our website, as mentioned on the product page.
        </p>
        <p className=" text-primary">Tracking Details</p>
        <p className="pb-2 ">
          As soon as the order is shipped from our warehouse, you will receive
          an email/SMS with tracking details. Please also check your junk/spam
          emails as sometimes the email gets labeled as such. You can track the
          order in the "Track My Order" section on our website.
        </p>

        <h5 className="mt-6 mb-2 text-lg lg:mt-6 text-primary">
          Questions About Returns?
        </h5>
        <p>
          If you have questions about returns, please review our Return Policy:
          Return Policy.
        </p>
        <h5 className="mt-6 mb-2 text-lg lg:mt-6 text-primary">
          How to contact us about this policy?
        </h5>
        <p>
          If you have any further questions or comments, you may contact us by:
          <br /> Phone:{" "}
          <a
            className=" text-primary"
            href="tel:+91 7671051443"
            target="_blank"
            rel="noreferrer"
          >
            +91 7671051443
          </a>{" "}
          <br />
          Email:{" "}
          <a
            className="italic text-primary"
            href="mailto:feedback@nuform.in"
            target="_blank"
            rel="noreferrer"
          >
            feedback@nuform.in
          </a>{" "}
        </p>
      </div>
      <ModalSidePanel />
      <ModalCheckout2 />
      <ModalOpacity />
      <Footer />
    </>
  );
};

export default ShippingPolicy;
