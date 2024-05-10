import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import './styles.css';
// import required modules
import { EffectCards, Autoplay } from 'swiper/modules';

const HeroGallery = ({data}) => {
  return (
      <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          autoplay={{
              delay: 2400,
              disableOnInteraction: false,
          }}
          className="mySwiper"
      >
          {data().map((dt) => (
              <SwiperSlide key={dt.id}> <img src={dt.url} className='w-full h-full object-cover rounded-lg md:rounded-2xl' /></SwiperSlide>
          ))}
      </Swiper>
  )
}

export default HeroGallery