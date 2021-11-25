import { useState } from 'react';

import "../styles/layout/_dayArticle.scss";
import no from "../images/NO.jpg";
import "../styles/layout/_gift.scss";
import ModalWindow from './ModalWindow';


const DayArticle = ({ data }) => { 
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true)
  };

  const closeModal = () => setShow(false);

  return (
    <article className='articleCard'>
      <div className='presentCard'>
      <h3>{data.name}</h3>
      <div onClick={() => showModal(data.id)}>
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
    </article>
  );
};
export default DayArticle;
