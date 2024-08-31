import React from "react";
import Footer from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import { blogsData } from ".";
import ModalSidePanel from "../../components/ModalSidePanel";
import ModalCheckout2 from "../../components/ModalCheckout2";
import ModalOpacity from "../../components/ModalOpacity";
import { Helmet } from "react-helmet";

const BlogDetails = () => {
  const { title } = useParams();

  // Filter out the blog with the matching title
 const matchingBlog = blogsData.find((blog) => blog.link === `/blogs/${title}`);
  const filteredBlogs = blogsData.filter(
    (blog) => blog.link !== `/blogs/${title}`
  );

  return (
    <>
      <Helmet>
        <title>
          {matchingBlog ? matchingBlog.title : "Blog Details | Nuform"}
        </title>
        <meta
          name="title"
          content={matchingBlog ? matchingBlog.title : "Blog Details | Nuform"}
        />
        <meta
          name="description"
          content={matchingBlog ? matchingBlog.description : "Blog Details | Nuform"}
        />
      </Helmet>
      <div className="container flex flex-col min-h-screen gap-4 py-6 mx-auto mt-10 xl:max-w-7xl lg:flex-row lg:justify-between lg:pb-10">
        <article className="px-2 mb-6">
          {title ===
          "Nuform_your_way_to_healthy_luminous_skin_with_vitamin_c" ? (
            <Blog1 />
          ) : title ===
            "Glow_up_8_must-know_secrets_for_a_brighter_complexion." ? (
            <Blog2 />
          ) : title === "Rain_or_shine_skincare_tips_for_monsoon_radiance" ? (
            <Blog3 />
          ) : (
            <div>
              {" "}
              <h3 className="pb-3 mb-4 text-lg font-medium md:text-xl text-primary">
                Sorry, we couldn’t find the page you’re looking for!
              </h3>
              <Link
                to="/blogs"
                className="rounded-md hover:bg-primary px-3.5 py-2.5 text-sm font-semibold hover:text-white shadow-sm hover:scale-105 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:px-8 border  border-primary "
              >
                &larr; Read other blogs
              </Link>
            </div>
          )}
        </article>
        <aside className="">
          <div className="w-full lg:w-80">
            <p className="pb-3 mb-4 text-lg font-medium md:text-xl text-primary ">
              Others Related Articles
            </p>

            <div className="flex flex-col gap-4">
              {filteredBlogs.map((blog) => (
                <div className="" key={blog.id}>
                  <Link to={`${blog.link}`}>
                    <div className="grid items-center w-full grid-cols-6 gap-4 p-2 overflow-hidden rounded-lg select-none lg:grid-cols-3 bg-gray-50 hover:bg-gray-100">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="col-span-2 overflow-hidden rounded-lg lg:col-span-1"
                      />
                      <div className="col-span-4 lg:col-span-2">
                        <p className="text-sm text-gray-500 truncate">
                          {blog.date}
                        </p>
                        <p className="font-medium line-clamp-2">{blog.title}</p>
                        <p className="text-gray-500 line-clamp-1 lg:hidden">
                          {blog.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <Footer />
      <ModalSidePanel />
      <ModalCheckout2 />
      <ModalOpacity />
    </>
  );
};

export default BlogDetails;

const Blog1 = () => {
  return (
    <>
      <h3 className="pb-3 text-2xl font-medium md:text-3xl text-primary ">
        Nuform your way to healthy, luminous skin with vitamin C
      </h3>
      <h5 className="pb-4 text-lg italic lg:text-xl lg:pb-8">
        By <span className="">Nuform</span> on 31 Augest 2024{" "}
      </h5>
      <div>
        <img
          src={require("../../assets/blogs/NUFORM_YOUR_WAY_TO_HEALTHY_LUMINOUS_SKIN_WITH_VITAMIN_C.jpg")}
          alt="Vitamin C skincare"
          className="rounded-lg"
        />
      </div>{" "}
      <p className="py-4 text-lg lg:py-6">
        Vitamin C is undoubtedly one of the most celebrated ingredients in the
        skincare industry. In today’s world, incorporating Vitamin C into your
        skincare routine is essential for achieving a flawless glow. But what
        makes it so remarkable? Let’s explore the benefits and discover why
        Vitamin C can become your skin’s new best friend.
      </p>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          1. Evens Out and Lightens Complexion
        </h5>
        <p className="py-3 text-lg">
          Vitamin C is renowned for its ability to brighten the skin. It works
          uniquely on melanin, the pigment responsible for skin color. Regular
          use of{" "}
          <a
            href="https://www.healthline.com/health/beauty-skin-care/vitamin-c-serum-benefits"
            className="italic text-blue-700 "
            target="_blank"
            rel="noreferrer"
          >
            Vitamin C helps improve skin tone
          </a>{" "}
          and reduces marks caused by sun exposure, aging, and acne. Imagine
          having skin that’s as radiant as a pearl—Vitamin C is your key to
          achieving that luminous glow.
        </p>
      </div>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          2. Fights Free Radicals
        </h5>
        <p className="py-3 text-lg">
          Your skin constantly battles free radicals from UV radiation,
          pollution, and other environmental stressors. These free radicals can
          lead to premature aging, fine lines, and wrinkles. As an antioxidant,
          Vitamin C helps neutralize these free radicals, preserving your skin’s
          elasticity and overall health.
        </p>
      </div>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          3. Boosts Collagen Production
        </h5>
        <p className="py-3 text-lg">
          <a
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6835901/"
            className="italic text-blue-700 "
            target="_blank"
            rel="noreferrer"
          >
            Collagen is the protein that keeps skin firm and elastic.
          </a>{" "}
          As we age, collagen production decreases, leading to sagging and
          wrinkles. Vitamin C plays a crucial role in collagen synthesis, making
          it a vital ingredient in anti-aging skincare. Regular Vitamin C
          supplementation supports your body’s natural collagen production,
          helping to maintain
        </p>
      </div>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          4. Hydrates and Restores Skin’s Natural State
        </h5>
        <p className="py-3 text-lg">
          While Vitamin C is well-known for its brightening effects, it also
          offers excellent moisturizing benefits. It helps retain moisture,
          keeping your skin smooth and soft. This added hydration reduces the
          appearance of fine lines, leaving your skin refreshed and glowing.
        </p>
      </div>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          5. Reduces Under-Eye Circles
        </h5>
        <p className="py-3 text-lg">
          Dark circles and puffiness are common concerns. Vitamin C is effective
          in lightening hyperpigmentation, including the sensitive under-eye
          area. It helps reduce the appearance of dark circles, giving you a
          brighter, more rested look.
        </p>
      </div>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          6. Speeds Up Healing
        </h5>
        <p className="py-3 text-lg">
          Vitamin C is beneficial for healing acne scars, blemishes, and
          sunburnt skin. Its anti- inflammatory properties help reduce redness
          and itchiness while promoting faster cell regeneration.
        </p>
      </div>
      <div className="mb-6 lg:mb-10">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          7. Protects Against Sun Damage
        </h5>
        <p className="py-3 text-lg">
          While Vitamin C isn’t a substitute for sunscreen, it provides
          additional protection against UV damage. It neutralizes free radicals
          and mitigates oxidative stress, making it a valuable complement to
          your SPF for comprehensive skin protection.
        </p>
      </div>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          Conclusion
        </h5>

        <p className="py-3 text-lg">
          When it comes to achieving glowing, healthy skin, Vitamin C stands out
          as a top choice. It lightens, protects, and revitalizes the skin,
          making it a cornerstone of{" "}
          <a
            href="https://nuform.in/"
            className="italic text-blue-700 "
            target="_blank"
            rel="noreferrer"
          >
            Nuform’s skincare supplements.
          </a>{" "}
          By incorporating Vitamin C into your daily beauty routine, you’re not
          just investing in a product—you’re investing in your skin’s future.
          Get ready to shine brighter than ever!
        </p>
      </div>
      <div className="mt-10">
        <Link
          to="/blogs"
          className="rounded-md hover:bg-primary px-3.5 py-2.5 text-sm font-semibold hover:text-white shadow-sm hover:scale-105 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:px-8 border  border-primary "
        >
          &larr; Back to Blogs
        </Link>
      </div>
    </>
  );
};
const Blog2 = () => {
  return (
    <>
      <h3 className="pb-3 text-2xl font-medium md:text-3xl text-primary ">
        Glow up - 8 must-know secrets for a brighter complexion.
      </h3>
      <h5 className="pb-4 text-lg italic lg:text-xl lg:pb-8">
        By <span className="">Nuform</span> on 31 Augest 2024{" "}
      </h5>
      <div>
        <img
          src={require("../../assets/blogs/Glow_up_8_must-know_secrets_for_a_brighter_complexion.jpg")}
          alt="Vitamin C skincare"
          className="rounded-lg"
        />
      </div>{" "}
      <p className="py-4 text-lg lg:py-6">
        A new wave that is so much more than just a trend is detoxification of
        your skin, as this is a very important part of healthy skincare. As we
        get exposed to more pollution, stress, and unhealthy lifestyles, our
        skin needs special attention so as to eliminate toxins within it.
        <br />
        To help you get enhanced skin that glows and looks healthy, the
        following is a compilation of eight basic truths about detoxifying your
        skin.
      </p>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          1. Acquaint Yourself With The Idea of Skin Purification
        </h5>
        <p className="py-3 text-lg">
          kin cleansing includes the elimination of debris, toxic substances,
          dirt, and dead skin cells from our skin surface. The primary benefit
          is to rejuvenate the skin and prepare it for better acceptance of{" "}
          <a
            href="https://nuform.in/shop"
            className="italic text-blue-700 "
            target="_blank"
            rel="noreferrer"
          >
            powder skincare products.
          </a>{" "}
          Detoxifying leads to unblocking of the pores in the skin, thus leaving
          less chance of the formation of acne and fresh, smooth skin.
        </p>
      </div>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          2. Hydration is Key
        </h5>
        <p className="py-3 text-lg">
          Consumption of water to supply the body is helpful in the purification
          of the skin. Drinking water also contributes to the evacuation of
          toxins out of your system, thus{" "}
          <a
            href="https://www.medicalnewstoday.com/articles/290814"
            className="italic text-blue-700 "
            target="_blank"
            rel="noreferrer"
          >
            moistening your skin.
          </a>{" "}
          Drink at least eight glasses of water per day to help the body in its
          function of detoxification. Nuform skin supplements leave your skin
          feeling refreshed, moisture-locked, and happy!
        </p>
      </div>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          3. Incorporate Antioxidant-Rich Foods
        </h5>
        <p className="py-3 text-lg">
          Berries,{" "}
          <a
            href="https://www.healthline.com/nutrition/top-10-evidence-based-health-benefits-of-green-tea"
            className="italic text-blue-700 "
            target="_blank"
            rel="noreferrer"
          >
            green tea,
          </a>{" "}
          and green leaves are some of the mostly used foods that have high
          antioxidants that are used in the detoxification of the skin.
          Antioxidants have certain protective effects against skin because they
          react with free radicals and minimise the effects of oxidative stress
          that causes skin ageing.
        </p>
      </div>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          4. Use Detoxifying Skincare Products
        </h5>
        <p className="py-3 text-lg">
          The vitamin A, zinc supplements, and antioxidant-rich skincare that
          preferably should be contained in the skincare products should also be
          a pointer to the detoxifying possibilities. These ingredients assist
          in making the skin free of some of the impurities and excess oils on
          the skin’s surface. There are plant-based supplements that are
          developed to give a refreshing cleansing of the skin by eliminating
          toxins that accumulate over time on the skin surface.
        </p>
      </div>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          5. Get Moving
        </h5>
        <p className="py-3 text-lg">
          Exercise has the ability to cause more blood to flow to the skin as it
          transports oxygen and nutrients and, at the same time, takes with it
          waste products. Sweating out those toxins can be useful, for example,
          during exercise; sweating knocks toxins out of your system. Be sure to
          engage in at least 30 minutes of moderate exercise on most of the days
          of the week to{" "}
          <a
            href="https://www.healthline.com/health/beauty-skin-care/skin-detox"
            className="italic text-blue-700 "
            target="_blank"
            rel="noreferrer"
          >
            enhance the skin’s detoxification.
          </a>{" "}
        </p>
      </div>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          6. Prioritize Quality Sleep
        </h5>
        <p className="py-3 text-lg">
          The skin must breathe, and this can only happen when one is asleep,
          and this ought to be quality sleep. While asleep, it is a known fact
          that other organs of the body are at work since it also renews itself.
          Sleeping for too little will make you look like you are always tired
          and stressed; which is bad for the skin. Make it a point to get enough
          amounts of sleep in a day by sleeping for 7-9 hours at night to help
          boost your body’s skin cleansing process.
        </p>
      </div>
      <div className="mb-6 ">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          7. Exfoliate Regularly
        </h5>
        <p className="py-3 text-lg">
          The removal of dead skin cells promotes the freedom of the skin from
          those cells, which pile up and block the skin pores. This process
          smoothes the skin’s surface and ensures other types of cosmetics are
          more efficiently absorbed, besides, it helps to achieve the skin’s
          glow. Make sure you select a mild scrub that does not irritate the
          skin, and some scrubs should be used once or twice every week.
        </p>
      </div>
      <div className="mb-3 lg:mb-10">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          8. Avoid Harmful Habits
        </h5>
        <p className="py-3 text-lg">
          There are also some behaviours that limit skin’s ability to cleanse
          itself. One is exposed to carcinogens from cigarettes, toxins from
          excessive alcohol, and toxins from processed foods, which are harmful
          for the skin. Therefore, adding to your list of harmful habits will{" "}
          <a
            href="https://newsinhealth.nih.gov/2015/11/keep-your-skin-healthy"
            className="italic text-blue-700 "
            target="_blank"
            rel="noreferrer"
          >
            improve your skin health
          </a>{" "}
          and help it detoxify naturally and have that glow.
        </p>
      </div>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          Conclusion
        </h5>

        <p className="py-3 text-lg">
          Cleansing your skin surface is very important for good and glowing
          skin. These are the fundamental guides with which skin detoxification
          is done; make sure to always follow these basic tips to help your skin
          within you have a radiant glow. Stick to practices noted here for
          long-term and clear skin benefits, consistency is the key to{" "}
          <a
            href="https://nuform.in/"
            className="italic text-blue-700 "
            target="_blank"
            rel="noreferrer"
          >
            Nuform - The best skincare supplements for beautiful skin!
          </a>{" "}
        </p>
      </div>
      <div className="mt-10">
        <Link
          to="/blogs"
          className="rounded-md hover:bg-primary px-3.5 py-2.5 text-sm font-semibold hover:text-white shadow-sm hover:scale-105 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:px-8 border  border-primary "
        >
          &larr; Back to Blogs
        </Link>
      </div>
    </>
  );
};
const Blog3 = () => {
  return (
    <>
      <h3 className="pb-3 text-2xl font-medium md:text-3xl text-primary ">
        Rain or shine: skincare tips for monsoon radiance.
      </h3>
      <h5 className="pb-4 text-lg italic lg:text-xl lg:pb-8">
        By <span className="">Nuform</span> on 29 Augest 2024{" "}
      </h5>
      <div>
        <img
          src={require("../../assets/blogs/Rain_or_shine_skincare_tips_for_monsoon_radiance.jpg")}
          alt="Vitamin C skincare"
          className="rounded-lg"
        />
      </div>{" "}
      <p className="py-4 text-lg lg:py-6">
        The refreshing monsoon rain after a scorching summer is a welcome
        relief, but it comes with its own set of skin challenges. High humidity,
        fluctuating temperatures, and frequent rainfall can leave your skin
        greasy, dull, and prone to acne.
        <br />
        But here’s the good news: even if you have normal skin, you don’t have
        to let the rain wreak havoc. By following a few{" "}
        <a
          href="https://www.stbotanica.com/blog/monsoon-skincare-tips?"
          className="italic text-blue-700 "
          target="_blank"
          rel="noreferrer"
        >
          essential monsoon skincare tips
        </a>{" "}
        and updating your routine, you can keep your skin radiant all season
        long:
      </p>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          1. Cleanse Twice a Day
        </h5>
        <p className="py-3 text-lg">
          Monsoon humidity leads to excess sebum production, clogging pores and
          causing acne breakouts. Start your day with a mild, non-sulfate
          cleanser to clear away oily deposits and dirt without harming your
          skin. Cleanse again before bed to remove the pollutants and impurities
          your skin encounters throughout the day.
        </p>
      </div>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          2. Exfoliate Regularly
        </h5>
        <p className="py-3 text-lg">
          Regular exfoliation is key to combating skin irregularities and
          clogged pores. Use a mild scrub 2-3 times a week to achieve softer,
          fresher skin. For sensitive skin, opt for exfoliants containing
          oatmeal or fruit enzymes that are gentle yet effective.
        </p>
      </div>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          3. Keep Your Body’s Insides and Skin Synched
        </h5>
        <p className="py-3 text-lg">
          Despite the humid weather, don’t skip your moisturizer, even at night.
          Humidity can trick you into thinking your skin doesn’t need moisture,
          but it’s essential to{" "}
          <a
            href="https://www.healthline.com/health/beauty-skin-care/better-skin-in-3-days"
            className="italic text-blue-700 "
            target="_blank"
            rel="noreferrer"
          >
            Keep your skin hydrated.
          </a>{" "}
          Choose a water-based lotion with a light texture to avoid acne
          flare-ups. And don’t forget to drink plenty of water to maintain your
          skin’s moisture levels and overall health.
        </p>
      </div>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          4. Keep Your Skin Dry
        </h5>
        <p className="py-3 text-lg">
          Moisture buildup from the rain can create a breeding ground for fungi,
          leading to fungal infections in areas like the armpits, between the
          toes, and skin crevices. If you get wet in the rain, dry off
          thoroughly and change into dry clothes. Use antifungal powder in areas
          prone to infection.
        </p>
      </div>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          5. Eat a Balanced Diet
        </h5>
        <p className="py-3 text-lg">
          Your diet plays a crucial role in your skin’s health. Incorporate
          plenty of fruits and vegetables rich in antioxidants, vitamins, and
          minerals. Berries, oranges, spinach, and nuts help fight free radicals
          and enhance your natural glow.{" "}
          <a
            href="https://timesofindia.indiatimes.com/life-style/food-news/things-to-do-and-avoid-after-having-too-much-oily-food/photostory/77332429.cms"
            className="italic text-blue-700 "
            target="_blank"
            rel="noreferrer"
          >
            Avoid oily foods,
          </a>{" "}
          especially fried items, to keep your skin clear and healthy.
        </p>
      </div>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          6. A Healthy Skin – Why You Should Go for Supplements
        </h5>
        <p className="py-3 text-lg">
          Skincare supplements, especially those with{" "}
          <span className="font-bold">vitamin A</span> and{" "}
          <span className="font-bold">vitamin C</span>, can help address common
          monsoon skin issues like<span className="font-bold"></span>
          hydration and detoxification. Look for supplements containing{" "}
          <span className="font-bold">zinc</span>, plant-based ingredients, or
          powder formulations for optimal benefits. Daily use of these
          supplements can help restore your skin’s luster and maintain its
          health.
        </p>
      </div>
      <div className="mb-6 lg:mb-10">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          7. Get Enough Sleep
        </h5>
        <p className="py-3 text-lg">
          Never{" "}
          <a
            href="https://ymow.org/dont-underestimate-the-power-of-sleep/"
            className="italic text-blue-700 "
            target="_blank"
            rel="noreferrer"
          >
            underestimate the power of a good night’s sleep.
          </a>{" "}
          Your skin repairs and regenerates itself while you sleep, so aim for
          7-8 hours of quality rest each night. Proper sleep helps fight stress,
          banishes dark circles, and leaves your skin radiant.
        </p>
      </div>
      <div className="mb-3">
        <h5 className="text-xl font-semibold text-primary lg:text-2xl">
          Conclusion
        </h5>

        <p className="py-3 text-lg">
          The monsoon season may bring challenges for your skincare routine, but
          with consistency and the right tips, you can keep your skin glowing
          naturally. Prepare for the season, stay dedicated, and enjoy the
          beauty of healthy skin. <br /> For the{" "}
          <a
            href="https://nuform.in/"
            className="italic text-blue-700 "
            target="_blank"
            rel="noreferrer"
          >
            best skincare products
          </a>{" "}
          to achieve glowing skin, experience the Nu difference with Nuform
          today!
        </p>
      </div>
      <div className="mt-10">
        <Link
          to="/blogs"
          className="rounded-md hover:bg-primary px-3.5 py-2.5 text-sm font-semibold hover:text-white shadow-sm hover:scale-105 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:px-8 border  border-primary "
        >
          &larr; Back to Blogs
        </Link>
      </div>
    </>
  );
};
