import { Link } from "react-router-dom";
import "../styles/layout/_participants.scss";
const Participants = (props) => {
  const list = props.datafiltered.map((participant) => {
    return (
      <li key={participant.id} className="participants__list--element">
        <div className="participants__list--element__header">
        <h4>{participant.name}</h4>
        <a href={participant.twitter} target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        </div>
        <img src={participant.img} alt={participant.name} className="participants__list--element__img" />
        <p className="participants__list--element__text">{participant.description}</p>
 
      </li>
    );
  });
  return (
    <div className="participants">
      <header className="participants__header">
      <Link to="/" >Atrás</Link>
        <h1 className="participants__header--title">Participantes</h1>
      </header>
      <main>
        <ul className="participants__list">{list}</ul>
      </main>
    </div>
  );
};

export default Participants;