import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Qkart from "../Assests/qkart.png";
import Game from "../Assests/game.png";
import Qtify from '../Assests/qtify.png';
import Xboard from "../Assests/xboard.png";
import LawFirm from "../Assests/lawFirm.png";
import Qtrip from "../Assests/qtrip.png";
import QtripS from "../Assests/qtripS.png";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import './Swiper.css';
import Data from "../Data/data.json";


export default function SwiperGrid() {
  const [demo, setDemo] = useState("");
  const [filData, setFilData] = useState([]);

  const handleSlideChange = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const activeId = activeSlide.querySelector('img').id;
    setDemo(activeId);
  };

  useEffect(() => {
    const filterData = Data.projects.filter((project) => project.id.toString() === demo);
    setFilData(filterData);
  }, [demo]);

  useEffect(() => {
    console.log('Current Demo ID:', demo);
    console.log('Filtered Data:', filData);
  }, [filData]);

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        pagination={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,

        }}
        onSlideChange={handleSlideChange}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        
      >
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
          <a href="https://qkart-frontend-9l0j8a0z8-shivam-sharmas-projects-1836c282.vercel.app/" target='blank'>
            <img src={Qkart} id='2' style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} alt="Qkart" />
          </a>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
          <a href="https://matching-game-project-delta.vercel.app/" target='blank'>
            <img src={Game} id='7' style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} alt="Game" />
          </a>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
          <a href="https://qtify-nine-zeta.vercel.app/" target='blank'>
            <img src={Qtify} id='1' style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} alt="Qtify" />
          </a>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
          <a href="https://law-firm-coral.vercel.app/" target='blank'>
            <img src={LawFirm} id='5' style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} alt="Law Firm" />
          </a>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
          <a href="https://shivamsharma-crionewsfeed.netlify.app/" target='blank'>
            <img src={Xboard} id='6' style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} alt="Xboard" />
          </a>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
          <a href="https://qtrip-dynamic-an92cmvb2-shivam-sharmas-projects-1836c282.vercel.app/" target='blank'>
            <img src={Qtrip} id="3" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} alt="Qtrip" />
          </a>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
          <a href="https://shivamsharma-qtri.netlify.app/" target='blank'>
            <img src={QtripS} id='4' style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} alt="QtripS" />
          </a>
        </SwiperSlide>
      </Swiper>

      <div>
        {filData.map((item, index) => (
          <div key={index} className='dataWrapper'>
            <h1>{item.name}</h1>
            <h3>{item.date}</h3>
            <div className='wrapper'><p>{item.description}</p>
            <ul>
             {item.details.map((detail, index) => (
              <li key={index}>{detail}</li>
             ))}

          </ul>
          </div>
          <div className='pillWrapper'>{item.technologies.map((tech, index) => (
              <div className='pill' key={index}>{tech}</div>
             ))}</div>
          </div>
          
        ))}
       
      </div>
    
    </>
  );
}
