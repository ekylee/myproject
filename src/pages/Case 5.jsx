import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../assets/image/5 sreen iphone 14.jpg";
import img2 from "../assets/image/Competitive alaysis.jpg";
import img3 from "../assets/image/Horizontal_Book_Persona_3.jpg";
import img4 from "../assets/image/Flowchart1024_1.jpg";
import img5 from "../assets/image/3 screen mock up-cover.jpg";
import img6 from "../assets/image/10 screen.jpg";
import img7 from "../assets/image/Horizontal_Book_Low fi_4.jpg";
import img8 from "../assets/image/Isometric Smartphone Free Mockup.jpg";




import '../assets/css/UXcase.css'

import { Pagination, Navigation } from "swiper";


// Case study page

export default function Case5() {
    return (
      <main id="case1">
        <h1>Case Study-Northen Xscape</h1>
        <Swiper
         // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className= "container-case-ux">
          <SwiperSlide className="caseItem-ux">
            <span>
            <h1></h1>
            </span>
            <img src={img1} alt="magazine design pg 1" />
          </SwiperSlide>
          <SwiperSlide className="caseItem-ux">
          <span>
            {/* <h1>Title</h1> */}
          </span>
            <img src={img2} alt="magazine design pg2" />
          </SwiperSlide>
          <SwiperSlide className="caseItem-ux">
          <span>
            {/* <h1>Title</h1> */}
          </span>
            <img src={img3} alt="magazine design pg2" />
          </SwiperSlide>
          <SwiperSlide className="caseItem-ux">
          <span>
            {/* <h1>Title</h1> */}
          </span>
            <img src={img4} alt="magazine design pg2" />
          </SwiperSlide>
          <SwiperSlide className="caseItem-ux">
          <span>
            {/* <h1>Title</h1> */}
          </span>
            <img src={img5} alt="magazine design pg2" />
          </SwiperSlide>
          <SwiperSlide className="caseItem-ux">
          <span>
            {/* <h1>Title</h1> */}
          </span>
            <img src={img6} alt="magazine design pg2" />
          </SwiperSlide>
          <SwiperSlide className="caseItem-ux">
          <span>
            {/* <h1>Title</h1> */}
          </span>
            <img src={img7} alt="magazine design pg2" />
          </SwiperSlide>
          <SwiperSlide className="caseItem-ux">
          <span>
            {/* <h1>Title</h1> */}
          </span>
            <img src={img8} alt="magazine design pg2" />
          </SwiperSlide>
      </Swiper>
      <article>
        <h1 class='headertext-ux'>The Client</h1>
        <p>Northern Xscape Rental provides jet ski and snowmobile rental services for leisure purposes. From the technical difficulties that was
          brought up by the client, the existing difficulties I’ve concluded is the outdated booking system which make it hard for users to use, thus
          resulting in low booking request. In the request of my client, a new app will be created to replace the existing booking system. This
          case study is design with an intent to bring a solution to improve the current booking system, reach a larger audience, increase customer
          flow, and gain competitive advantage for Northern Xscape Rental.
        </p>
        <h1 className="headertext-ux">Problem</h1>
        <h3 className="subheadertext-ux">Here’s some existing issue with the current booking website:</h3>
          <ul>
            <li>The current booking system is glitchy and unusable at times</li>
            <li>The system is outdated, did not contain all updated info</li>
            <li>Current Website cannot handle traffic and become overwhelm at times</li>
            <li>Low booking since the current website is inconvenient for users</li>
            <li>Competitors have better booking system</li>
          </ul>
        <h3 className="subheadertext-ux">Which pose the question:</h3>
            <p>
            How can the system attract more bookings and benefit the company to reducing labor work and increase their competitiveness in
            the field?
            </p>
        <h1 class='headertext-ux'>Research Method</h1>
        <div>
          <h3>Competitive Analysis</h3>
          <p> I have learned
              some valuable insights using competitive analysis.
              Most competitors do not have an onboarding process, only one does, and I found it very 
              helpful in guiding user in learning the user-flow of the app.</p>
          <p> 
              I’ve
              also notice simplifying the user journey helps to ease and enhance user experience.
              For instance, optional account creation prior to accessing the booking
              page allow users to preview what the app can do without having to complete the complicating sign up process.
          </p>   
          <p>Seccondly, all competitors apps do not have an in-app map
              navigation. It would be a convenient additional feature to have without the need to search for
              the addresses. Therefore, I've decided to incorporate the feature into my app design.
          </p>
          <img src={img2}  alt=""/>
          <h3>User Persona</h3>
          <img src={img3} alt=""/>
          <h1 class='headertext-ux'>The Desgin</h1>
          <img src={img5} alt=""/>
          <p className="subheadertext-ux">Concluding my research finding and insight, I've decided these are nessesary features to include in order to enhance user experience:          </p>
            <ul>
              <li>Onboarding</li>
              <li>Map navigation with zoom in and out feature</li>
              <li>Optional login, which allow user to browse the app before signing up</li>
              <li>Mandatory Rental Agreement form before confirming appointment</li>
              <li>A welcoming user page which also include rental history for user's convenience</li>
              <li>A chatbot to help user's immediate support needs</li>
              <li>Contact page with address and phone number</li>
            </ul>
            <img src={img6} alt=""/>
          <h3>User Flow</h3>
          <img src={img4} alt=""/>
          <h3>Wireframe</h3>
          <img src={img7} alt=""/>
          <h1 class='headertext-ux'>Prototype</h1>
          <div class="container">
            <a href="https://xd.adobe.com/view/629c19d4-8e73-4ad1-af16-24ac75b5866e-37cf/?fullscreen&hints=off" class="button">
              <div class="button__line"></div>
              <div class="button__line"></div>
              <span class="button__text">Full Prototype</span>
              <div class="button__drow1"></div>
              <div class="button__drow2"></div>
            </a>
          </div>
          <img src={img8} alt=""/>
        </div>

      </article>
     </main> 
    );
  }