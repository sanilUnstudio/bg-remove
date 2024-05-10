import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Reviews from "../components/CommonComponents/Reviews";
import Footer2 from "../components/CommonComponents/Footer2";
import Layout from "../components/CommonComponents/Layout";
import { NextSeo } from "next-seo";
import mixpanel from "mixpanel-browser";
import { MixpanelTracking } from "../utils/mixpanel";
import Hero from "@/components/CommonComponents/Hero";
import Navbar from "@/components/layout/navbar";
import Gallery from "@/components/CommonComponents/Gallery";
import EnhancedPreview from "@/components/CommonComponents/EnhancedPreview";
import Gallery2 from "@/components/CommonComponents/gal";
import FAQ from "@/components/CommonComponents/FAQ";
import CTA from "@/components/ui/cta";
import Props from "@/components/CommonComponents/Props";

export default function Home() {
  // const { anonymousID } = useContext(AppContext);
  const [emailID, setemailID] = useState("");
  const [formSubmit, setformSubmit] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingTwo, setIsLoadingTwo] = useState(false);
  const [isLoadingThree, setIsLoadingThree] = useState(false);
  const [isLoadingFour, setIsLoadingFour] = useState(false);

  const loginClick = () => {
    setIsLoading(true);
    //   MixpanelTracking.getInstance().track('Try Unstudio for free', {
    //     distinct_id: anonymousID,
    //     source: 'Home page',
    //     description: 'Try Unstudio for free button clicked',
    //   })
  };
  const loginClickTwo = () => {
    setIsLoadingTwo(true);
    // MixpanelTracking.getInstance().track('Make a scene', {
    //   distinct_id: anonymousID,
    //   source: 'Home page',
    //   description: 'Make a scene button clicked',
    // })
  };
  const loginClickThree = () => {
    setIsLoadingThree(true);
    // MixpanelTracking.getInstance().track('Create a shot', {
    //   distinct_id: anonymousID,
    //   source: 'Home page',
    //   description: 'Create a shot button clicked',

    // })
  };
  const loginClickFour = () => {
    setIsLoadingFour(true);
    // MixpanelTracking.getInstance().track('Share your vision', {
    //   distinct_id: anonymousID,
    //   source: 'Home page',
    //   description: 'Share your vision button clicked',
    // })
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setformSubmit(true);

    const email = e.target[0].value;
    console.log(email);
    if (!email) return;
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!validRegex.test(email)) {
      alert("Please enter a valid email address");
      Swal.fire({
        title: "Please enter a valid email address",
        icon: "error",
      });
      return;
    }
    //Send data to Sheets
    const data = { email: email };
    try {
      const response = await fetch("/api/sendToSheet", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "Application/json",
        },
      });
      if (response.status == 200) {
        setformSubmit(false);
        Swal.fire({
          title: "Thank you for signing up!",
          icon: "success",
        });
        setemailID("");
        router.push("/waitlist-success");
      }
    } catch (error) {
      console.log("Error  : ", error);
    }
  };

  let pageURL = "https://unstudio.ai/";
  return (

    <div className="bg-main h-full w-full  relative main-container">
      <div className=" max-w-[2050px] mx-auto">
      <Head>
        <link rel="preload" href="https://ik.imagekit.io/ei5bqbiry/Landing%20Page/product.mp4" as="video" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Project",
              name: "Unstudio",
              alternateName: "AI product visuals",
              url: "https://www.unstudio.ai/",
              logo: "https://www.unstudio.ai/logo_unstudio3.png",
              sameAs: [
                "https://www.linkedin.com/company/unstudioai",
                "https://www.instagram.com/unstudio.ai/",
                "https://www.unstudio.ai/",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Unstudio",
                  item: "https://www.unstudio.ai/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Login",
                  item: "https://www.unstudio.ai/login",
                },
              ],
            }),
          }}
        ></script>
      </Head>

      <NextSeo
        title="Create Stunning Product Visuals using AI, instantly | Unstudio"
        description="Unstudio uses AI to create stunning visuals for your products for marketing, social media, website and more, instantly. No Photoshoots required."
        canonical={pageURL}
        instagram={{
          handle: "@unstudio.ai",
          site: "@unstudio.ai",
          cardType: "summary_large_image",
        }}
        linkedin={{
          handle: "@unstudio.ai",
          site: "@unstudio.ai",
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: pageURL,
          title:
            "Create Stunning Product Visuals using AI, instantly | Unstudio",
          description:
            "Unstudio uses AI to create stunning visuals for your products for marketing, social media, website and more, instantly. No Photoshoots required.",
          site_name:
            "Create Stunning Product Visuals using AI, instantly | Unstudio",
        }}
      ></NextSeo>
      <Layout>
        <div className="sticky top-0 z-[80]">
          <Navbar />
        </div>
        <Gallery2 />
          <EnhancedPreview />
          <Props/>
          <Gallery heading1="Design Anything." heading2="From furniture, to cosmetics, to apparel...<br/>
          We have you covered." />
        <Reviews />
        <FAQ />
        <CTA/>

        <Footer2 />
        </Layout>
      </div>
    </div>
  );
}
