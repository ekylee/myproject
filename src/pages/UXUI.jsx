import img1 from "../assets/image/5 sreen iphone 14.jpg";
import img2 from "../assets/image/Yelp Redesign2.png";
import '../assets/css/portfolio.css'
import img4 from "../assets/image/iPhone 12 Mockup app.jpg";

import { Link } from "react-router-dom";


// uxui page

export default function MotionGraphic() {
    return (
      <main id="contact">
        <h1>UX & UI design</h1>
  
        <section className="container-portfolio">
        <div className="portfolioItem">
            <span className="headertext">
            </span>
            <Link to ="/Case6"><img src={img2} alt="Yelp redesign- mockup" /></Link>

            
          </div> 
          <div className="portfolioItem">
            <span className="headertext">
            {/* <Link to ="/Case5">Northern Xscape Rental</Link> */}
            </span>
            <Link to ="/Case5"><img src={img1} alt="Northern Xscape Case study mock up" /></Link>
            
          </div>
          <div className="portfolioItem">
            <span className="headertext">
            {/* <Link to ="/Case4">Cofy. Website and App Adoption</Link> */}
            </span>
            <Link to ="/Case4"><img src={img4} alt="" /></Link>
          </div>

      </section>
     </main> 
    );
  }