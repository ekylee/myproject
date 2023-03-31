import img1 from "../assets/image/5 sreen iphone 14.jpg";
import img2 from "../assets/image/img2.jpg";
import '../assets/css/portfolio.css'
import { Link } from "react-router-dom";


// uxui page

export default function MotionGraphic() {
    return (
      <main id="contact">
        <h1>UX & UI design</h1>
  
        <section className="container-portfolio">
          <div className="portfolioItem">
            <span className="headertext">
            <Link to ="/Case5">Northern Xscape Rental</Link>
            </span>
            <Link to ="/Case5"><img src={img1} alt="" /></Link>
            
          </div>
          {/* <div className="portfolioItem">
            <span className="headertext">
            <Link to ="/">Coming Soon</Link>
            </span>
            <img src={img2} alt="" />
          </div> */}
      </section>
     </main> 
    );
  }