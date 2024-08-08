import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import ModalCheckout2 from "../../components/ModalCheckout2";
import ModalOpacity from "../../components/ModalOpacity";
import ModalSidePanel from "../../components/ModalSidePanel";

const CancellationAndReturn = () => {
  return (
    <>
      <Helmet>
        <title>Cancellation and Return Policy - Nuform</title>
        <meta name="title" content="Cancellation and Return Policy - Nuform" />
        <meta
          name="description"
          content="Discover Nuform's cancellation
          policy for clarity on managing orders of our skin supplements. Our
          process is designed to ensure customer satisfaction."
        />
      </Helmet>
      <div className="container px-1 py-10 mx-auto mb-20 text-justify lg:pb-20 lg:max-w-4xl">
        <h3 className="mb-10 text-2xl text-center md:text-3xl text-primary">
          Cancellation and Return Policy
        </h3>
        <h5 className="mt-6 mb-2 text-lg lg:mt-6 text-primary">
          Cancellation before delivery
        </h5>

        <p>
          We do not offer cancellations on orders that have already been placed.
          However, we will assess each case individually, at the sole discretion
          of NuForm. Refund Process for Cancelled Orders. In case of
          cancellation, we process refunds within 5-7 working days after
          receiving and approving the cancellation request.For payments made via
          credit/debit cards or net banking, the refund will be processed to the
          same account used for payment within 5-7 working days after we receive
          the products back. It may take an additional 2-3 business days for the
          refund amount to reflect in your account.
        </p>

        <h5 className="mt-6 mb-2 text-lg lg:mt-6 text-primary">
          Returns, Replacements, and Refunds
        </h5>

        <p>How do I return an item purchased from NuForm?</p>
        <p>
          We only accept returns/replacements for orders received with defective
          items or wrong products. Damaged, Defective, or Wrong Products. If you
          receive a damaged, defective, or wrong product, you can request a
          replacement or refund. Follow these steps within 5 days of receiving
          your order:
        </p>

        <p className="">
          Step 1: Contact our Customer Support team via email{" "}
          <a
            className="italic text-primary"
            href="mailto:feedback@nuform.in"
            target="_blank"
            rel="noreferrer"
          >
            feedback@nuform.in
          </a>{" "}
          or by calling us on{" "}
          <a
            className=" text-primary"
            href="tel:+91 7671051443"
            target="_blank"
            rel="noreferrer"
          >
            +91 7671051443
          </a>{" "}
          within 5 business days of receiving the order.
        </p>
        <p className="">
          Step 2: Provide your order ID details and request to
          return/replace/refund the defective/wrong items in your order. Kindly
          include an image of the product and the invoice for reference.
        </p>
        <p className="">
          Step 3: We will arrange for product pickup within 2-4 business days.
          Refunds or replacements will be initiated only if the products are
          returned in their original packaging with seals, labels, and barcodes
          intact.
        </p>
        <p>
          Note: Replacement is subject to stock availability. If a replacement
          is not available, we will issue a full refund.
        </p>

        <h5 className="mt-6 mb-2 text-lg lg:mt-6 text-primary">
          Refund Process for Returned Orders
        </h5>
        <p>
          Once we receive and verify the products at our warehouse, we process
          refunds.
        </p>
        <p className="">
          For payments made via credit/debit cards or net banking, the refund
          will be processed to the same account within 5-7 working days after
          receiving the products back. It may take an additional 2-3 business
          days for the refund amount to reflect in your account.
        </p>
        <h5 className="mt-6 mb-2 text-lg lg:mt-6 text-primary">
          Items Not Eligible for Return/Exchange
        </h5>
        <p>Returns will not be accepted under the following conditions:</p>
        <ul className="pl-4 list-disc">
          <li>Product damage due to misuse/overuse</li>
          <li>
            Returned without original packaging, including price tags, labels,
            original packing, freebies, and other accessories, or if original
            packaging is damaged
          </li>
          <li>Tampered serial number</li>
          <li>
            Defective products not covered under Seller/Manufacturer’s warranty
          </li>
          <li>Used or altered products</li>
          <li>Requests initiated after 5 business days of order delivery</li>
        </ul>
      </div>
      <ModalSidePanel />
      <ModalCheckout2 />
      <ModalOpacity />
      <Footer />
    </>
  );
};

export default CancellationAndReturn;
