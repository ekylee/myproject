// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../assets/image/Horizontal_Book_Cover & back_7.jpg";
import img2 from "../assets/image/Horizontal_Book_P,2-3.jpg";
import img3 from "../assets/image/Horizontal_Book_3-4.jpg";
import img4 from "../assets//image/Horizontal_Book_P,6-7.jpg";
import img5 from "../assets/image/Horizontal_Book_Mockup_8-9.jpg";
import img6 from "../assets/image/Horizontal_Book_Mockup_10-14.jpg";


import '../assets/css/case.css'

import { Pagination, Navigation } from "swiper";


// Case1 page

export default function Case2() {
    return (
      <main id="case1">
        <h1>Coffee shop branding- cofy.</h1>
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
            {/* <h1>Title</h1> */}
            </span>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="caseItem">
          <span>
            {/* <h1>Title</h1> */}
          </span>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="caseItem">
          <span>
            {/* <h1>Title</h1> */}
          </span>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="caseItem">
          <span>
            {/* <h1>Title</h1> */}
          </span>
            <img src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide className="caseItem">
          <span>
            {/* <h1>Title</h1> */}
          </span>
            <img src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide className="caseItem">
          <span>
            {/* <h1>Title</h1> */}
          </span>
            <img src={img6} alt="" />
          </SwiperSlide>
      </Swiper>
      <article>
        <h1 className="headertext">Brand Guide</h1>
        <p>I tried to focus on improving the overall experience of the consumers with how they enjoy their coffee and café environment. An issue that has bothered a lot of people is lack of feminine spotlight within the coffee industry. Creating a cat symbol resembles the mood of elegance, warm. cozy feeling to the brand to bring out more of a feminine aesthetic route. 
        </p>
        Tools: InDesign, Photoshop, Illustration
      </article>
     </main> 
    );
  }