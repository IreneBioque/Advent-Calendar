import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/layout/_workArticle.scss";
import no from "../images/NO.jpg";
import "../styles/layout/_gift.scss";
const DayArticle = (props) => {
  const [tech, setTech] = useState('listTech');
  const handleTech = () => {
    setTech('listTech2');
  };
  const handleTechOut = () => {
    setTech('listTech');
  };
  return (
    <article>
      <h3>{props.data.name}</h3>
      <Link to={`./day/${props.data.id}`}>
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
      </Link>
    </article>
  );
};
export default DayArticle;
