import { Link } from 'react-router-dom';
import '../styles/layout/_workDetail.scss';
import NotFoundPage from "./NotFoundPage";
import ModalWindow from "./ModalWindow";

const DayDetail = (props) => {
  if (props.day.id === 1) {
     return (
       <div className="detail" key={props.day.id}>
         <h1 className="titleDetail">{props.day.name}</h1>
         <Link to="/calendar">
           <p className="Link">
             <i className="fas fa-arrow-left arrow"></i>Volver atrás
           </p>
         </Link>
         <a
           className="LinkProyect"
           href={props.day.page}
           target="_blank"
           rel="noreferrer"
         >
           Ir al sitio web
         </a>
         <div className="workDetail">
           <img
             src={props.day.img}
             alt={props.title}
             className="workDetail__image"
           />
           <h3 className="workDetail__title">Sobre este proyecto</h3>
           <p className="workDetail__paragraph">{props.day.description}</p>
           <h3 className="workDetail__title">Tecnologías</h3>
           <h3 className="workDetail__title">Github</h3>
           <p className="workDetail__paragraph">
             Si quieres colaborar, darme alguna idea o ver el código del
             proyecto te dejo aquí el enlace a Github ¡Gracias!
           </p>
           <a
             className="workDetail__link"
             href={props.day.github}
             target="_blank"
             rel="noreferrer"
           >
             <i className="fab fa-github"></i>
           </a>
         </div>
       </div>
     );
  } else if (props.day.id !== 1) {
    return (
      <ModalWindow title={"Todavía no es el día"}>
      </ModalWindow>
    );
  } else {
 return <NotFoundPage />;
  }

};
export default DayDetail;
