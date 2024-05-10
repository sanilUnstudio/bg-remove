// import React, { useEffect, useState } from "react";
// import FeatureImageOption from "./FeatureImageOption";

// const Feature = () => {
//   const imageArray = [
//     { id: 1, imageURL: "https://res.cloudinary.com/dyj34z2ri/image/upload/v1674377698/A_perfume_bottle_near_a_dry_glowing_wood_branch_on_a_black_background._Advertising_photo._Mockup-PhotoRoom.png-PhotoRoom_mhcmxg.webp", selected: true },
//     { id: 2, imageURL: "https://res.cloudinary.com/dyj34z2ri/image/upload/v1670057266/furniture_profile_h8qrnv.webp", selected: false },
//     { id: 3, imageURL: "https://res.cloudinary.com/dyj34z2ri/image/upload/v1670057265/fashion_profile_dzzpps.webp", selected: false },
//     { id: 4, imageURL: "https://res.cloudinary.com/dyj34z2ri/image/upload/v1670082697/food_profile1_arni5e.webp", selected: false },
//     { id: 5, imageURL: "https://res.cloudinary.com/dyj34z2ri/image/upload/v1670080775/accessory_profile1_skbupk.webp", selected: false },
//   ];
//   const [options, setoptions] = useState(imageArray);
//   const [selectedOption, setselectedOption] = useState(1);
//   // useEffect(() => {
//   //   if (selectedOption) console.log("Selected option : ", selectedOption);
//   // }, [selectedOption]);

//   const handleSelection = (id) => {
//     const index = options.findIndex((item) => item.id === id);
//     if (index != -1) {
//       if (options[index].selected) {
//         console.log("Already selected!");
//       } else {
//         let newOptions = options;
//         newOptions.map((item) => (item.selected = false));
//         newOptions[index].selected = true;
//         setoptions(newOptions);
//         setselectedOption(newOptions[index].id);
//       }
//     }

//   };
//   return (
//     <div className=" ">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-[#fae27a]  font-inter text-xl font-semibold  text-center my-4">
//           Click on an image to try
//         </h2>
//         <div className="p-4 flex md:flex-row flex-row items-center gap-6 ">
//           {options.map((item) => (
//             <div key={item.id}>
//               <FeatureImageOption

//                 item={item}
//                 onClick={() => handleSelection(item.id)}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="my-8 w-full mx-auto ">
//         {/*Use selected option to conditionally render */}
//         {selectedOption === 1 && (
//         <img loading="lazy" src="https://res.cloudinary.com/dyj34z2ri/image/upload/v1674377547/Fashion-_4__crdtpo.webp" className="cover transition duration-100 ease-in rounded-md w-full h-full" alt="feature-1" />
//         )}
//         {selectedOption === 2 && (
//           <img loading="lazy" src="https://res.cloudinary.com/dyj34z2ri/image/upload/v1670057266/furniture_collage_m6laxz.webp" className="cover transition duration-100 ease-in rounded-md w-full h-full"  alt="feature-2" />
//           )}
//           {selectedOption === 3 && (
//           <img loading="lazy" src="https://res.cloudinary.com/dyj34z2ri/image/upload/v1670057266/fashion_collage_zpw9md.webp" className="cover transition duration-100 ease-in rounded-md w-full h-full"  alt="feature-3" />
//           )}
//             {selectedOption === 4 && (
//           <img loading="lazy" src="https://res.cloudinary.com/dyj34z2ri/image/upload/v1670080776/food_collagemain_1_uvllkp.webp" className="cover transition duration-100 ease-in rounded-md w-full h-full"  alt="feature-4" />
//           )}
//             {selectedOption === 5 && (
//           <img loading="lazy" src="https://res.cloudinary.com/dyj34z2ri/image/upload/v1670080774/accessory_collage2_isnchb.webp" className="cover transition duration-100 ease-in rounded-md w-full h-full"  alt="feature-5" />
//           )}
//       </div>
//     </div>
//   );
// };

// export default Feature;
