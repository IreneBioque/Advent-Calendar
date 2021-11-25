import "../styles/layout/_modalwindow.scss";
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
          <div className="modal__header">
            <h1>Hoy tenemos un regalo de {data.autor}</h1><br></br>
            <h2>{data.title}</h2>
          </div>
          <div className="modal__image"><img src={data.image} alt="Imagen del regalo"></img></div>
          <h3 className="modal__description">{data.description}</h3>
          <h3 className="modal__download"><button><a target="_blank" href={data.file} rel="noreferrer">Descarga del material</a></button></h3>
          <h3 className="modal__rrss"><span className="fab fa-twitter"></span><a href={data.twitter}>{data.autor}</a></h3>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalWindow;
