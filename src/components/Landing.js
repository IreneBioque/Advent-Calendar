import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      {/* Lo dejo preparado para el flex */}
      <header>
        <h1>¡Bienvenido al calendario de adviento rolero!</h1>
        <ul>
          <li><Link to="/form">Formulario de contacto</Link></li>
          <li><Link to="/participants">Participantes</Link></li>
          <li><Link to="/creators">Creadores</Link></li>
        </ul>
      </header>
      <div className="main">
        <div className="video">
          <video src="">
            Su navegador no puede reproducir vídeos
          </video>
        </div>
        <Link to="/calendar">
          <button>Ir al calendario</button>
        </Link>
      </div>
    </>
  );
};

export default Landing;
