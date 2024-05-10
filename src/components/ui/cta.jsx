import React,{useState} from 'react'
import Section from '../layout/section'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const CTA = () => {
    const [ishover, setIsHover] = useState(false);
    const router = useRouter();

    return (
        <Section>
            <div className='w-11/12 md:w-11/12 lg:w-8/12 xl:w-6/12 bg-black my-8 md:my-16 flex flex-col md:flex-row items-center justify-center gap-2 py-2 overflow-hidden md:gap-8 relative rounded-3xl border-r  border-l border-primary-green  border-opacity-55 px-4 min-h-24 md:min-h-28 mx-auto'>
                <h1 className='text-center text-white font-poppin leading-7 md:leading-10 tracking-wide text-xl md:text-3xl lg:text-3xl'>Want to see it for yourself?</h1>
                <Button
                    onClick={() => router.push('https://app.unstudio.ai/')}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className="px-4 relative min-w-36  hover:bg-opacity-30  py-1 lg:py-2 text-black text-base sm:text-lg font-medium flex gap-3 items-center bg-primary-green transition duration-100 rounded-md w-fit-content ">
                    <div className="hover:bg-black font-poppin flex items-center justify-center  hover:text-white rounded-lg h-[calc(100%-2px)] w-[calc(100%-2px)]  absolute top-px z-30 left-px">
                        Try It for free!
                    </div>

                    {ishover &&
                        <>
                            <span className="absolute -top-0 left-[1.125rem] h-px w-[calc(100%-1.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            <span className="absolute -top-0 left-0 h-px w-[calc(100%-1rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            <span className="absolute -top-0 right-0 h-px w-[calc(100%-6.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            <span className="absolute -bottom-0 left-0 h-[80%] opacity-60 w-px bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            <span className="absolute -bottom-0 right-0 h-[80%] opacity-60 w-px bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />

                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-1.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            <span className="absolute -bottom-0 left-0 h-px w-[calc(100%-1rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            <span className="absolute -bottom-0 right-0 h-px w-[calc(100%-6.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                        </>
                    }
                </Button>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-1.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                <span className="absolute -bottom-0 left-0 h-px w-[calc(100%-1rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                <span className="absolute -bottom-0 right-0 h-px w-[calc(100%-6.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                <span className="absolute -top-0 left-[1.125rem] h-px w-[calc(100%-1.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                <span className="absolute -top-0 left-0 h-px w-[calc(100%-1rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                <span className="absolute -top-0 right-0 h-px w-[calc(100%-6.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </div>
        </Section>
    )
}

export default CTA