import { Link } from "react-router-dom";

import { useState } from 'react';
import "../styles/layout/_participants.scss";
const Participants = (props) => {
  const list = props.datafiltered.map((participant) => {
    return (
      <li key={participant.id} className="participantList__element">
        <h4>{participant.name}</h4>
        <img src={participant.img} alt={participant.name} />
        <p>{participant.description}</p>
        <a href={participant.twitter} target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
    );
  });
  return (
    <>
      <header className="pHeader">
        <h1>Participantes del calendario de adviento rolero</h1>
        <Link to="/">Atrás</Link>
      </header>
      <main>
        <ul className="participantList">{list}</ul>
      </main>
    </>
  );
};

export default Participants;