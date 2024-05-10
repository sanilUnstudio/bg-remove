import React from 'react'
import Section from '../layout/section'
import { propsMap, propsResultMap } from '@/utils/propsMap'
import { cn } from '@/utils/helper'


const Props = () => {
    return (
        <Section className="relative">
            <div style={{ boxShadow: "0px 0px 30px 30px #000000" }} className="h-full top-0 left-0 hidden sm:block absolute z-10" />

            <div className="mx-auto  my-4 md:my-8 flex flex-col gap-2 lg:gap-4  justify-center items-center ">
                <h1 className="font-poppin tracking-wide leading-8 lg:leading-[50px] text-2xl md:text-4xl lg:text-5xl text-white text-center">
                    Fill It In With Props.
                </h1>
                <h2 className="text-center font-poppin md:leading-8 tracking-wide text-base md:text-xl lg:text-2xl">
                    Our assortment of props is a great way to <br className="hidden md:block" /> get the exact layout you want.
                </h2>
            </div>

            <div>
                {/* Props */}
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 relative'>
                    {propsMap().map((item,idx) => (
                        <img className={cn(idx > 2 && "hidden lg:block", idx == 2 && "hidden sm:block")} src={item.url} />
                    ))}
                    <div className='absolute top-0 bg-black py-1.5 sm:py-3 px-4 sm:px-6 rounded-br-3xl left-0'>
                        <h1 className='font-poppin sm:ml-8'>The Props:</h1>
                    </div>
                </div>

                {/* Result */}
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 relative'>
                    {propsResultMap().map((item,idx) => (
                        <img className={cn(idx > 2 && "hidden lg:block", idx == 2 && "hidden sm:block")} src={item.url} />
                    ))}
                    <div className='absolute top-0 bg-black py-1.5 sm:py-3 px-4 sm:px-6 rounded-br-3xl left-0'>
                        <h1 className='font-poppin sm:ml-8'>The Final Result:</h1>
                    </div>
                </div>
            </div>

            <div style={{ boxShadow: "0px 0px 30px 30px #000000" }} className="h-full top-0 right-0 hidden sm:block absolute z-10" />

        </Section>
    )
}

export default Props