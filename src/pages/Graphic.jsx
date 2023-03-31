import img1 from "../assets/image/img1.jpg";
import img2 from "../assets/image/Horizontal_Book_Cover & back_7.jpg";
import img3 from "../assets/image/Sign_Mockup01_MicroVolume.jpg";
import img4 from "../assets/image/iPhone 12 Mockup app.jpg";


import '../assets/css/portfolio.css'

import { Link } from "react-router-dom";



export default function MotionGraphic() {
    return (
      <main id="contact">
        <h1>Branding & Graphic design</h1>
  
        <section className="container-portfolio">
          <div className="portfolioItem">
            <span className="headertext">
            <Link to ="/Case1">Illenium Magazine</Link>
            </span>
            <img src={img1} alt="" />
          </div>
          <div className="portfolioItem">
            <span className="headertext">
            <Link to ="/Case2">Cofy. Brandbook</Link>
            </span>
            <img src={img2} alt="" />
          </div>
          <div className="portfolioItem">
            <span className="headertext">
            <Link to ="/Case3">Cofy. Merch</Link>
            </span>
            <img src={img3} alt="" />
          </div>          <div className="portfolioItem">
            <span className="headertext">
            <Link to ="/Case4">Cofy. Website and App Adoption</Link>
            </span>
            <img src={img4} alt="" />
          </div>
      </section>
     </main> 
    );
  }