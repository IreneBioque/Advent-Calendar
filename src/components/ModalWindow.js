import { Link } from "react-router-dom";
import "../styles/layout/_modalwindow.scss";
import no from "../images/NO.jpg";

function ModalWindow(props) {
  return (
    <div className="modal">
      <div className="modal__page">
        <div className="modal__content">
          <header className="modalHeader">
            <h2 className="modalHeader__title">{props.title}</h2>
            <Link to="/calendar">
              <i class="far fa-times-circle modalHeader__close"></i>
            </Link>
          </header>
          <article>
            <img src={no} alt="notday" className="modal__img" />
          </article>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
