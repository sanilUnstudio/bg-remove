import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { client } from "../../utils/sanity";
import TopNavbar from '@/components/layout/navbar'
import Section from '@/components/layout/section'
import Hero from '@/components/Blog/Hero'
import Card from '@/components/Blog/Card'
import Gallery from '@/components/CommonComponents/Gallery'
import CTA from '@/components/ui/cta'
import Footer2 from '@/components/CommonComponents/Footer2'
import Layout from '@/components/CommonComponents/Layout';
export const revalidate = 3;

export async function getStaticProps() {
  try {
    const query = `
      *[_type == 'Unstudio-blog']{
      title,
        smallDescription,
        'currentSlug':slug.current,
        titleImage,
        'createdAt':_createdAt,
        author,
        verified
    }`;

    let data = await client.fetch(query);
    console.log(data,"blog all data")
    data = data.filter((dt)=> dt.verified == true)
    return {
      props: {
        data,
      },
      revalidate: 3, // Regenerate the page every 3 seconds if there's new data
    };
  } catch (err) {
    console.log("Error in fetching data: ", err.message);
    return {
      props: {
        data: [],
      },
    };
  }
}
const Blog = ({ data }) => {
  let pageURL = "https://unstudio.ai/blog";
  console.log(data)
  if (data.length == 0) {
    return (
      <Layout>
        <div className="bg-main h-full w-full  relative main-container">
          <div className=" max-w-[1750px] mx-auto">
            <TopNavbar />
            <Section className='relative'>
              <div className='text-center my-20'>

                <p className='font-poppin text-white text-3xl font-semibold'>We will be back soon!</p>

              </div>
            </Section>

            <Footer2 />
          </div>
        </div>
      </Layout>
    )
  }
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel='preload' href='https://ik.imagekit.io/ei5bqbiry/misc/Frame%20474.png?updatedAt=1714572654126' as='image' />
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
      <div className="bg-main h-full w-full  relative main-container">
        <div className=" max-w-[1750px] mx-auto">
          <TopNavbar />
          <Section className='relative'>
            <h1 className=' font-poppin text-5xl md:text-6xl lg:text-7xl tracking-wide text-primary-green text-center mb-2'>The Blog.</h1>
            <h2 className='text-xl lg:text-2xl leading-7 font-poppin text-center tracking-wider'>Here's what we've been brewing,<br />
              while you've been using our products.</h2>
            <Hero data={data[0]} />
            <div className="w-full absolute -bottom-2 h-px left-0 bg-black  flex justify-end items-end mx-auto" >
              <div className="w-full  inset-x-0 h-px  mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-primary-green to-transparent" />
            </div>
          </Section>

          <Section className='relative pb-24'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-20'>
              {data.map((dt) => {
                  return <Card dt={dt} />
              })}
            </div>
            <div className="w-full absolute -bottom-2 h-px left-0 bg-black  flex justify-end items-end mx-auto" >
              <div className="w-full  inset-x-0 h-px  mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-primary-green to-transparent" />
            </div>
          </Section>

          <div className='px-2 sm:px-0'>
          <Gallery heading1="Design Anything." heading2="From furniture, to cosmetics, to apparel...<br/>
          We have you covered." />
          </div>


          <div className='relative w-full'>
            <img src='https://ik.imagekit.io/ei5bqbiry/misc/Frame%20474.png?updatedAt=1714572654126' />
            <div className='absolute top-1/2 left-1/2 z-20 -translate-y-1/2 -translate-x-1/2 w-full '>
              <CTA />
            </div>
          </div>

          <Footer2 />
        </div>
      </div>
    </Layout>
  )
}

export default Blog