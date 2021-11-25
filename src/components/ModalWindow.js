import { Link } from "react-router-dom";
import "../styles/layout/_modalwindow.scss";
import no from "../images/NO.jpg";
import { Modal } from 'react-bootstrap';

const ModalWindow = ({ show, closeModal, data }) => {
  return (
    <Modal show={show} onHide={closeModal} id='modal'>
      <Modal.Header closeButton>
        <Modal.Title>
          <h1 className="modal__ModalTitle">Día {data.day}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal__container">
          <h1 className="modal__header">Hoy tenemos un regalo de {data.autor}</h1>
          <div className="modal__image"><img src={data.image} alt="Imagen del regalo"></img></div>
          <br></br>
          <h2 className="modal__title">Se trata de {data.title}</h2>
          <h3 className="modal__description">{data.description}</h3>
          <br></br>
          <h3 className="modal__download"><button><a target="_blank" href={data.file}>Descarga del material</a></button></h3>
          <h3 className="modal__rrss"><span className="fab fa-twitter"></span><a href={data.twitter}>{data.autor}</a></h3>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalWindow;
