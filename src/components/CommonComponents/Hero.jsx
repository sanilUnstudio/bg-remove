import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/router'

const Hero = () => {
  const [ishover, setIsHover] = useState(false);
  const router = useRouter()

  return (
    <div
      className="bg-black pt-8 pb-6 md:pt-16 sm:pt-12 lg:pt-20 grid place-items-left   w-full md:w-[40%]  z-40">
      <div className="flex flex-col gap-4 lg:gap-8 items-start relative  h-full w-full">
        <h1 className="pl-6 md:pl-14 lg:pl-20 font-poppin text-4xl md:text-6xl lg:text-7xl max-w-4xl tracking-wide text-white ">
          Photoshoots<br />
          Made <span className="main-text font-semibold font-poppin">Simple.</span>
        </h1>
        <h1 className="text-xl lg:text-2xl leading-7 font-poppin tracking-wide pl-6  md:pl-14 lg:pl-20 text-white">
          Create studio-quality pictures <br className="block" />
          with artificial intelligence.
        </h1>
        <Link
          href="https://app.unstudio.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer "
        >
          <Button
            onClick={() => router.push('https://app.unstudio.ai/')}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="px-4 ml-6 relative min-w-36  hover:bg-opacity-30 md:ml-14 lg:ml-20 py-1 lg:py-2 text-black text-base font-medium flex gap-3 items-center bg-primary-green transition duration-100 rounded-md w-fit-content ">
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
        </Link>
      </div>
    </div>
  );
};

export default Hero;
