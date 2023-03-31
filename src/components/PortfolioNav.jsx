import { Link } from "react-router-dom";

export default function Nav() {
  return (

      <nav>
        <ul className="container-nav">
          <li><Link to="/UXUI">UX & UI Design</Link></li>
          <li><Link to="/Graphic">Branding & Graphic Design</Link></li>
          <li><Link to="/MotionGraphic">Motion Graphic</Link></li>
        </ul>
      </nav>
  );
}