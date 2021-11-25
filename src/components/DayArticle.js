import { useState } from 'react';

import "../styles/layout/_dayArticle.scss";
import no from "../images/NO.jpg";
import "../styles/layout/_gift.scss";
import ModalWindow from './ModalWindow';
import { func } from 'prop-types';

const DayArticle = (props) => {
  // TODO: ADD USE STATE TO SAVE PRESENT TO SHOW TO MODAL

  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);

  const closeModal = () => setShow(false);

  const dayTest = () => {
    var dayT = new Date();
    dayT = dayT.getDate();
    if(dayT < props.data.day){
      alert("No es el día"); // TODO: ESTA ES LA LÍNEA QUE HAY QUE CAMBIAR PARA LANZAR EL MODAL DEL QUE NO ES EL DÍA
    } else{
      showModal();
    }
  }

  // TODO: ADD USE EFFECT TO REQUEST TO API

  return (
    <article className='articleCard'>
      <div className='presentCard'>
      <h3> Día {props.data.day}</h3>
      <div onClick={dayTest}>
        <div className="container">
          <div className="row">
            <div className="div1">
              <div className="box">
                <div className="box-body">
                  <img
                    className="img"
                    src={
                      props.data.id === 1
                        ? props.data.img
                        : no
                    }
                    alt="gift"
                  />
                  <div className="box-lid">
                    <div className="box-bowtie"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <ModalWindow show={show} closeModal={closeModal} data={props.data} />
    </article>
  );
};
export default DayArticle;
