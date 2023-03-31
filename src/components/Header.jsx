import { Link } from "react-router-dom";
import logo from "../assets/image/Asset2.svg";


export default function Header() {
  return (
    <header>
      <h1><Link to="/"><img src={logo} alt="logo"/></Link></h1>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Project">Work</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}