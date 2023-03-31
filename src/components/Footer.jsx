import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>&copy; {(new Date().getFullYear())} <Link to="/">Designed and built by Esther Lee </Link></p>
    </footer>
  );
}

export default Footer;
