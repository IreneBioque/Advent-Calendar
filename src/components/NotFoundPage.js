import React from 'react';
import { Link } from "react-router-dom";
import "../styles/layout/_notfoundpage.scss";
import notfound from "../images/NFP2.png"

const NotFoundPage = () => {
  return (
    <div className="notFoundPage">
      <h1 className="notFoundPage__text">
        Te has colao. Es decir, no sé cómo has llegado aquí, pero te aseguro que
        no era el camino correcto.
      </h1>
      <img src={notfound} alt="logonotfound" className="notFoundPage__img" />
      <Link to="/">
        <button className="notFoundPage__button">Volver al inicio</button>
      </Link>
    </div>
  );
};
export default NotFoundPage;
