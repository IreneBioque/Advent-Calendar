import { Link } from "react-router-dom";
import "../styles/layout/_notfoundpage.scss";

const NotFoundPage = () => {
  return (
    <div className="notFoundPage">
      <p className="notFoundPage__text">
        Página no encontrada. No vayas tan rápido todavía no es el día. Tendrás
        que esperar un poco más
      </p>
      <Link to="/calendar">
        <p>Vuelve atrás</p>
      </Link>
    </div>
  );
};
export default NotFoundPage;
