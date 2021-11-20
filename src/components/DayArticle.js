import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "../styles/layout/_workArticle.scss";
import no from "../images/NO.jpg";
import "../styles/layout/_gift.scss";

const DayArticle = (props) => {
  // TODO: ADD USE STATE TO SAVE PRESENT TO SHOW TO MODAL
  const [tech, setTech] = useState('listTech');
  const [show, setShow] = useState(false);

  const handleTech = () => {
    setTech('listTech2');
  };

  const handleTechOut = () => {
    setTech('listTech');
  };

  const showModal = () => setShow(true);

  const closeModal = () => setShow(false);

  // TODO: ADD USE EFFECT TO REQUEST TO API

  return (
    <article>
      <div className='presentCard'>
      <h3>{props.data.name}</h3>
      <div onClick={showModal}>
        <div className="container">
          <div class="row">
            <div class="div1">
              <div class="box">
                <div class="box-body">
                  <img
                    class="img"
                    src={
                      props.data.id === 1
                        ? props.data.img
                        : no
                    }
                    alt="gift"
                  />
                  <div class="box-lid">
                    <div class="box-bowtie"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <p className='section__work--parrafo'>{props.data.about}</p> */}
        {/* <div className="hoverarea">
          <img
            src={props.data.day === true ? props.data.img : no}
            alt={props.data.name}
            className="section__work--image"
            onMouseOver={handleTech}
            onMouseLeave={handleTechOut}
          />
        </div> */}
        {/* <ul className='tech_over'>{technologies}</ul> */}
      </div>
      </div>
      <Modal show={show} onHide={closeModal} id='modal'>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>
    </article>
  );
};
export default DayArticle;
