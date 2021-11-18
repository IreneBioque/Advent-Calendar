
import "../styles/layout/_header.scss";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="header__title">Calendario de adviento rolero</h1>
        <Link to="/" className="header__paragraph">
        Atrás
        </Link>
      </header>
    </>
  );
};

export default Header;