import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import ModalSidePanel from "../../components/ModalSidePanel";
import ModalCheckout2 from "../../components/ModalCheckout2";
import ModalOpacity from "../../components/ModalOpacity";

const TermsAndConditions = () => {
  return (
    <>
      {" "}
      <div className="container px-1 py-10 mx-auto mb-20 text-justify lg:pb-20 lg:max-w-4xl">
        {/* <p className="mb-6 text-center text-primary lg:text-left">
        .. ASK QUESTION ..
      </p> */}
        <h3 className="mb-10 text-2xl text-center md:text-3xl text-primary">
          Terms and Conditions
        </h3>
        <p className="">
          The domain name{" "}
          <a href="https://nuform.in" className="italic text-primary">
            nufrom.in
          </a>{" "}
          and its related sub-domains, sites, services, tools (collectively, the
          “Website” or “Service/s” or “Product/s”) is controlled and run by
          Arzen Health and Wellness Private Limited .
        </p>
        <p>
          Throughout the Website, the terms “we”, “us” and “our” refer to Arzen
          Health and Wellness Private Limited , bearing CIN No
          U74999TG2022PTC169814 (which phrase shall be understood to include its
          successors, affiliates, and permitted assigns, unless it is contrary
          to the context or meaning thereof). By using the Nuform service, you
          (“Users”) are understood to have agreed to the Terms and Conditions
          (“Terms and Conditions”, “Terms”) stated below, which may be updated
          as needed, including any additional Terms and Conditions that are
          mentioned in this document and/or accessible through a hyperlink. All
          Users of the Website, including without limitation browsers, vendors,
          customers, merchants, and/or content contributors, are subject to the
          Terms and Conditions.
        </p>
        <p>
          Please read these Terms and Conditions thoroughly before accessing or
          using our Website.
        </p>

        <h5 className="mt-6 text-lg lg:mt-10mb-2 text-primary">
          1. Terms of Online Store
        </h5>
        <p className="pl-4">
          You affirm that you are at least the legal age of majority in your
          state or province of residence, or that you are the legal age of
          majority in your state or province of residence and that you have
          granted us permission to permit any of your minor dependents to use
          this Website, by accepting these Terms and Conditions. You are not
          permitted to use our products for any unauthorized or illegal
          purposes, nor are you permitted to break any local laws (copyright
          laws included) by using the Service. <br /> It is forbidden for you to
          send any viruses, worms, or destructive codes. Your Services will be
          immediately terminated in the event of any breach or violation of the
          Terms.
        </p>

        <h5 className="mt-6 text-lg lg:mt-10mb-2 text-primary">
          2. General Conditions
        </h5>
        <p className="pl-4">
          We maintain the right, at any time and for any reason, to deny anyone
          Service. You acknowledge that your content (excluding credit card
          information) may be sent over different networks in an unencrypted
          manner and that it may also undergo modifications to comply with the
          technical specifications of the devices or networks you are
          connecting. Every time credit card information is transferred over a
          network, it is encrypted. <br /> Without our prior written consent,
          you undertake not to replicate, copy, sell, resell, or exploit any
          part of the service, use of the service, access to the service, or any
          contact on the Website through which the service is provided. The
          headings used in this agreement are merely included for convenience
          and have no bearing on the terms of this agreement.
        </p>

        <h5 className="mt-6 text-lg lg:mt-10mb-2 text-primary">
          3. Information timeliness, accuracy, and completeness
        </h5>
        <p className="pl-4">
          If any of the information on this Website is inaccurate, out-of-date,
          or incomplete, we disclaim all liability. The information on this
          Website is meant only for general information purposes; it should not
          be relied upon or used as the only basis for decisions without first
          consulting primary sources of information that are more reliable,
          accurate, complete, or timely. You bear all liability for relying on
          any content on this website. There may be historical information on
          this Website. <br /> Information from the past is necessarily out of
          date and is given solely for your reference. We do not have to update
          any information on our site, but we do reserve the right to change any
          part of its contents at any time. You acknowledge that it is your duty
          to keep an eye out for changes on the Website
        </p>

        <h5 className="mt-6 text-lg lg:mt-10mb-2 text-primary">
          4. Changes to the Prices and Service
        </h5>
        <p className="pl-4">
          The prices of our products could change at any given time. We maintain
          the right, at any time and without prior notice, to alter or terminate
          the Service (or any portion or content thereof). If the Service is
          changed, the price is changed, it is suspended, or it is discontinued,
          neither you nor any third party will be entitled to compensation from
          us.
        </p>

        <h5 className="mt-6 text-lg lg:mt-10mb-2 text-primary">
          5. Products/Services
        </h5>
        <p className="pl-4">
          There may be some products or Services that are only accessible online
          via the Website. These goods or services might only be available in
          restricted quantities, and returns or exchanges are permitted only in
          accordance with our refund policy.{" "}
          <Link to="/refund-policy" className="italic text-primary">
            Refund Policy
          </Link>
        </p>
        <p className="pl-4">
          We have worked hard to ensure that the colors and images of our
          Products that are displayed in the store are as accurate as possible.
          We may restrict who can purchase our products, where they can be
          purchased, and under what circumstances. Depending on the
          circumstances, we might use this right. We keep the right to restrict
          the number of any product we sell. We reserve the right to change any
          and all product descriptions or prices at any time, without prior
          notice. We maintain the right to stop offering any product at any
          moment. <br /> Wherever it is prohibited, any offer made on this
          website for any good or service is null and void. We make no
          guarantees about the quality of any Products, data, or other materials
          you buy or get your hands on, or about the correction of any errors in
          the Service.
        </p>

        <h5 className="mt-6 text-lg lg:mt-10mb-2 text-primary">
          6. Account Information and Billing Accuracy
        </h5>
        <p className="pl-4">
          Any order you place with us may be rejected by us at our discretion.
          We reserve the right to restrict or cancel the number of items that
          can be bought by a single person, household, or order. Orders made
          with the same credit card, the same customer account, or the same
          billing and/or shipping address may all be subject to these
          limitations. If we decide to modify or cancel an order, we might try
          to get in touch with you via the phone number, email address, or
          billing address you gave when placing the order. Orders that, in our
          sole discretion, seem to have been placed by dealers, resellers, or
          distributors may be subject to restrictions or prohibitions. <br />{" "}
          For every purchase you make at Nuform, you pledge to provide accurate,
          full, and up-to-date purchase and account information. In order for us
          to finish your transactions and get in touch with you as needed, you
          commit to updating your account and other information as soon as
          possible. This information includes your email address, credit card
          numbers, and expiration dates.
        </p>

        <h5 className="mt-6 text-lg lg:mt-10mb-2 text-primary">
          7. Feedback and User Comments
        </h5>
        <p className="pl-4">
          If you send us specific submissions (like contest entries) at our
          request or send us creative ideas, suggestions, proposals, plans, or
          other materials—whether via email, postal mail, or another method—you
          consent to our using the comments you send us for any purpose,
          including editing, copying, publishing, distributing, translating, and
          other uses in any media, at any time and without restriction. We are
          under no duty, and never will be, to
        </p>
        <p className="pl-4">
          (1) keep any comments confidential; <br />
          (2) compensate for any comments; or <br />
          (3) reply to any comments. <br />
          We may, but are not required to, monitor, edit, or remove content that
          violates any party's intellectual property rights or these Terms and
          Conditions, or that we deem to be illegal, offensive, threatening,
          libelous, defamatory, pornographic, obscene, or otherwise
          objectionable.
        </p>
        <h5 className="mt-6 text-lg lg:mt-10mb-2 text-primary">
          8. Omissions, Inaccuracies and Errors
        </h5>
        <p className="pl-4">
          On occasion, information about Product descriptions, prices,
          promotions, offers, product shipping costs, transit times, and
          availability may contain typographical errors, inaccuracies, or
          omissions on our Website or in the Service. At any time without prior
          notice, we reserve the right to make any necessary corrections to
          errors, inaccuracies, or omissions, as well as to update or change
          information or cancel orders if any information in the Service or on
          any related website is inaccurate (including after you have submitted
          your order).
          <br /> Except as required by law, we disclaim any obligation to
          update, amend, or clarify any information found in the Service or on
          any linked website, including without limitation, pricing information.
          It should not be assumed that all of the information in the Service or
          on any linked Website has been updated or changed just because there
          isn't a clear update or refresh date applied.
        </p>

        <h5 className="mt-6 text-lg lg:mt-10mb-2 text-primary">
          9. Forbidden uses
        </h5>
        <p className="pl-4">
          You are not allowed to use the Website or any of its content, in
          addition to the other prohibitions stated in the Terms and Conditions.
          <br />
          (a) for any illegal purpose; <br />
          (b) to encourage others to carry out or take part in any illegal acts;{" "}
          <br />
          (c) to break any international, federal, provincial, or state laws,
          rules, regulations, or local ordinances; <br />
          (d) to infringe upon or violate our intellectual property rights or
          the rights of others; <br />
          (e) to engage in any form of harassment, abuse, insulting, harming,
          defaming, slandering, disparaging, intimidating, or discriminatory
          behavior based on gender, sexual orientation, religion, ethnicity,
          race, age, national origin, or disability; <br />
          (f) to submit false or misleading information; <br />
          (g) to upload or transmit viruses or any other type of malicious code
          that will or may be used in any way that will affect the functionality
          or operation of the Service or of any related website, other websites,
          or the Internet; <br />
          (h) to gather or track the personal information of others; <br />
          (i) to spam, phish, pharm, pretext, spider, crawl, or scrape;
          <br />
          (j) for any obscene or immoral purpose.
        </p>
        <h5 className="mt-6 text-lg lg:mt-10mb-2 text-primary">
          10. Termination
        </h5>
        <p className="pl-4">
          For all purposes, this agreement's obligations and liabilities that
          the parties committed before the termination date will remain in
          effect even after it ends. These terms of service are in force until
          either you or we decide to end them. By informing us that you no
          longer want to use our services or stop visiting our Website, you may
          end these Terms and Conditions at any time. We reserve the right to
          terminate this agreement at any time without notice and to collect any
          outstanding amounts from you through the termination date. In
          addition, we may refuse you access to our Services (or any portion
          thereof) if, in our sole discretion, you violate any term or provision
          of these Terms and Conditions.
        </p>
      </div>
      <ModalSidePanel />
      <ModalCheckout2 />
      <ModalOpacity />
      <Footer />
    </>
  );
};

export default TermsAndConditions;
