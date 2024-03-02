import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import sliderImg from '../img/sliderImg.png'
import sliderImg2 from '../img/sliderImg2.png'
import sliderImg3 from '../img/sliderImg3.png'
import { Link } from "react-router-dom";

export default function SwiperAutoplay() {
  return (
    <>
      <Link to={"/Stock"}> <div className="cursor-pointer">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}

          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img className="xl:rounded-[30px] w:rounded-[10px]" src={sliderImg3} alt="" /></SwiperSlide>
          <SwiperSlide><img className="xl:rounded-[30px] w:rounded-[10px]" src={sliderImg} alt="" /></SwiperSlide>
          <SwiperSlide><img className="xl:rounded-[30px] w:rounded-[10px]" src={sliderImg2} alt="" /></SwiperSlide>
          <SwiperSlide><img className="xl:rounded-[30px] w:rounded-[10px]" src={sliderImg3} alt="" /></SwiperSlide>
          <SwiperSlide><img className="xl:rounded-[30px] w:rounded-[10px]" src={sliderImg3} alt="" /></SwiperSlide>
          <SwiperSlide><img className="xl:rounded-[30px] w:rounded-[10px]" src={sliderImg} alt="" /></SwiperSlide>
          <SwiperSlide><img className="xl:rounded-[30px] w:rounded-[10px]" src={sliderImg2} alt="" /></SwiperSlide>
          <SwiperSlide><img className="xl:rounded-[30px] w:rounded-[10px]" src={sliderImg3} alt="" /></SwiperSlide>
        </Swiper>
      </div> </Link>
    </>
  );
}
