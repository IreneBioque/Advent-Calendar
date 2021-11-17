import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/layout/_workArticle.scss";
import no from "../images/NO.jpg";
import "../styles/layout/_gift.scss";
const WorkArticle = (props) => {
  const [tech, setTech] = useState('listTech');
  const technologies = props.dataProyect.tech.map((data, i) => {
    return <li className={tech} key={i}>{data}</li>;
  });
  const handleTech = () => {
    setTech('listTech2');
  };
  const handleTechOut = () => {
    setTech('listTech');
  };
  return (
    <article className="section__work section">
      <h3 className="section__work--title">{props.dataProyect.name}</h3>
      <Link to={`./proyect/${props.dataProyect.id}`}>
        <div className="container">
          <div class="row">
            <div class="div1">
              <div class="box">
                <div class="box-body">
                  <img
                    class="img"
                    src={
                      props.dataProyect.day === true
                        ? props.dataProyect.img
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

        {/* <p className='section__work--parrafo'>{props.dataProyect.about}</p> */}
        {/* <div className="hoverarea">
          <img
            src={props.dataProyect.day === true ? props.dataProyect.img : no}
            alt={props.dataProyect.name}
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
export default WorkArticle;
