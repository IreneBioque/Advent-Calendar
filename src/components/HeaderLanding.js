import { Link } from "react-router-dom";

const HeaderLanding = () => {
  return (
    <>
      <h1>Calendario rolero</h1>
      <ul>
        <li>
          <Link>Participantes</Link>
        </li>
        <li>
          <Link>Creadores</Link>
        </li>
      </ul>
    </>
  );
};

export default HeaderLanding;
