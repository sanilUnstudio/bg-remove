import React from 'react'
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "../../utils/sanity"
import { getImageDimensions } from '@sanity/asset-utils'
// import NewsLetter from '@/components/Blog/NewsLetter';
import TopNavbar from '@/components/layout/navbar';
import CTA from '@/components/ui/cta';
import Footer2 from '@/components/CommonComponents/Footer2';
import dayjs from "dayjs";
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)
dayjs.extend(utc)
dayjs.extend(timezone)
export async function getServerSideProps(context) {
    const { slug } = context.params;

    try {
        const query = `*[_type == 'Unstudio-blog' && slug.current =='${slug}']{
  "currentSlug":slug.current,
    title,
    content,
    titleImage,
    smallDescription
}[0]`;

        const data = await client.fetch(query);
        return {
            props: {
                data
            },
        };
    } catch (error) {
        console.log("Error in fetching blog : ", error.message);
        return {
            props: {
                data: [],
            },
        };
    }
}

const SampleImageComponent = ({ value, isInline }) => {
    const { width, height } = getImageDimensions(value)
    console.log(value, 'value');


    return (
        <div className='w-full mx-auto flex my-20 flex-col items-center'>

            <img
                src={urlFor(value).url()}
                alt={value.alt || ' '}
                loading="lazy"
                style={{
                    // Display alongside text if image appears inside a block text span
                    display: isInline ? 'inline-block' : 'block',
                    // maxHeight: "300px",
                    // Avoid jumping around with aspect-ratio CSS property
                    aspectRatio: width / height,
                }}
            />
            <div className='w-full text-xs italic text-right mt-2  px-10' >{value.alt}</div>
        </div>
    )
}


const ImageRow = ({ value, type, onChange }) => {
    return (
        <div className='flex flex-row flex-wrap justify-center items-center w-full my-12 gap-4'>
            {value.images.map((image, index) => {
                return (
                    <div key={index} className='flex-1' >
                        <img
                            src={urlFor(image).url()}
                            alt={image.alt || ' '}
                            className='rounded-lg w-full h-full object-cover'
                        />
                    </div>
                )
            })}
        </div>
    )
}

const components = {
    types: {
        image: SampleImageComponent,
        rowImages: ImageRow,
        // Any other custom types you have in your content
        // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
}

const Blog = ({ data }) => {
    function formatTimestamp(utcDateString) {
        return dayjs(utcDateString).tz("Asia/Calcutta", true).format('MMM DD,YYYY')
    }

    return (
        <div  className='bg-main h-full w-full  relative main-container '>
            <TopNavbar />
            <div id='blog-post' className="w-full mx-auto ">
                <div className='relative py-20'>
                    <h1 className='text-2xl text-center w-1/2 mb-8 mx-auto font-poppin tracking-wider leading-snug'>{data.title}</h1>
                    <div className='mx-auto md:max-w-[80%] sm:w-[75%] w-[95%] h-[450px]  flex items-center justify-center relative'>
                        <div className='h-full absolute top-0 left-0 w-full overflow-hidden rounded-lg'>
                            <img
                                src={urlFor(data?.titleImage).url()}
                                alt="image"
                                className="rounded-lg w-full h-full object-cover"
                            />
                        </div>
                        <div style={{ boxShadow: "0px 0px 60px 80px #000" }} className="w-px h-full hidden md:block absolute -left-px top-0 z-10" />
                        <div style={{ boxShadow: "0px 0px 60px 80px #000" }} className="w-px h-full hidden md:block absolute -right-px top-0 z-10" />
                    </div>
                    <div className="w-full absolute -bottom-2 h-px left-0 bg-black  flex justify-end items-end mx-auto" >
                        <div className="w-full  inset-x-0 h-px  mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-primary-green to-transparent" />
                    </div>
                </div>
                <div className="content | md:max-w-[60%] sm:w-[75%] w-[95%] mx-auto  mt-16 prose prose-blue prose-xl dark:prose-invert">
                    <h4 className='text-white font-poppin tracking-wider'>{data.smallDescription} </h4>
                    <PortableText value={data?.content} components={components} />
                </div>
            </div>
            <div className='relative w-full mt-12'>
                <img src='https://ik.imagekit.io/ei5bqbiry/misc/Frame%20474.png?updatedAt=1714572654126' />
                <div className='absolute top-[60%] left-1/2 z-20 -translate-y-1/2 -translate-x-1/2 w-full '>
                    <CTA />
                </div>
                <div className="w-full absolute top-16 h-4 left-0 bg-black  flex justify-end items-end mx-auto" >
                    <div className="w-full  inset-x-0 h-px  mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-primary-green to-transparent" />
                </div>
            </div>

            <Footer2 />
        </div>
    )
}

export default Blog