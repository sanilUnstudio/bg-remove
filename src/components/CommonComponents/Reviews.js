import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import Reviewmap from "@/utils/Reviewmap";
import Section from "../layout/section";

const Reviews = () => {
  return (
    <Section className="">
      <div className="w-full md:max-w-4xl mx-auto flex flex-col gap-2 lg:gap-4  mb-4 md:mb-8 ">
        <h1 className="font-poppin tracking-wide px-1 leading-8 lg:leading-[50px] text-2xl md:text-4xl lg:text-5xl text-white text-center">
          Our customers like our product.
        </h1>
        <h2 className="text-center font-poppin md:leading-8 tracking-wide text-base md:text-xl lg:text-2xl">
          Entrepreneurs, Marketers, and  Creatives <br />
          all rave about Unstudio's quality.
        </h2>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-11/12 lg:w-10/12  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-20 sm:gap-8 mt-10 mb-4" >
          {Reviewmap().map((review) => (
            <div key={review.id} style={{ background: "linear-gradient(180deg, rgba(5,246,174,0.3) 0%, rgba(5,246,174,0.7) 100%)"}} className="relative  rounded-lg  w-full  max-w-[350px] h-[300px] lg:h-[350px] xl:h-72">
              <div className="flex h-[calc(100%-2px)] w-[calc(100%-2px)] text-white absolute top-px z-30 left-px flex-col p-5  bg-black rounded-lg justify-between">
                <h4 className="font-poppin">{review.text}</h4>
                <div className="flex flex-col items-end justify-end">
                  <h1 className="font-poppin">{review.reviewer} {review.designation && `, ${review.designation}`}</h1>
                  <h1 className="font-poppin">{review.company}</h1>
                </div>
              </div>
              <div style={{ boxShadow: 'rgba(5,246,174,0.9) 0px 0px 30px 25px' }} className="w-1/5 absolute bottom-5 h-px z-20 left-1/2 -translate-x-1/2" ></div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Reviews;
