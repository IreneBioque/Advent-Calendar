import { Link } from "react-router-dom";
import "../styles/layout/_creators.scss";
const Creators = (props) => {
  const list = props.datafiltered.map((creator) => {
    return (
      <li key={creator.id}>
        <h4>{creator.name}</h4>
        <img src={creator.img} alt={creator.name} />
        <p>{creator.job}</p>
        <a href={creator.twitter} target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
    );
  });
  return (
    <>
      <header className="pHeader">
        <h1>Creadores del calendario de adviento rolero</h1>
        <Link to="/">Atrás</Link>
      </header>
      <main>
        <p>¡Somos 4 locos del rol al que se le ocurren ideas cortando patatas!</p>
        <ul>{list}</ul>
      </main>
    </>
  );
};

export default Creators;
