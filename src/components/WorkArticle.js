import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/layout/_workArticle.scss";
import loco from "../images/donde-vas-loco.jpg";
import no from "../images/NO.jpg";
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
    <article className='section__work section'>
      <Link to={`./proyect/${props.dataProyect.id}`}>
        <div className='container'>
          <h3 className='section__work--title'>{props.dataProyect.name}</h3>
          {/* <p className='section__work--parrafo'>{props.dataProyect.about}</p> */}
          <div className="hoverarea" >
          <img
            src={props.dataProyect.day === true ? props.dataProyect.img : no}
            alt={props.dataProyect.name}
            className='section__work--image'
            onMouseOver={handleTech}
            onMouseLeave={handleTechOut}
          />
          </div>
          {/* <ul className='tech_over'>{technologies}</ul> */}
        </div>
      </Link>
    </article>
  );
};
export default WorkArticle;
