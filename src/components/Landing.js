import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <h2>Bienvenido al calendario rolero</h2>
      <Link to="/calendar">
        <button>Ir al calendario</button>
      </Link>


    </>
  );
};

export default Landing;
