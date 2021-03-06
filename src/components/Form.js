import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "@formspree/react";
import "../styles/layout/_form.scss";
import mainImage from '../images/logo-calendario.png';
import thanks from '../images/thanks.png'

const Form = (props) => {
    const [state, handleSubmit] = useForm("xoqygybv");
    if (state.succeeded) {
        return (
          <div className="sectionThanks">
            <p className="sectionThanks__paragraph">
              ¡Gracias! Te contestaremos lo antes posible{" "}
            </p>
            <img
              src={thanks}
              title="thanksimage"
              alt="thanksimage"
              className="sectionThanks__img"
            />
            <Link to="/calendar">
              <button className="sectionThanks__button">Volver atrás</button>
            </Link>
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
        <div className='logoContainer'>
        <img src={mainImage} alt='Logo del calendario para volver a la página inicial' />
      </div>
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
          value="Enviar"
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
