import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Section from "../layout/section";


const EnhancedPreview = () => {
  return (
    <Section>
      <div
        className="pb-20 grid place-items-center px-1">
        
        <div className="mx-auto  my-4 md:my-8 flex flex-col gap-2 lg:gap-4  justify-center items-center ">
          <h1 className="font-poppin tracking-wide leading-8 lg:leading-[50px] text-2xl md:text-4xl lg:text-5xl text-white text-center">
            Insanely Detailed
          </h1>
          <h2 className="text-center font-poppin md:leading-8 tracking-wide text-base md:text-xl lg:text-2xl">
            Every detail matters...<br className="hidden md:block"/>
            which is why we offer images with up to 4K resolution.
          </h2>
        </div>

        <div className=" w-full  mx-auto relative  mt-4">
          <div style={{ boxShadow: "0px 0px 30px 30px #000000" }} className="h-full top-0 left-0 hidden sm:block  absolute z-10" />
          {/* Show in tab and laptop */}
          <div className=" w-full sm:block hidden my-4 ">
            <ReactCompareSlider
              changePositionOnHover={true}
              itemOne={
                <ReactCompareSliderImage
                  src="https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Insane%20details/low.jpeg?updatedAt=1711181533651"
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Insane%20details/high.png?updatedAt=1711181535597"
                  alt="Image two"
                />
              }
            />
          </div>

          {/* show i mobile view */}
          <div className=" w-full block h-[400px]  px-1 sm:hidden my-4 ">
            <ReactCompareSlider
              className="h-full"
              portrait={true}
              itemOne={
                <ReactCompareSliderImage
                  src="https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Insane%20details/low.jpeg?updatedAt=1711181533651"
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Insane%20details/high.png?updatedAt=1711181535597"
                  alt="Image two"
                />
              }
            />
          </div>

          <div style={{ boxShadow: "0px 0px 30px 30px #000000" }} className="h-full top-0 right-0 hidden sm:block absolute z-10" />
        </div>
      </div>
    </Section>
  );
};

export default EnhancedPreview;
