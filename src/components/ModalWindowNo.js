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
            <h1>Siento ser yo quién te lo diga, pero te has equivocado. Este día todavía no está disponible.</h1>
            <h2>Este regalo se desbloqueará el día {data.day}</h2>
            <h2>Ten paciencia y disfruta del contenido anterior</h2>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalWindowNo;
