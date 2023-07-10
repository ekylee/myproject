import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../assets/image/Yelp.jpg";
import img2 from "../assets/image/research.jpg";
import img3 from "../assets/image/design process yelp.png";
import img4 from "../assets/image/Feature private public.jpg";
import img5 from "../assets/image/redesign.jpg";
import img6 from "../assets/image/solution.jpg";
import img7 from "../assets/image/Cluttered.jpg";
import img8 from "../assets/image/Friend list.png";
import img9 from "../assets/image/Yelp userflow.jpg";
import img10 from "../assets/image/Yelp Redesign.png";
import img11 from "../assets/image/yelp 12s.jpg";
import img12 from "../assets/image/Outcome.jpg";








import '../assets/css/UXcase.css'

import { Pagination, Navigation } from "swiper";


// Case study page

export default function Case6() {
    return (
      <main id="case1">
        <h1>Case Study-Yelp App Redesign</h1>
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
            {/* <h1></h1> */}
            </span>
            <img src={img10} alt="Cover page-Yelp case study" />
          </SwiperSlide>
          <SwiperSlide className="caseItem-ux">
          <span>
            {/* <h1>Title</h1> */}
          </span>
            <img src={img11} alt="magazine design pg2" />
          </SwiperSlide>
          <SwiperSlide className="caseItem-ux">
          <span>
            {/* <h1>Title</h1> */}
          </span>
            <img src={img1} alt="magazine design pg2" />
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
        <h1 class='headertext-ux'>Overview</h1>
        <p>Yelp, established in 2004 in San Francisco, serves as a comprehensive platform connecting individuals with excellent local businesses. 
          By offering reliable information, user-generated reviews, and visual content, Yelp acts as a go-to resource for consumers to explore, 
          engage with, and conduct transactions with businesses of all scales. Whether it's requesting a quote, joining a waitlist, making a reservation, 
          scheduling an appointment, or making a purchase, Yelp simplifies the process for users to interact seamlessly with local businesses.
        </p>
        <section>
        <h1 className="headertext-ux">Problems</h1>
          <ul> 
            <li className="subheadertext-ux">Lack of understanding of what competitors have over them</li>
              <p> What do yelp's competitor have, that make users chose them over yelp?</p>
            <li className="subheadertext-ux">Lack of understanding of user's wants</li>
              <p>What features do yelp users want the app to have?</p>
            <li className="subheadertext-ux">Lack of understanding of user's need</li>
              <p>What features do user find it useful? What are their current painpoint?</p>
          </ul>

          <h1 className="headertext-ux">Challenges</h1>
          <ul> 
            <p className="subheadertext-ux"> Usage has significantly dropped amoungst younger demographic</p>
              <p> Research shows that age 27-34 are the largest segment of users by age making up 29% of the user base, followed by aged 34-43 with 28% and age 45-54 with 20%.
                  Only 11% of Yelp users are aged 18-26.
              </p>
          <h1 className="headertext-ux">Opportunity</h1>

            <p>Attract and retain more users from age 18-26 to use the app</p>
            <p>Realize a larger market share in the food and drinks industry</p>
          </ul>
        </section>
        <img src={img2}  alt=""/>
        <h1 className="headertext-ux">Pain Points</h1>
        <h3 className="subheadertext-ux">I've surveyed and interviewed 20 people on what they think of the current yelp app:</h3>
          <ul> 
            <li>Insight 1- Some users want the option to stay private which is only your firends will see</li>
            <li>Insight 2- User question the authenticity of the reviews</li>
            <li>Insight 3- Current UI is cluttered, outdated look and hard to use </li>
          </ul>
        
        <div>
        <img src={img3}  alt=""/>
        </div>

        <h1 class='headertext-ux'>Problem 1</h1>
          <p>I have learn that from interviews and survery that not all users want leave their profile out for everyone to see, in todays world full of influencers and content creators you would think a public profile is common 
          but not everyone wants a strong social media presence
          some users actually prefer more privcy than others. </p>
        <h1 class='headertext-ux'>Solution</h1>
          <p> I've designed a new feature which provide users an option to choose to be public, private or friends only.</p>
          <img src={img5}  alt=""/>


        <h1 class='headertext-ux'>Problem 2</h1>
          <p>User doubt the reviews authenticity- Like all review platform, there are paid and fraudulent reviews issues, there are paid advertisement review, bot account etc,
            user often question if some reviews are generic.</p>
        <h1 class='headertext-ux'>Solution</h1>
          <p> Study has shown that people are 21% more likely to trust a comment, or review if it is coming from someone they know. Think about it, if a friend or a popular influencer told me that this resturant is good, I'm more likely to try it.
            in order to improve the realibilities of the review, I've design a function where users can see who amounst their friend list has been to the restuarant, or left a review.
          </p>
          <img src={img6}  alt=""/>

        <h1 class='headertext-ux'>Problem 3</h1>
        <p>Some user found the current yelp layout cluttered, the current Yelp has too many functions,as it's oneo of yelp’s goal to help businesses generate their target audience therefore it is more business focused, 
        </p>
        <h1 class='headertext-ux'>Solution</h1>
        <p>  The app offers too much, including finding dentists, and hair salons, it makes the app too busy and cluttered. why not separate the functions, yelp food, and Yelp business?
            <ul>
              <li >The goal is to make the layout user focus</li>
              <li>Get rid of the unnecessary clutter that complicates users' journey</li>
            <p> e.g Friend list- It is not necessary to show how many pictures a person have in their account on the friend list, so I've designed a simplified version.</p>
            </ul>
        </p>
        <img src={img8}  alt=""/>


          
          <div>
          <h1 className="headertext-ux">User Flow</h1>

          <img src={img9}  alt=""/>

          <h1 className="headertext-ux">Usability Testing</h1>
          <p>To avoid bias and leading questions, I provided minimum instructions and asked open-ended questions so the interviewer could explore independently and provide detailed feedback.

          Here are some questions I asked during testing:
          <ul>
            <li>Are these added features useful? Why or why not? </li>
            <li>What was challenging and what was easy?</li>
            <li>How is this compared to the older layout?</li>
            <li>Would you use the new layout?</li>

          </ul>
        
          </p>
          <p> 
          I ask users to go through the newly designed layout, incorporating 2 different user flows, so participants can fully experience the private and public accounts. And I ask them to compare it to the current layout and ask for their comment.
          <ul>
            <h3>Key insight</h3>
            <li>The interviewees find the app looks cleaner, less cluttered and more attractive</li>
            <li>Users like the option to choose to be public or private account</li>
            <li>Users find the function to see where they friend’s and acquaintances has been to helpful in trusting the review </li>
          </ul>
          </p>

          
          <img src={img12}  alt=""/>
   
          <h1 class='headertext-ux'>Final Design</h1>
          <img src={img11} alt=""/>

            <img src={img1} alt=""/>

        <section className="prototype">
          <h1 class='headertext-ux'>Prototype</h1>
          <div class="container">
            <a href="https://xd.adobe.com/view/6b9c7984-2d4f-44ac-b1d9-73011aa6d87f-3ecf/?fullscreen&hints=off" class="button">
              <div class="button__line"></div>
              <div class="button__line"></div>
              <span class="button__text">Private account Prototype</span>
              <div class="button__drow1"></div>
              <div class="button__drow2"></div>
            </a>
          </div>
          <div class="container">
            <a href="https://xd.adobe.com/view/a5fdbde9-2110-4f65-8d5c-dbdd944b5cec-f0ae/?fullscreen&hints=off" class="button">
              <div class="button__line"></div>
              <div class="button__line"></div>
              <span class="button__text">Public account Prototype</span>
              <div class="button__drow1"></div>
              <div class="button__drow2"></div>
            </a>
          </div>
          </section>

          <h1 className="headertext-ux">Next Step</h1>
          <p className="subheadertext-ux">To further improve the app, what I am planning to do next is a research focus on the question: What make users choose to use another competitor’s app?</p>
        </div>

      </article>
     </main> 
    );
  }