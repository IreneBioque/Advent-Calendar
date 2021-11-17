import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <>
      <p>Bienvenido al calendario rolero</p>
      <Link to="/calendar">
        <button>Ir al calendario</button>
      </Link>
    </>
  );
};

export default Landing;
