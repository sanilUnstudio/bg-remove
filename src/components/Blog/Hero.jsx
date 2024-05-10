import React, { useEffect, useState } from 'react'
import { client, urlFor } from "../../utils/sanity";
import Section from '../layout/section'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import dayjs from "dayjs";
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)
dayjs.extend(utc)
dayjs.extend(timezone)

const Hero = ({ data }) => {
    function formatTimestamp(utcDateString) {
        return dayjs(utcDateString).tz("Asia/Calcutta", true).format('MMM DD,YYYY')
    }
        return (
            <Section>
                <Link className="w-full h-full" href={`/blog/${data?.currentSlug}`}>
                    <div className='flex flex-col md:h-[50vh]  md:flex-row  overflow-hidden w-10/12 mx-auto'>

                        <div className='flex-col md:w-1/2  rounded-x-lg rounded-t-lg md:rounded-t-none  md:rounded-l-xl relative overflow-hidden'>
                            {data?.titleImage && <img src={urlFor(data?.titleImage).url()} className='h-full w-full object-cover' />}
                            <div style={{ boxShadow: "0px 0px 40px 60px #000" }} className="w-px h-full hidden md:block absolute -left-px top-0 z-10" />
                        </div>

                        <div
                            className=' w-full h-full md:w-1/2  flex md:hidden items-center justify-center rounded-x-lg rounded-b-lg  overflow-hidden'
                            style={{ background: "linear-gradient(180deg, rgba(5,246,174,0.3) 0%, rgba(5,246,174,0.7) 100%)" }}
                        >
                            <div className='h-full mb-px  w-[calc(100%-2px)] bg-black px-4 flex flex-col rounded-r-0 items-center rounded-x-lg rounded-b-lg   justify-between py-4'>
                                <div className='mx-auto w-10/12 sm:w-8/12 flex flex-col gap-4 md:mt-12'>
                                    <h2 className='text-2xl font-poppin leading-snug'>{data?.title}</h2>
                                    <p className='text-sm text-gray-200 tracking-wider leading-4'>{data?.smallDescription}</p>
                                    <p className='text-sm text-gray-300'>{formatTimestamp(data?.createdAt)}</p>
                                </div>
                                <div className='flex w-full justify-between items-center text-primary-green mt-4'>
                                    <div className='flex items-center gap-4'>
                                        <div className='w-8 h-8 bg-white rounded-full'>
                                            {data?.author && <img src={urlFor(data?.author?.profilePicture)?.url()} className='h-full w-full object-cover' />}
                                        </div>
                                        <h6 className='text-sm'>By {data?.author?.name}</h6>
                                    </div>
                                    <h6 className='text-primary-green text-sm flex items-center  gap-2'>Continue reading <ChevronRight size={20} /></h6>
                                </div>
                            </div>
                        </div>
                        <div
                            className=' w-full h-full md:w-1/2  relative hidden md:block rounded-r-xl  overflow-hidden'
                            style={{ background: "linear-gradient(180deg, rgba(5,246,174,0.3) 0%, rgba(5,246,174,0.7) 100%)" }}
                        >
                            <div className='h-[calc(100%-2px)] absolute top-px right-px mb-px  w-[calc(100%-2px)] bg-black px-4 flex flex-col rounded-r-0 items-center rounded-r-xl  justify-between py-4'>
                                <div className='mx-auto w-10/12 sm:w-8/12 flex flex-col gap-4 md:mt-12'>
                                    <h2 className='text-2xl font-poppin leading-snug'>{data?.title}</h2>
                                    <p className='text-sm text-gray-200 tracking-wider leading-4'>{data?.smallDescription}</p>
                                    <p className='text-sm text-gray-300'>{formatTimestamp(data?.createdAt)}</p>
                                </div>
                                <div className='flex w-full justify-between items-center text-primary-green mt-4'>
                                    <div className='flex items-center gap-4'>
                                        <div className='w-8 h-8 bg-white rounded-full'>
                                            {data.author && <img src={urlFor(data?.author.profilePicture).url()} className='h-full w-full object-cover' />}
                                        </div>
                                        <h6 className='text-sm'>By {data?.author?.name}</h6>
                                    </div>
                                    <h6 className='text-primary-green text-sm flex items-center  gap-2'>Continue reading <ChevronRight size={20} /></h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </Link>
            </Section>
        )
    }

export default Hero