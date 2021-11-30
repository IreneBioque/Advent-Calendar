import React, {useEffect, useState} from 'react';
import "../styles/layout/_dayArticle.scss";
import no from "../images/papanoel.png";
import "../styles/layout/_gift.scss";
import ModalWindow from './ModalWindow';
import ModalWindowNo from './ModalWindowNo';
import axios from 'axios';

const DayArticle = ({ data }) => {
  const [show, setShow] = useState(false);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [showNo, setShowNo] = useState(false);

  const showModal = () => setShow(true);

  const showModalNo = () => setShowNo(true);

  const closeModal = () => setShow(false);

  const closeModalNo = () => setShowNo(false);

  const dayTest = () => {
    if (data.day <= day){
      showModal()
    } else{
      showModalNo();
    }
  }

  useEffect(() => {
    axios.get('https://worldtimeapi.org/api/timezone/Europe/Madrid')
    .then((response) => {
      const datetime = response.data.datetime;
      const date = new Date(datetime);
      setDay(date.getDate());
      setMonth(date.getMonth() + 1);
    })
    .catch((err) => console.log('Error fetching data:', err));
  }, [day])

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
                      data.day <= day && month === '12'
                        ? data.image
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
