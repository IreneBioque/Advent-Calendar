import { Link } from "react-router-dom";
import "../styles/layout/_landing.scss";
const Landing = () => {
  return (
    <div className="landing">
      {/* Lo dejo preparado para el flex */}
      <header className="landing__header">
        <h1 className="landing__header--title">¡Te damos la bienvenida al calendario de adviento rolero!</h1>
        <ul className="landing__header--list">
          <li className="landing__header--list__element"><Link to="/form">Contacto</Link></li>
          <li className="landing__header--list__element"><Link to="/participants">Participantes</Link></li>
          <li className="landing__header--list__element"><Link to="/creators">Creadores</Link></li>
        </ul>
      </header>
      <main className="landing__main">
        <div className="landing__main--video">
          <video src="">
            Su navegador no puede reproducir vídeos
          </video>
        </div>
        <Link to="/calendar">
          <button className="landing__main--button">Ir al calendario</button>
        </Link>
      </main>
    </div>
  );
};

export default Landing;
