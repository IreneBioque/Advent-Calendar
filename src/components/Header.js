import React, { useState, useEffect } from 'react';
import "../styles/layout/_header.scss";
import { Link } from "react-router-dom";
import mainImage from '../images/logo-calendario.png';
import imagePc from '../images/tituloweb.png';
import imageMovil from '../images/titulomovil.png'

const Header = () => {

  const [titleImage, setTitleImage] = useState();

  useEffect(() => {
    let image;

    if (window.screen.width <= 500) {
      image = imageMovil;
    } else {
      image = imagePc;
    }

    setTitleImage(image)

  }, [setTitleImage])

  console.log('window.location.href', window.location.href)

  return (
    <header className="header">
      <div className="header__div">
        <Link to="/" className="header__div--link">
          <div className='logoContainer'>
            <img src={mainImage} alt='Logo del calendario para volver a la página inicial' />
          </div>
        </Link>
        <div className='mainTitleContainer'>
          <img src={titleImage} alt='Calendario Rolero' />
        </div>
        {!window.location.href.includes('/calendar') ? (
          <Link to="/calendar" className='linkToCalendar'>
            <button className="landing__main--button">Calendario</button>
          </Link>
        ) : <div />}
      </div>
      <ul className="header--list">
      <li className="header--list__element"><a target="_blank" href="https://drive.google.com/drive/folders/1iuJu-OWLRAv09AluBGPDTLbZlalGt8gY?usp=sharing">Descarga completa</a></li>
        <li className="header--list__element"><Link to="/form">Contacto</Link></li>
        <li className="header--list__element"><Link to="/participants">Participantes</Link></li>
        <li className="header--list__element"><Link to="/creators">Creadores</Link></li>
      </ul>
    </header>
  );
};

export default Header;