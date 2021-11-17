
import "../styles/layout/_header.scss";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">Calendario de adviento rolero</header>
      <Link to="/">
        <p>Atrás</p>
      </Link>
    </>
  );
};

export default Header;