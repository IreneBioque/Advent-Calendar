import React, {useEffect, useState} from 'react';
import "../styles/layout/_dayArticle.scss";
import no from "../images/NO.jpg";
import "../styles/layout/_gift.scss";
import ModalWindow from './ModalWindow';

const DayArticle = ({ data }) => {
  const [show, setShow] = useState(false);
  // const [day, setDay] = useState('');
  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);

// Hemos intentado poner un fetch poara pillar el dia del año y que no puedan cambiar la fecha en el ordenador pero sale undefined,
// si traes toda la data nos trae una movida que no entendemos xD. Auida Ari. Nos trae la movida de Madrid en network, pero no sabemo
// que hacer con ello

//   useEffect(() => {
//     fetch('http://worldtimeapi.org/api/timezone/Europe/Madrid')
//     .then((data) => {
//       setDay(data);
//     })
//     .catch((err) => console.log('Error fetching data:', err));
//   }, [])
// console.log(day)
  const dayTest = () => {
    var dayT = new Date();
    dayT = dayT.getDate();
    if(dayT < data.day){
      alert("No es el día"); // TODO: ESTA ES LA LÍNEA QUE HAY QUE CAMBIAR PARA LANZAR EL MODAL DEL QUE NO ES EL DÍA
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
    </article>
  );
};
export default DayArticle;
