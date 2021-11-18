
import "../styles/layout/_header.scss";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__paragraph">
        Atrás
      </Link>
      <h1 className="header__title">Calendario de adviento rolero</h1>
      <ul className="header__list">
        <li className="header__list--element">
          <Link to="/participants">Participantes</Link>
        </li>
        <li className="header__list--element">
          <Link to="/creators">Creadores</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;