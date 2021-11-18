import { Link } from "react-router-dom";
import HeaderLanding from "./HeaderLanding";

const Landing = () => {
  return (
    <>
      <HeaderLanding/>
      <h1>Bienvenido al calendario rolero</h1>
      <Link to="/calendar">
        <button>Ir al calendario</button>
      </Link>


    </>
  );
};

export default Landing;
