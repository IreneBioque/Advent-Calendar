import { Link } from "react-router-dom";
import "../styles/layout/_landing.scss";
import Header from './Header'
const Landing = () => {
  return (
    <div className="landing">
      {/* Lo dejo preparado para el flex */}
      <Header/>
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
