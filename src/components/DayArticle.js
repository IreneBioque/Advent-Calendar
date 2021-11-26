import React, {useEffect, useState} from 'react';
import "../styles/layout/_dayArticle.scss";
import no from "../images/noChristmas.png";
import "../styles/layout/_gift.scss";
import ModalWindow from './ModalWindow';
import ModalWindowNo from './ModalWindowNo';

const DayArticle = ({ data }) => {
  const [show, setShow] = useState(false);
  // const [day, setDay] = useState('');
  const showModal = () => setShow(true);

  const[showNo, setShowNo] = useState(false);

  const showModalNo = () => setShowNo(true);

  const closeModal = () => setShow(false);
  var dayT = new Date();
  dayT = dayT.getDate();


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

  const closeModalNo = () => setShowNo(false);

  const dayTest = () => {
    if(dayT < data.day){
      showModalNo(); // TODO: ESTA ES LA LÍNEA QUE HAY QUE CAMBIAR PARA LANZAR EL MODAL DEL QUE NO ES EL DÍA
    } else{
      showModal();
    }
  }
console.log('Dayactual',dayT);
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
                      data.day <= dayT
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
