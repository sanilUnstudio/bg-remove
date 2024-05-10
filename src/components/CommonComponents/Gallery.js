import React, { useState, useEffect } from "react";
import Section from "../layout/section";
import Button from "../ui/button";
import GalleryMap from "@/utils/GalleryMap";
import { cn } from "@/utils/helper";
const Gallery = ({ heading1, heading2 }) => {
  const [selectedTab, setSelectedTab] = useState("CPG");

  useEffect(() => {
    const elem = document.getElementById('gallery-heading-2')
    elem.innerHTML = heading2
  }, [])

  return (
    <Section className=" w-full mx-auto">

      <div className=" mx-auto  mb-4 md:mb-8 flex flex-col gap-2 md:gap-5 ">
        <h2 className="font-poppin leading-8 lg:leading-[50px] text-2xl md:text-4xl lg:text-5xl tracking-wide text-white text-center">
          {heading1}
        </h2>
        <div id='gallery-heading-2' className="text-base md:text-xl lg:text-2xl tracking-wide font-poppin leading-snug text-center  w-full">
        </div>
      </div>

      <div className=" w-full  justify-center flex-wrap md:flex gap-4">

        <div className="grid grid-cols-3 md:flex justify-between gap-4 px-2">
          {Object.keys(GalleryMap()).map((tab, idx) => (
            <Button
              hover={selectedTab == tab}
              onClick={() => setSelectedTab(tab)}
            >
              <h2 className="text-center w-full text-sm py-[5px] md:py-2 px-4 md:px-6">{tab}</h2>

            </Button>
          ))}
        </div>

        <div className="w-full overflow-hidden mt-8">

          <div className="flex w-full justify-center relative">
            <div style={{ boxShadow: "0px 0px 60px 60px #000000" }} className="h-full hidden sm:block  top-0 left-0 absolute z-10" />
            <div className="flex  gap-5">
              <div className="grid mx-3 sm:mx-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {GalleryMap()[selectedTab]?.map((item,idx) => {
                  return (
                    <div
                      key={item.id}
                      className={cn('max-w-80  max-h-96 w-full relative h-full  overflow-hidden rounded-3xl bg-black cursor-pointer',idx == 4 && "hidden sm:block")}
                    >
                      <img
                        src={item.url}
                        width={320}
                        height={320}
                        layout="responsive"
                        alt="Picture of the author"
                        className={` object-cover rounded-3xl hover:scale-105 transition duration-200 hover:opacity-40 bg-black`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div style={{ boxShadow: "0px 0px 60px 60px #000000" }} className="h-full hidden sm:block  top-0 right-0 absolute z-10" />
          </div>

        </div>

      </div>
    </Section>
  );
};

export default Gallery;
