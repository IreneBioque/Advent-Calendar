import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      {/* Lo dejo preparado para el flex */}
      <header>
        <Link to="/form"><button>Formulario de contacto</button></Link>
        <h1>¡Bienvenido al calendario de adviento rolero!</h1>
        <Link to="/participants"><button>Participantes</button></Link>
        <Link to="/creators"><button>Creadores</button></Link>
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
