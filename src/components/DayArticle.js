import { useState } from 'react';

import "../styles/layout/_workArticle.scss";
import no from "../images/NO.jpg";
import "../styles/layout/_gift.scss";
import ModalWindow from './ModalWindow';


const DayArticle = (props) => {
  // TODO: ADD USE STATE TO SAVE PRESENT TO SHOW TO MODAL
 
  const [show, setShow] = useState(false);



  const showModal = () => setShow(true);

  const closeModal = () => setShow(false);

  // TODO: ADD USE EFFECT TO REQUEST TO API

  return (
    <article>
      <div className='presentCard'>
      <h3>{props.data.name}</h3>
      <div onClick={showModal}>
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
