import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import ModalCheckout2 from "../../components/ModalCheckout2";
import ModalOpacity from "../../components/ModalOpacity";
import ModalSidePanel from "../../components/ModalSidePanel";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>
          Privacy Policy for Nuform - Your Information Security Guaranteed
        </title>
        <meta
          name="title"
          content="Privacy Policy for Nuform - Your Information Security Guaranteed "
        />
        <meta
          name="description"
          content="Explore Nuform's commitment to privacy with our detailed privacy policy. Learn how we protect your information while delivering premium skin supplements."
        />
      </Helmet>
      <div className="container px-1 py-10 mx-auto mb-20 text-justify lg:pb-20 lg:max-w-4xl">
        {/* <p className="mb-6 text-center text-primary lg:text-left">
        .. ASK QUESTION ..
      </p> */}
        <h3 className="mb-10 text-2xl text-center md:text-3xl text-primary">
          Privacy Policy
        </h3>
        {/*   <h5 className="mt-6 mb-2 text-lg lg:mt-6 text-primary">
          Personal Information
        </h5> */}
        <p className="">
          This privacy policy states how Nuform India (the “Website”, “we” or
          “us”) collects, uses, and discloses your Personal Information when you
          visit or make a purchase from Nuform.
        </p>

        <p>
          Nuform is dedicated to safeguarding your confidentiality. Please be
          assured that any information we request from you on this Website{" "}
          <a href="https://nuform.in" className="italic text-primary">
            nufrom.in
          </a>{" "}
          that allows us to identify you (the “customers” or “users”) will only
          be used in compliance with this privacy statement.
        </p>
        <p>
          Nuform reserves the right to modify this policy at any time by
          updating this page. Periodically check this page to make sure any
          changes have not been made against your preferences.
        </p>
        <h5 className="mt-6 mb-2 text-lg lg:mt-6 text-primary">
          Personal Information
        </h5>
        <p>
          We gather certain information about your device, how you use the
          Website, and the data required to complete your transactions when you
          visit the Website. We might also gather extra data if you get in touch
          with us for customer service. Any information that can be used to
          identify an individual, including the categories listed below, is
          referred to as "personal information" in this privacy policy.
        </p>
        <p className="">Categories of personal information being collected:</p>
        <ul className="pl-4 list-disc">
          <li>
            Information you provide when creating an account, such as your name,
            email address, and contact details.
          </li>
          <li>
            Information collected through cookies and similar technologies when
            you browse our website.
          </li>
          <li>
            Information you provide when contacting our customer support or
            participating in surveys or promotions.
          </li>
        </ul>
        <p>
          In order to help us deliver our services and carry out our agreements
          with you, as previously mentioned, we share your personal information
          with service providers like Shiprocket{" "}
          <a href="https://www.shiprocket.in/" className="italic text-primary">
            https://www.shiprocket.in/
          </a>
          for example. Your personal information may be disclosed in order to
          protect our rights, to abide by applicable laws and regulations, or in
          response to a subpoena, search warrant, or other legitimate request
          for information that we receive.
        </p>
        <h5 className="mt-6 mb-2 text-lg lg:mt-6 text-primary">
          Storing Personal Information
        </h5>
        <p></p>
        <h5 className="mt-6 mb-2 text-lg lg:mt-6 text-primary">
          Customer Consent:
        </h5>
        <ul className="pl-4 list-disc">
          <li>
            <p className=" text-primary">Use of Cookies</p>
            <p className="">
              Cookies are small data files that a Website transfers to your
              computer's hard drive when you use a web browser, if you allow.
              They log everything you do on the Website, which makes your next
              visits to the Website more productive. The number of times you
              access the Website, your registration details, and the frequency
              with which you view a specific page or other item on the Website
              are just a few of the many pieces of information that the Cookies
              may store. Most well-known sites use cookies as part of a standard
              procedure to provide better customer service. Although most
              browsers are made to accept cookies, blocking cookies is a simple
              modification that can be made. Cookies also provide information
              about how users interact with the Website, such as whether they
              visit frequently or for the first time. We deploy the below
              mentioned cookies to support our Website:
              <span className="italic">
                {" "}
                Product, Name, Price, Quantity, Id
              </span>
            </p>
            <p className="">
              There are ways that you can manage and control cookies. Please be
              aware that some parts of our Website might no longer be fully
              accessible and that deleting or blocking cookies can have a
              negative effect on how you interact with the Website.
            </p>
          </li>
          <li>
            <p className="pt-4 text-primary">Customer Communication</p>
            <p className="">
              We communicate with you via SMS, email or alerts that are posted
              on the Website{" "}
              <a href="https://nuform.in" className="italic text-primary">
                nufrom.in
              </a>{" "}
              . By providing your contact information, you consent to receiving
              communications from us and you agree that all alerts, consensus,
              disclosures and other communications that we provide to you
              satisfy any legal requirement that those communications be in
              writing. This condition does not affect Your statutory rights.
            </p>
            <p className="">
              You acknowledge that once you register on the Website as a Nuform
              user, we will be able to use the mobile number you registered
              there to send you transaction-related SMS after you place any
              orders. On occasion, we might use your registered mobile number to
              send promotional SMS. The users hereby gives us permission to send
              transactional emails or SMS messages to their registered numbers
              and email IDs.
            </p>
          </li>
        </ul>
        <h5 className="mt-6 mb-2 text-lg lg:mt-6 text-primary">Opt out</h5>
        <p>
          Every customer has the option to choose not to receive any further
          marketing or promotional communications from us. You can get in touch
          with us at the address listed below if you would prefer not to receive
          any marketing or promotional content from us.{" "}
          <a
            className="italic text-primary"
            href="mailto:feedback@nuform.in"
            target="_blank"
            rel="noreferrer"
          >
            feedback@nuform.in
          </a>
        </p>
        <h5 className="mt-6 mb-2 text-lg lg:mt-6 text-primary">
          Targeted Advertising
        </h5>
        <p>
          To better understand how our customers use the Website, we utilise
          Google Analytics. You can learn more about Google's use of your
          personal data here:{" "}
          <a
            href="https://www.google.com/intl/en/policies/privacy/"
            target="_blank"
            rel="noreferrer"
            className=" text-primary"
          >
            google.com
          </a>{" "}
          . You may choose to opt-out of Google Analytics here:{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noreferrer"
            className=" text-primary"
          >
            tools.google.com
          </a>
          .
        </p>
        <p>
          We provide data about how you use the Website, what you buy, and how
          you interact with our advertisements on other Websites, with our
          advertising partners. We gather and disclose certain information to
          our advertising partners directly, and occasionally we use cookies or
          other comparable technologies (which, based on your location, you may
          agree to).
        </p>
        <h5 className="mt-6 mb-2 text-lg lg:mt-6 text-primary">Minors</h5>
        <p>
          We do not intentionally collect personal information from anyone under
          the age of eighteen (18) and our Website is not intended for use by
          those who are younger than that age. While you are welcome to explore
          our Website, please do not submit any personal information to us if
          you are under the age of eighteen (18). We will remove any personal
          information we may have unintentionally obtained from visitors under
          the age of eighteen (18) from our records if we become aware of it.
        </p>
        <h5 className="mt-6 mb-2 text-lg lg:mt-6 text-primary">Security</h5>
        <p>
          Regardless of the format in which it is stored, we make an effort to
          protect your personal information against loss or theft as well as
          unauthorized access, disclosure, copying, use, or modification with
          security measures appropriate to the sensitivity of the personal
          information.
        </p>
        <p>
          To this effect, we kindly advise you to share information with
          caution. Choose secure passwords and avoid sharing them with anyone.
        </p>
        <p>
          Furthermore, we make every effort to maintain the correctness of your
          personal information, as required by the purposes for which it was
          gathered. We realise the importance the you place on the Personal
          Information you have provided to us, so we have (i) made every effort
          to protect it, preventing misuse or unauthorised access, and (ii)
          allowing you to review and edit it.
        </p>

        <h5 className="mt-6 mb-2 text-lg lg:mt-6 text-primary">Contact</h5>
        <p>
          If you have additional questions upon inspecting this policy, would
          like to raise a complaint, or want more information regarding our
          privacy practices, please contact us at{" "}
          <a
            className="italic text-primary"
            href="mailto:feedback@nuform.in"
            target="_blank"
            rel="noreferrer"
          >
            feedback@nuform.in
          </a>{" "}
          or by post at the address below: Hyderabad, Telangana
        </p>
      </div>
      <ModalSidePanel />
      <ModalCheckout2 />
      <ModalOpacity />
      <Footer />
    </>
  );
};

export default Privacy;
