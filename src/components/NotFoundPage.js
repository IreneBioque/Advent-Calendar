import React from 'react';
import { Link } from "react-router-dom";
import "../styles/layout/_notfoundpage.scss";

const NotFoundPage = () => {
  return (
    <div className="notFoundPage">
      <h1 className="notFoundPage__text">
        Te has colao. Es decir, no sé cómo has llegado aquí, pero te aseguro que no era el camino correcto.
      </h1>
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
};
export default NotFoundPage;
