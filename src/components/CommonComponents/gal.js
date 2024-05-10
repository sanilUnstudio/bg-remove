import Section from "../layout/section";

import Hero from "./Hero";
const Gallery2 = () => {
  const tabs = [
    "All",
    "Sports",
    "Architecture",
    "Fashion",
    "Interior",
    "Animals",
  ];

  const dataObject = {
    Surreal: [
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Surreal/tr:h-512/surrea_1.png?updatedAt=1711181535020",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Surreal/tr:h-512/surrea_2.jpg?updatedAt=1711181533937",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Surreal/tr:h-512/surrea_3.jpg?updatedAt=1711181533653",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Surreal/tr:h-512/surrea_4.jpg?updatedAt=1711181533648",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Surreal/tr:h-512/surrea_6.png?updatedAt=1711181538687",
    ],
    CPG: [
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/CPG/tr:h-512/enhanced-image%20(36).png",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Surreal/tr:h-512/surrea_1.png",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/CPG/tr:h-512/enhanced-image%20(26).png",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/CPG/tr:h-512/enhanced-image%20(51).png",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Food/tr:h-512/burger.png",

    ],
    Furniture: [
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Furniture/tr:h-512/furniture_2.png",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Furniture/tr:h-512/furniture_3.png",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Furniture/tr:h-512/enhanced-image%20(48).png",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Furniture/tr:h-512/furniture_1.png",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Furniture/tr:h-512/enhanced-image%20(47).png",
    ],
    Jewellery: [
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Surreal/tr:h-512/surrea_4.jpg",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Jewellery/tr:h-512/gold-ring.jpeg",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Jewellery/tr:h-512/unstudio-image%20(52).png",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Surreal/tr:h-512/surrea_6.png",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Jewellery/tr:h-512/ring-sand.jpg",
    ],
    Scapes: [
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Scapes/tr:h-512/environ_1.jpeg",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Scapes/tr:h-512/environ_2.jpeg",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Surreal/tr:h-512/surrea_2.jpg",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Scapes/tr:h-512/environs_4.png",
      "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Generations/Surreal/tr:h-512/surrea_3.jpg",
    ],
  };


  return (
    <Section className="sm:w-[calc(100%-10px)] relative overflow-hidden  mx-auto my-6 md:my-14 lg:my-0">
      <div className="absolute w-full left-0 top-0 z-30" >
        <Hero />
      </div>
      <div className="w-full !shadow-landing overflow-hidden  relative">
        {/* <div className="flex w-full  justify-between relative   h-[1400px] min-w-[740px]  "> */}

        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-2 sm:px-0 relative max-h-[1400px] justify-center sm:justify-between ">
          {/* Box shadow left */}
          <div className="h-full md:block absolute hidden z-20" style={{ boxShadow: "0px 0px 35px 35px #000000" }} />

          <div className="mt-[19em] sm:mt-[26em] h-full relative overflow-hidden">
            <div style={{ boxShadow: "0px 0px 35px 35px #000" }} className="w-full absolute top-0 z-10" />
            <div className="flex flex-col w-full gap-5 h-full overflow-hidden row0 ">
              {dataObject.Surreal.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${index % 2 == 0 ? "basis-96" : "basis-80"
                      }  w-full h-full overflow-hidden  rounded-3xl bg-black cursor-pointer`}
                  >
                    <img
                      src={item}
                      alt="Picture of the author"
                      className={` object-cover rounded-3xl hover:scale-105 transition duration-200 ${index % 2 !== 0 ? "basis-96" : "basis-80"
                        }  w-full h-full hover:opacity-40 bg-black`}
                    />
                  </div>
                );
              })}
              {dataObject.Surreal.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${index % 2 == 0 ? "basis-96" : "basis-80"
                      }  w-full h-full overflow-hidden  rounded-3xl bg-black cursor-pointer`}
                  >
                    <img
                      src={item}
                      alt="Picture of the author"
                      className={` object-cover rounded-3xl hover:scale-105 transition duration-200 ${index % 2 !== 0 ? "basis-96" : "basis-80"
                        }  w-full h-full hover:opacity-40 bg-black`}
                    />
                  </div>
                );
              })}
            </div>
          </div>


          <div className="sm:mt-[20em] md:mt-[30em]  h-full relative overflow-hidden">
            <div style={{ boxShadow: "0px 0px 35px 35px #000" }} className="w-full absolute z-10" />

            <div className="flex flex-col w-full gap-5 h-[100%] row1 ">
              {dataObject.Furniture.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${index % 2 !== 0 ? "basis-96" : "basis-80"
                      } w-full h-full overflow-hidden  rounded-3xl bg-black cursor-pointer`}

                  >
                    <img
                      src={item}
                      alt="Picture of the author"
                      className={` object-cover rounded-3xl hover:scale-105 transition duration-200 ${index % 2 !== 0 ? "basis-96" : "basis-80"
                        }   w-full h-full hover:opacity-40 bg-black`}
                    />
                  </div>
                );
              })}
              {dataObject.Furniture.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${index % 2 !== 0 ? "basis-96" : "basis-80"
                      }  w-full h-full overflow-hidden  rounded-3xl bg-black cursor-pointer`}

                  >
                    <img
                      src={item}
                      alt="Picture of the author"
                      className={` object-cover rounded-3xl hover:scale-105 transition duration-200 ${index % 2 !== 0 ? "basis-96" : "basis-80"
                        }  w-full h-full hover:opacity-40 bg-black`}
                    />
                  </div>
                );
              })}

            </div>
          </div>

          <div className=" md:mt-[0em] lg:mt-[24em] h-full relative overflow-hidden">
            <div style={{ boxShadow: "0px 0px 35px 35px #000" }} className="w-full absolute z-10" />

            <div className="flex  flex-col w-full gap-5 h-[100%] row2 ">
              {dataObject.CPG.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${index % 2 === 0 ? "basis-96" : "basis-80"
                      }  w-full h-full overflow-hidden  rounded-3xl cursor-pointer bg-black`}
                  >
                    <img
                      src={item}
                      alt="Picture of the author"
                      className={` object-cover rounded-3xl hover:scale-105 transition duration-200 ${index % 2 === 0 ? "basis-96" : "basis-80"
                        }  w-full h-full hover:opacity-40 bg-black `}
                    />
                  </div>
                );
              })}
              {dataObject.CPG.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${index % 2 === 0 ? "basis-96" : "basis-80"
                      }  w-full h-full overflow-hidden  rounded-3xl cursor-pointer bg-black`}
                  >
                    <img
                      src={item}
                      alt="Picture of the author"
                      className={` object-cover rounded-3xl hover:scale-105 transition duration-200 ${index % 2 === 0 ? "basis-96" : "basis-80"
                        }  w-full h-full hover:opacity-40 bg-black `}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="  xl:mt-[15em] h-full relative overflow-hidden">
            <div style={{ boxShadow: "0px 0px 35px 35px #000" }} className="w-full absolute z-10" />

            <div className="flex flex-col w-full gap-5 h-[100%] row3 ">
              {dataObject.Jewellery.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${index % 2 !== 0 ? "basis-96" : "basis-64"
                      } w-full h-full overflow-hidden  rounded-3xl cursor-pointer bg-black`}
                  >
                    <img
                      src={item}
                      alt="Picture of the author"
                      className={` object-cover rounded-3xl hover:scale-105 transition duration-200 ${index % 2 !== 0 ? "basis-96" : "basis-64"
                        }  w-full h-full  hover:opacity-40 bg-black`}
                    />
                  </div>
                );
              })}
              {dataObject.Jewellery.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${index % 2 !== 0 ? "basis-96" : "basis-64"
                      } w-full h-full overflow-hidden  rounded-3xl cursor-pointer bg-black`}
                  >
                    <img
                      src={item}
                      alt="Picture of the author"
                      className={` object-cover rounded-3xl hover:scale-105 transition duration-200 ${index % 2 !== 0 ? "basis-96" : "basis-64"
                        } w-full h-full  hover:opacity-40 bg-black`}
                    />
                  </div>
                );
              })}
            </div>
          </div>


          <div className="relative h-full overflow-hidden">
            <div style={{ boxShadow: "0px 0px 35px 35px #000" }} className="w-full absolute z-10" />

            <div className="flex  flex-col gap-5 h-[100%]  row5 ">
              {dataObject.Scapes.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${index % 2 !== 0 ? "basis-[400px]" : "basis-96"
                      } w-full h-full overflow-hidden  rounded-3xl cursor-pointer bg-black`}
                  >
                    <img
                      src={item}
                      alt="Picture of the author"
                      className={` object-cover rounded-3xl hover:scale-105 transition duration-200 ${index % 2 !== 0 ? "basis-[400px]" : "basis-96"
                        }  w-full h-full hover:opacity-40 bg-black`}
                    />
                  </div>
                );
              })}
              {dataObject.Scapes.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${index % 2 !== 0 ? "basis-[400px]" : "basis-96"
                      } w-full h-full overflow-hidden  rounded-3xl cursor-pointer bg-black`}
                  >
                    <img
                      src={item}
                      alt="Picture of the author"
                      className={` object-cover rounded-3xl hover:scale-105 transition duration-200 ${index % 2 !== 0 ? "basis-[400px]" : "basis-96"
                        } w-full h-full hover:opacity-40 bg-black`}
                    />
                  </div>
                );
              })}

            </div>
          </div>
          <div
            className="h-full hidden absolute right-0 top-0 md:block z-10"
            style={{ boxShadow: "0px 0px 35px 35px #000000" }}
          />
        </div>
        {/* </div> */}
        <div
          className="w-full absolute -bottom-px  z-10"
          style={{ boxShadow: "0px 0px 35px 35px #000000" }}
        />
      </div>
    </Section>
  );
};

export default Gallery2;
