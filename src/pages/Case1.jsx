import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../assets/image/img1.jpg";
import img2 from "../assets/image/img2.jpg";
import '../assets/css/case.css'

import { Pagination, Navigation } from "swiper";


// Case1 page

export default function Case1() {
    return (
      <main id="case1">
        <h1>Magazine</h1>
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

      </Swiper>
      <article>
        <h1 className="headertext">Magazine featuring artist Illenium</h1>
        <p>Bring highlight to an artist who has gone through struggles of overdoes and drug addiction in his past. This magazine showcases the journey of Nicholas D. Miller use of music and community to help in his recovery. From this foundation led him to become a superstar in the EDM industry and creating top record albums listened by millions of fans worldwide. 
        </p>
        Tools: Adobe InDesign, Photoshop
      </article>
     </main> 
    );
  }