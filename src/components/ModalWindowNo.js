import React from "react";
import "../styles/layout/_modalwindow.scss";
import { Modal } from 'react-bootstrap';

const ModalWindowNo = ({ showNo, closeModal, data }) => {


  return (
    <Modal show={showNo} onHide={closeModal} id='modal'>
      <Modal.Header closeButton>
        <Modal.Title>
          <h1 className="modal__ModalTitle">¡Todavía no es el día!</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal__body">
          <p>Siento ser yo quién te lo diga, pero te has equivocado.<br /> Este día todavía no está disponible, el regalo se desbloqueará el día {data.day}.<br />
            Ten paciencia y disfruta del contenido anterior.</p>
          <div><img src="https://media1.giphy.com/media/3ohzdQ1IynzclJldUQ/giphy.gif?cid=ecf05e471wia5dzjb26uyqwznem0rrg5ln4y97feocc43ekg&rid=giphy.gif&ct=g" alt="Imagen del regalo"></img></div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalWindowNo;
