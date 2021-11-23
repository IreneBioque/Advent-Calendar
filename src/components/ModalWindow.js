import { Link } from "react-router-dom";
import "../styles/layout/_modalwindow.scss";
import no from "../images/NO.jpg";
import { Modal } from 'react-bootstrap';

const ModalWindow =({show, closeModal}) => {
  return (
    <Modal show={show} onHide={closeModal} id='modal'>
    <Modal.Header closeButton>
      <Modal.Title>Dia 1</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {/* Aqui poner código que nos de la gana  */}
      Woohoo, you're reading this text in a modal!</Modal.Body>
  </Modal>
  );
}

export default ModalWindow;
