import React from 'react';
import "../styles/layout/_header.scss";
import { Link } from "react-router-dom";
import mainImage from '../images/logo-calendario.png';

const Header = () => {
  return (
    <header className="header">
    <div className="header__div">
    <Link to="/" className="header__div--link">
      <div className='logoContainer'>
        <img src={mainImage} alt='Logo del calendario para volver a la página inicial' />
      </div>
    </Link>
    <h1 className="header__div--title">¡Te damos la bienvenida al calendario de adviento rolero!</h1>
    </div>
    <ul className="header--list">
      <li className="header--list__element"><Link to="/form">Contacto</Link></li>
      <li className="header--list__element"><Link to="/participants">Participantes</Link></li>
      <li className="header--list__element"><Link to="/creators">Creadores</Link></li>
    </ul>
  </header>
  );
};

export default Header;