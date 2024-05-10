import React,{useState} from 'react'
import Link from 'next/link';
import { Button } from "@nextui-org/react";

const HeroButton = () => {
    const [ishover, setIsHover] = useState(false);
  return (
      <Link
          href="https://app.unstudio.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer "
      >
          <Button
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              className="px-4 relative min-w-36 mt-2 hover:bg-opacity-30 py-1 lg:py-2 text-black text-base font-medium flex gap-3 items-center bg-primary-green transition duration-100 rounded-md w-fit-content ">
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
  )
}

export default HeroButton