import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../assets/image/Sign_Mockup01_MicroVolume.jpg";
import img2 from "../assets/image/Coffee Cup PSD Mockup.jpg";
import img3 from "../assets/image/Paper Shopping -Æag Beautiful Mockup.jpg";

import '../assets/css/case.css'

import { Pagination, Navigation } from "swiper";


// Case1 page

export default function Case3() {
    return (
      <main id="case1">
        <h1>Cody. Branding Merch</h1>
        <Swiper
         // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className= "container-case">
          <SwiperSlide className="caseItem">
            <span>
            <h1></h1>
            </span>
            <img src={img1} alt="magazine design pg 1" />
          </SwiperSlide>
          <SwiperSlide className="caseItem">
          <span>
            {/* <h1>Title</h1> */}
          </span>
            <img src={img2} alt="magazine design pg2" />
          </SwiperSlide>
          <SwiperSlide className="caseItem">
          <span>
            {/* <h1>Title</h1> */}
          </span>
            <img src={img3} alt="magazine design pg2" />
          </SwiperSlide>
      </Swiper>
      <article>
        <h1>Product mock ups for Cofy. brand</h1>
        <p> 
          Photoshop, Adobe XD, Illustration
        </p>
      </article>
     </main> 
    );
  }