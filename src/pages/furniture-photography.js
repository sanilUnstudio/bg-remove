import React from 'react'
import TopNavbar from '@/components/layout/navbar'
import Section from '@/components/layout/section'
import HeroButton from '@/components/Hero/HeroButton'
import HeroGallery from '@/components/Hero/HeroGallery'
import { FurniturePhotoGraphyHeroSection, FurniturePhotoGraphyGallerySection } from '@/utils/seoMap'
import Gallery from '@/components/CommonComponents/Gallery'
import CTA from '@/components/ui/cta'
import FAQ from '@/components/CommonComponents/FAQ'
import Footer2 from '@/components/CommonComponents/Footer2'
import { cn } from '@/utils/helper'
import { NextSeo } from "next-seo";
import Layout from '@/components/CommonComponents/Layout'

const furniture = () => {
  const pageURL = 'https://www.unstudio.ai/furniture-photography';

  return (
    <>
      <Layout>
      <NextSeo
        title="Create Stunning Product Visuals using AI, instantly | Unstudio"
          description="Give your furniture photography a whole new feel, with our 500+ customizable templates."
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
          description: "Give your furniture photography a whole new feel, with our 500+ customizable templates.",
          site_name:
            "Create Stunning Product Visuals using AI, instantly | Unstudio",
        }}
      ></NextSeo>

      <div className="bg-main h-full w-full  relative main-container">
          <div className=" max-w-[1750px] mx-auto">
              <TopNavbar />
              <Section className='flex flex-col md:flex-row  gap-12 sm:gap-4 justify-between md:items-center px-6 md:px-14 lg:px-20'>
                  <div className='flex flex-col gap-4 font-poppin '>
                      <h1 className='text-4xl md:text-3xl lg:text-6xl text-white'>Bulky furniture </h1>
                      <h1 className='text-4xl md:text-3xl lg:text-6xl text-white'>Expensive studios!</h1>
                      <h1 className='text-primary-green text-4xl md:text-3xl lg:text-6xl tracking-wide'>No Problem.</h1>
                      <h3 className='text-xl lg:text-2xl leading-7 tracking-wide'>Unstudio does the heavy lifting for you to create <br /> stunning furniture photos for every style and room</h3>

                      <HeroButton />
                  </div>

                  <div className='w-full px-2 sm:px-0 md:w-1/2 overflow-hidden'>
                      <HeroGallery data={FurniturePhotoGraphyHeroSection} />
                  </div>
              </Section>

              <Section className='mx-2 md:mx-14 lg:mx-20'>
                  <h1 className='text-center font-bold font-poppin leading-7 md:leading-10 tracking-wide text-xl md:text-xl lg:text-4xl'>
                      Stage your furniture anywhere and everywhere in different settings<br />
                  </h1>
                  <h1 className='text-center mt-2 font-poppin md:leading-8 tracking-wide text-lg md:text-xl lg:text-3xl'
                  >Choose from 500+ templates for your furniture photography</h1>

                  <h1 className='text-center mt-4 font-poppin md:leading-8 tracking-wide text-sm md:text-xl lg:text-lg'>
                      Here's the outcome other users got from our app testing for furniture  <br /> Unstudio pictures. If they can, so can you.</h1>

                  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3 sm:mx-0 xl:grid-cols-5 mt-16 gap-3'>
                      {FurniturePhotoGraphyGallerySection().map((item,idx) => (
                          <div key={item.id} className={cn('flex rounded-3xl overflow-hidden justify-center w-full items-center', idx > 5 && "hidden sm:block")}>
                                  <img src={item.url} alt="food" className='object-cover w-full cursor-pointer rounded-3xl hover:scale-105 duration-75 transition  hover:opacity-40' />
                              </div>
                          ))}
                  </div>
              </Section>



              <Gallery heading1="Discover more products:" heading2="we have hundreds of templates for you to choose from." />

              <FAQ />

              <div className='relative w-full'>
                  <img className='w-full' src='https://ik.imagekit.io/ei5bqbiry/misc/Frame%20474.png?updatedAt=1714572654126' />
                  <div className='absolute top-1/2 left-1/2 z-20 -translate-y-[40%]  -translate-x-1/2 w-full '>
                      <CTA />
                  </div>
              </div>


              <Footer2 />
          </div>
          
    </div>
    </Layout>
    </>
  )
}

export default furniture