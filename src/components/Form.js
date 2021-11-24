import { Link } from "react-router-dom";
import { useForm } from "@formspree/react";
import "../styles/layout/_form.scss";
const Form = (props) => {
    const [state, handleSubmit] = useForm("xoqygybv");
    if (state.succeeded) {
        return (
          <div>
            <p>¡Gracias! Te contestaremos lo antes posible </p>
            <Link to="/calendar">Volver a atrás</Link>
          </div>
        );
  }
  const creators = props.data.map((creator) => {
    return (
      <article className ="sectionCreators__element">
        <img src={creator.img} alt={creator.name} className ="sectionCreators__element--img" />
        <a href={creator.twitter} target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </article>
    );
  })
  return (
    <div className="sectionForm">
      <header className="headerForm">
        <Link to="/" className="headerForm__link">
          Volver a atrás
        </Link>
        <h1 className="headerForm__title">Formulario de contacto</h1>
      </header>
      <form onSubmit={handleSubmit} className="form">
        <label for="fullname" className="form__label">
          Nombre completo <span>* </span>
        </label>
        <input
          className="form__input"
          placeholder="Nombre..."
          type="text"
          id="fullname"
          name="fullname"
          required
        />
        <label for="email" className="form__label">
          Email <span>* </span>
        </label>
        <input
          className="form__input"
          placeholder="Email..."
          type="email"
          id="email"
          name="Email"
          required
        />
        <label for="message" className="form__label">
          Mensaje <span>* </span>
        </label>

        <textarea
          className="form__textarea"
          placeholder="¿Qué necesitas?"
          id="message"
          rows="10"
          cols="10"
          name="message"
          required
        ></textarea>
        <input
          type="submit"
          value="enviar"
          disabled={state.submitting}
          className="form__button"
        />
      </form>
      <section className="contact">
        <p>
          Si prefieres ponerte en contacto con nosotros por Twitter te dejamos
          aquí abajo nuestros perfiles
        </p>
        <div className ="sectionCreators">{creators}</div>
      </section>
    </div>
  );
};

export default Form;
