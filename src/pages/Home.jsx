import React from 'react';
import { AiFillLinkedin,AiOutlineMail,AiFillBulb,AiFillTool} from "react-icons/ai";
import { IconContext } from 'react-icons';
import img1 from "../assets/image/bg2-trans.png";
import { TypeAnimation } from 'react-type-animation';
import { SiAdobeillustrator,SiAdobeindesign,SiAdobephotoshop, SiAdobexd, SiAdobeaftereffects, SiFigma } from "react-icons/si";
import { RiEmpathizeFill, RiEdit2Fill,RiFileSearchLine } from "react-icons/ri";

// home /landing page


export default function Home() {
  return (
      <main>
      <div className='hero'>
      <div className='hero-img'><img src={img1} alt="Bg"/></div>
      <h1 className='typogophy subheader'>Hello, My name is Esther, 
        <p>I'm a <TypeAnimation className='typeanimation ' sequence={[
          "UX", 
          2000,
          'Product'
          , 2000,
          'Interaction', 
          2000,
      ]}
      speed={50}
      repeat={Infinity}
      
      />Designer</p>
      </h1> 

      
      </div>

      

      <div className="content">
        <h1>What I Do</h1>
        <p>
          <div className='left'>
              I'm passionate about improving the lives of others through design and I’m a critical thinker who wants to build innovative features. My driving force is understanding people, users need, and having an open mind towards the challenge and creating insightful solutions through an intuitive design process.
              In my work, I take a centered design approach to developing compelling narratives which delivers a value-driven design solutions that makes an enjoyable digital experience for all users. 
          </div>
        </p>
        <div className="container-home">
          <p class="project">
            <h1 >Design Process</h1>
            <div className='grid'>
              <IconContext.Provider value={{ className: "shared-class", size: 35}}>
                <>
                <div>
                  <RiEmpathizeFill/>
                  <p>Empathize</p>
                </div>
                <div>
                  <RiFileSearchLine/>
                  <p>Define</p>
                </div>
                  <div><AiFillBulb/>
                  <p>Ideation</p> 
                </div>
                  <div><RiEdit2Fill/>
                  <p>Design</p>
                </div>
                  <div><AiFillTool/>
                  <p>Prototype</p>
                </div>
                </>
              </IconContext.Provider>
            </div>
          </p>

          <p class="project">
            <h1>Design Tools</h1>
            <div className='center'>
              <div className="grid-tools">
                <IconContext.Provider value={{ className: "shared-class", size: 35}}>
                  <>
                  <div><SiAdobeillustrator/></div>
                  <div><SiAdobeindesign/></div>
                  <div><SiAdobephotoshop/></div>
                  <div><SiAdobexd/></div>
                  <div><SiAdobeaftereffects/></div>
                  <div><SiFigma/></div>
                  </>
                </IconContext.Provider>
              </div>
            </div>       
          </p>
          <p class="project">

            <h1>Visual Design</h1>
            <div className='center'>
              I value simple content structure, clean design patterns, and thoughtful interactions.
              <div>
                <h3>Things I enjoy designing:</h3>
                  <p>UX UI</p>
                  <p>Web</p>
                  <p>Branding</p>
                </div>
            </div>
          </p>
        </div>
        </div>
        <article className="content">
          <p>
            <h1>Work with me</h1>
            <div>
              <IconContext.Provider value={{ className: "shared-class", size: 50}}>
              <>
                <a href='http://www.linkedin.com/in/estherkylee'><AiFillLinkedin /></a>
                <a href='#'><AiOutlineMail /></a>
              </>
              </IconContext.Provider>
            </div>
          </p>

      </article>
    </main>
  );
}