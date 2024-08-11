import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Img from "../Assests/image.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Swiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function SwiperGrid() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        style={{ width: '100%', height: '500px' }} // Adjust this value according to your image height
      >
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,height :"180px" }}>
          <img src={Img} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height :"180px" }}>
          <img src={Img} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height :"180px" }}>
          <img src={Img} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height :"180px" }}>
          <img src={Img} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height :"180px" }}>
          <img src={Img} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height :"180px" }}>
          <img src={Img} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
