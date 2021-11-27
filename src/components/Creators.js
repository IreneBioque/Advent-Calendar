import React from "react";
import { Link } from "react-router-dom";
import "../styles/layout/_creators.scss";
const Creators = (props) => {
  const list = props.datafiltered.map((creator) => {
    return (
      <li key={creator.id} className="listCreators__element">
        <h4 className="listCreators__element--text">{creator.name}</h4>
        <img src={creator.img} alt={creator.name} className="listCreators__element--img" />
        <div className="listCreators__element--div">
        <p className="listCreators__element--text">{creator.job}</p>
        <a href={creator.twitter} target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        </div>
      </li>
    );
  });
  return (
    <div className='creatorsContainer'>
      <header className="creators__header">
      <Link to="/">Atrás</Link>
        <h1 className="creators__header--title">Creadores</h1>
      </header>
      <main className="creators__main">
        <p>¡Somos 4 locos del rol al que se le ocurren ideas cortando patatas!</p>
        <ul className="listCreators">{list}</ul>
      </main>
    </div>
  );
};

export default Creators;
