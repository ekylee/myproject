import vid1 from "../assets/Video/EDM logo_1.mp4";
import vid2 from "../assets/Video/A5_Motion Design Production_Esther_Lee.mp4";
import vid3 from "../assets/Video/Motion Design Package_Esther Lee.mp4";

import '../assets/css/portfolio.css'


// Motion Graphic page

export default function MotionGraphic() {
    return (
      <main id="contact">
        <h1>Motion Graphics</h1>
  
        <section className="container-portfolio">
        <div className="portfolioItem">
            <span>
            <h1 className="headertext"></h1>
            </span>
            <video controls src={vid3} > </video>
          </div>
          <div className="portfolioItem">
            <span>
            <h1 className="headertext"></h1>
            </span>
            <video controls src={vid1} > </video>
          </div>
          <div className="portfolioItem">
          <span>
            <h1 className="headertext"></h1>
          </span>
            <video controls src={vid2} > </video>
          </div>
      </section>
     </main> 
    );
  }