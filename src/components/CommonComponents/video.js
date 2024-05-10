import { useState } from "react";
import Container from "./container";
import { MixpanelTracking } from "../../utils/mixpanel";

export default function Video(props) {
  const [playVideo, setPlayVideo] = useState(true);
  const toggleVideo = () =>{
    setPlayVideo(!playVideo)
    MixpanelTracking.getInstance().track("Video played", { description: "User played loom video" })
  }
  return (
    <Container>
      <div className="w-full max-w-7xl mt-8 mx-auto overflow-hidden  items-center  rounded-2xl ">
      {/* <div className="my-10 ">
        <h2 className="max-w-3xl text-center mx-auto  mt-3 text-lg font-inter font-black leading-snug tracking-tight lg:leading-normal lg:text-3xl text-white">
          {props.title}
        </h2>
        </div> */}
              {props.pretitle && (
        <div className="text-sm p-2 w-fit mx-auto rounded-lg bg-black font-bold tracking-wider text-[#fae27a] uppercase">
          {props.pretitle}
        </div>
      )}

      {props.mainTitle && (
        <>
        <h2 className={ props.alt ? `max-w-5xl mt-8 text-4xl font-be-vietnam font-bold  tracking-tight text-center mx-auto   lg:text-8xl text-black`
      :`max-w-5xl mt-8 text-4xl font-be-vietnam font-bold  tracking-tight   lg:text-8xl text-white text-center mx-auto`  
      
      }>
          {props.mainTitle}
         </h2>
      {/* <div className="md:h-20 h-12 flex text-4xl font-be-vietnam font-bold  tracking-tight   lg:text-7xl text-white ">
        <p>every</p>
<div className="words ">
          <span className="word">brand</span>
          <span className="word">agency</span>
          <span className="word">designer</span>
          <span className="word">creator</span>
          <span className="word">brand</span>

         </div>
        </div> */}
        </>
      )}

      {props.title && (
        <h2 className={props.alt ? "max-w-5xl mt-3 text-3xl font-be-vietnam font-bold  tracking-tight mx-auto text-center  lg:text-5xl text-black"
      :"max-w-5xl mt-3 text-3xl font-be-vietnam font-bold  tracking-tight   lg:text-5xl text-white mx-auto text-center"
      }>
          {props.title}
        </h2>
      )}

      {props.children && (
        <p
          className={
            props.topsub
              ? `max-w-4xl md:max-w-4xl font-inter py-4 text-base leading-normal my-2 mb-16 text-center  lg:text-2xl xl:text-2xl text-gray-200 mx-auto`
              : `max-w-4xl md:max-w-3xl font-inter py-4 text-base leading-normal my-2 mb-16 text-center  lg:text-2xl xl:text-2xl mx-auto ${props.alt ? `text-black` : `text-gray-200`} `
          }
        >
          {props.children}
        </p>
      )}


        <div
          onClick={toggleVideo}
          className="relative bg-transparent  cursor-pointer aspect-video bg-gradient-to-tr ">
          {!playVideo && (
            <button className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16  lg:w-28 lg:h-28"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Play Video</span>
            </button>
          )}
          {/* "position: relative; padding-bottom: 56.25%; height: 0;" */}
          {/* "position: absolute; top: 0; left: 0; width: 100%; height: 100%;" */}
          {/* https://www.loom.com/embed/e5b8c04bca094dd8a5507925ab887002?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true */}
          {playVideo && (
            <div>
            <div 
            style={{position:'relative', paddingBottom:'56.25%', height:0}}>
              <iframe  src="https://www.loom.com/embed/a40a52f0d1c544bab04a44e8fa689e80?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true" frameBorder="0" webkitallowfullscreen={"true"} mozallowfullscreen={"true"} allowFullScreen 
              style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}>
              </iframe>
            </div>
            
            
            {/* // <img src="https://res.cloudinary.com/dyj34z2ri/image/upload/v1670163477/website_videogif_obu8zi.gif" alt="video" className="w-full h-full md:object-contain " /> */}
          </div>
          )}
        </div>
      </div>
    </Container>
  );
}
