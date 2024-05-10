'use client'
import React, { useState } from 'react'
import {
    Button,
    Spinner,
    Switch,
    Tooltip,
} from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";
import Link from "next/link";
import { AiFillCheckCircle } from 'react-icons/ai';
import { GoDotFill } from "react-icons/go";
import Layout from '@/components/CommonComponents/Layout';
import { IoInformationCircleOutline } from "react-icons/io5";
import { Divider } from "@nextui-org/react";
import TopNavbar from '@/components/layout/navbar';
const Pricing = () => {

    const [yearly, setYearly] = useState(false);
    const [starterTooltip, setStartertooltip] = useState(false);
    const [proTooltip, setProtooltip] = useState(false)
    const [loading, setLoading] = useState(false);
    const proPlanDetails = [
        "Unlimited Images",
        "Use Images Commercially",
        "Custom Prompts",
        "Unlimited Image enhance",
        "Access to all templates(500+)",
        "Any Dimension(coming soon)",
        "Props(coming soon)",
        "Editing Tools(coming soon)",
        "No Watermark"
    ];
    const basicPlanDetails = [
        "30 Images",
        "Use Images Commercially",
        "Access to 20 templates",
        "Access to 3 Image enhance",
        "Square Dimension(1024 * 1024)",
        "No Watermark"
    ];

    const starterPlan = [
        // "Starter Plan(15$ monthly / 12$ if paid yearly",
        "200 Images",
        "Use Images Commercially",
        "Custom Prompts",
        "Access to 40 Image enhance",
        "Access to all templates(500+)",
        "Any Dimension(coming soon)",
        "Props(coming soon)",
        "Editing Tools(coming soon)",
        "No Watermark"
    ]

    return (
        <Layout>
        <div className='main-container w-full h-screen bg-main'>
            <TopNavbar />
            <div className='flex flex-col items-center gap-4 mt-12 overflow-hidden'>
                <h1 className='text-4xl font-semibold'>Pricing</h1>
                <div className='flex  mx-auto items-center gap-2 text-white'>

                    <div className='flex items-center cursor-pointer relative  min-h-12 min-w-[320px]'>
                        <div onClick={() => setYearly(true)} className={`min-w-40 ${yearly ? 'bg-white text-black z-10' : 'bg-[#18181c] z-0 '} left-5 cursor-pointer top-0 absolute text-center py-2 rounded-3xl`}>Yearly</div>
                        <div onClick={() => setYearly(false)} className={`min-w-40 ${yearly ? 'bg-[#18181c] text-white z-0 ' : 'bg-white text-black z-10  '} right-0  cursor-pointer top-0 absolute text-center py-2 rounded-3xl`}>Monthly</div>
                    </div>

                </div>
                <div className='mt-2 mb-4 w-10/12 md:w-1/2 lg:w-[95%] mx-auto  rounded-lg'>
                    {/* Grid with columns for pricing to be done  */}
                    <div className='flex flex-col w-full lg:flex-row gap-6 justify-center'>

                        <div className='w-full lg:w-[25%] border-1 border-[#6e6e6e80] border-opacity-10 rounded-3xl  overflow-hidden flex flex-col items-start justify-between '>
                            <div className=' flex flex-col gap-2 w-full'>
                                <div className='price-card-top '>
                                    <div className='price-card-down px-8 pb-2 pt-8'>
                                        <h1 className='text-white text-xl font-semibold font-inter'>Free</h1>
                                        <div className='text-white  font-inter flex'>
                                            <p className='text-4xl font-semibold my-4'>$0/mo</p>
                                        </div>
                                        <p style={{ height: '2cap' }} className='text-sm text-gray-200 '></p>
                                    </div>
                                </div>
                                <div className='pb-8 px-8 mt-3'>
                                    <div className='w-full'>
                                        <Link
                                            href="https://app.unstudio.ai/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button variant='bordered' className='font-inter text-xl font-semibold  text-white  w-full mx-auto px-4 py-5 rounded-lg'>Try it out</Button>
                                        </Link>
                                    </div>
                                    <Divider className='bg-[#6e6e6e80] my-6' orientation='horizontal' />
                                    <h1 className='text-lg mb-4'>Includes:</h1>
                                    <ul className='text-white mb-4 list-disc'>
                                        {basicPlanDetails?.map((db, id) => {
                                            if (db == "Access to 3 Image enhance") {
                                                return (
                                                    <li key={id} className='flex font-inter items-center gap-1 my-1'>
                                                        <GoDotFill size={10} />{db}
                                                        <Tooltip className='bg-main border max-w-52 text-white' showArrow={true} content="Enhance upscales your image to larger size, improves lighting and shadows and adds stunning details to the image">
                                                            <button className='cursor-pointer'>
                                                                <IoInformationCircleOutline className='cursor-pointer' />
                                                            </button>
                                                        </Tooltip>
                                                    </li>

                                                )
                                            }
                                            return (
                                                <li key={id} className='flex font-inter items-center gap-1 my-1'>
                                                    <GoDotFill size={10} /> {db}
                                                </li>
                                            )
                                        })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className='w-full lg:w-[25%] border-1 overflow-hidden border-[#6e6e6e80]  border-opacity-10 rounded-3xl flex flex-col items-start justify-between  border-l'>
                            <div className='flex flex-col gap-2 w-full'>
                                <div className='price-card-top'>
                                    <div className='price-card-down | pt-8 pb-2 px-8'>
                                        <h1 className='text-white text-xl font-semibold font-inter'>Starter</h1>
                                        <div className='text-white font-inter flex'>
                                            <div className='flex'>
                                                {yearly ?
                                                    <div>
                                                        <div className='flex gap-2 text-4xl font-semibold my-4'>
                                                            <span className='line-through'>$15</span>
                                                            <span className='font-bold'>$12<span className='text-xl font-medium'>/mo</span></span>
                                                        </div>
                                                        <p className='text-sm text-gray-200 opacity-80'>$144 will be charged when annual</p>
                                                    </div>
                                                    : <div>
                                                        <p className='text-4xl font-semibold my-4'>$15<span className='text-xl font-medium' >/mo</span></p>
                                                        <p className='text-sm text-gray-200 opacity-80'>when charged monthly</p>
                                                    </div>}
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className='pb-8 px-8 mt-3'>
                                    <div className='w-full'>
                                        <Link
                                            href="https://app.unstudio.ai/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button isLoading={loading} variant='solid' spinner={<Spinner size='sm' />} type='button' className={` bg-[#248eff] font-inter text-xl font-semibold text-white w-full mx-auto px-4 py-5 rounded-lg`}>
                                                Purchase
                                            </Button>
                                        </Link>
                                    </div>
                                    <Divider className='bg-[#6e6e6e80] my-6' orientation='horizontal' />

                                    <h1 className='text-lg mb-4'>Includes:</h1>
                                    <ul className='text-white mb-4 list-disc'>
                                        {starterPlan?.map((db, id) => {
                                            if (db == "Access to 40 Image enhance") {
                                                return (
                                                    <li key={id} className='flex font-inter items-center gap-1 my-1'>
                                                        <GoDotFill size={10} /> {db}<Tooltip className='bg-main border max-w-52 text-white' isOpen={starterTooltip} showArrow={true} content="Enhance upscales your image to larger size, improves lighting and shadows and adds stunning details to the image">
                                                            <button className='cursor-pointer' onMouseEnter={() => setStartertooltip(true)} onMouseLeave={() => setStartertooltip(false)}>
                                                                <IoInformationCircleOutline className='cursor-pointer' />
                                                            </button>
                                                        </Tooltip>
                                                    </li>

                                                )
                                            }
                                            return (
                                                <li key={id} className='flex font-inter items-center gap-1 my-1'>
                                                    <GoDotFill size={10} /> {db}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>



                        <div className='w-full lg:w-[25%] border-1 border-[#6e6e6e80]  border-opacity-10 rounded-3xl overflow-hidden flex flex-col items-start justify-between '>
                            <div className='flex flex-col gap-2 w-full'>
                                <div className='price-card-top'>
                                    <div className='price-card-down | pt-8 pb-2 px-8'>
                                        <h1 className='text-white text-xl font-semibold font-inter'>Pro</h1>
                                        <div className='text-white  font-inter flex'>
                                            <div className='flex'>
                                                {yearly ?
                                                    <div>
                                                        <div className='flex gap-2 text-4xl font-semibold my-4'>
                                                            <span className='line-through'>$40</span>
                                                            <span className='font-bold'>$32<span className='text-xl font-medium'>/mo</span></span>
                                                        </div>
                                                        <p className='text-sm text-gray-200 opacity-80'>$384 will be charged when annual</p>
                                                    </div>
                                                    : <div>
                                                        <p className='text-4xl font-semibold my-4'>$40<span className='text-xl font-medium' >/mo</span></p>
                                                        <p className='text-sm text-gray-200 opacity-80'>when charged monthly</p>
                                                    </div>}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='pb-8 px-8 w-full mt-3'>
                                    <div className='w-full'>
                                        <Link
                                            href="https://app.unstudio.ai/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button isLoading={loading} spinner={<Spinner size='sm' />} type='button'
                                                className='bg-primary-green font-inter text-xl font-semibold text-white w-full mx-auto px-4 py-5 rounded-lg'>
                                                Purchase
                                            </Button>
                                        </Link>
                                    </div>
                                    <Divider className='bg-[#6e6e6e80] my-6' orientation='horizontal' />
                                    <h1 className='text-lg mb-4'>Includes:</h1>
                                    <ul className='text-white mb-4'>
                                        {proPlanDetails?.map((db, id) => {
                                            if (db == "Unlimited Image enhance") {
                                                return (
                                                    <li key={id} className='flex font-inter items-center gap-1 my-1'>
                                                        <GoDotFill size={10} /> {db}
                                                        <Tooltip showArrow={true} isOpen={proTooltip} className=' max-w-52 bg-main border text-white ' content="Enhance upscales your image to larger size, improves lighting and shadows and adds stunning details to the image">
                                                            <button className='cursor-pointer' onMouseEnter={() => setProtooltip(true)} onMouseLeave={() => setProtooltip(false)}>
                                                                <IoInformationCircleOutline className='cursor-pointer' />
                                                            </button>
                                                        </Tooltip>
                                                    </li>

                                                )
                                            }
                                            return (
                                                <li key={id} className='flex font-inter items-center gap-1 my-1'>
                                                    <GoDotFill size={10} /> {db}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </Layout>
    )
}

export default Pricing
