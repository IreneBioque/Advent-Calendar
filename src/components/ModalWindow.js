import React from "react";
import "../styles/layout/_modalwindowno.scss";
import { Modal } from 'react-bootstrap';

const ModalWindow = ({ show, closeModal, data }) => {

  const loadAuthor = () => {
    var author = "";
    if (data.autor.length > 1) {
      for (var i = 0; i <= (data.autor.length - 1); i++) {
        if (i === (data.autor.length - 2)) {
          author += data.autor[i] + " y ";
        } else if (i === (data.autor.length - 1)) {
          author += data.autor[i];
        } else {
          author += data.autor[i] + ", ";
        }
      }
    } else {
      author = data.autor[0];
    }
    return author;
  }


  return (
    <Modal show={show} onHide={closeModal} id='modal'className="modalBackground">
      <Modal.Header closeButton>
        <Modal.Title>
          <h1 className="modal__ModalTitle">Día {data.day}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal__container">
          <div className="modal__header">
            <h2>Hoy tenemos un regalo de {loadAuthor()}:</h2><br></br>
            <h3>{data.title}</h3>
          </div>
          <div className="modal__image"><img src={data.image} alt="Imagen del regalo"></img></div>
          <p className="modal__description">{data.description}</p>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a className="modal__download" target="_blank" href={data.file}>
              Descarga del material
            </a>
            <p className="modal__rrss">{data.twitter.map((twitter, index) => (
              <>
                <span className="fab fa-twitter"></span>
                <a target="_blank" href={twitter} rel="noreferrer">{data.autor[index]}</a>
              </>
            ))}</p>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalWindow;
