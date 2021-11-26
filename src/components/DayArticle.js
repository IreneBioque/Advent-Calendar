import React, { useState } from 'react';
import "../styles/layout/_dayArticle.scss";
import no from "../images/NO.jpg";
import "../styles/layout/_gift.scss";
import ModalWindow from './ModalWindow';
import ModalWindowNo from './ModalWindowNo';

const DayArticle = ({ data }) => {
  const [show, setShow] = useState(false);

  const[showNo, setShowNo] = useState(false);

  const showModal = () => setShow(true);

  const showModalNo = () => setShowNo(true);

  const closeModal = () => setShow(false);

  const closeModalNo = () => setShowNo(false);

  const dayTest = () => {
    var dayT = new Date();
    dayT = dayT.getDate();
    if(dayT < data.day){
      showModalNo(); // TODO: ESTA ES LA LÍNEA QUE HAY QUE CAMBIAR PARA LANZAR EL MODAL DEL QUE NO ES EL DÍA
    } else{
      showModal();
    }
  }

  return (
    <article className='articleCard'>
      <div className='presentCard'>
      <h3> Día {data.day}</h3>
      <div onClick={() => dayTest()}>
        <div className="container">
          <div className="row">
            <div className="div1">
              <div className="box">
                <div className="box-body">
                  <img
                    className="img"
                    src={
                      data.id === 1
                        ? data.img
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
      <ModalWindow show={show} closeModal={closeModal} data={data} />
      <ModalWindowNo showNo={showNo} closeModal={closeModalNo} data={data} />
    </article>
  );
};
export default DayArticle;
