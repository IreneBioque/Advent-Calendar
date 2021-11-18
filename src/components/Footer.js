import "../styles/layout/_header.scss";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to="/form">
        <p>¿Tienes algún problema o sugerencia? Haznoslo saber</p>
      </Link>
    </footer>
  );
};

export default Footer;
