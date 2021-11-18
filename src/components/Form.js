import { Link } from "react-router-dom";
import { useForm } from "@formspree/react";
import "../styles/layout/_form.scss";
const Form = () => {
    const [state, handleSubmit] = useForm("xoqygybv");
    if (state.succeeded) {
        return (
          <div>
            <p>¡Gracias! Te contestaremos lo antes posible </p>

            <Link to="/calendar">Volver a atrás</Link>
          </div>
        );
     }
  return (
    <>
      <header className="headerForm">
        <Link to="/calendar" className="headerForm__link">
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
        <div>
          <article>
            <img
              href="https://pbs.twimg.com/profile_images/1453367404713627650/VkrR6d6B_400x400.jpg"
              alt="imageAri "
            />
            <a
              href="https://twitter.com/arimagic"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </article>
          <article>
            <img href="https://pbs.twimg.com/profile_images/1372473722033037312/P7GG9uOA_400x400.jpg" alt="imageIrene" />
            <a
              href="https://twitter.com/Irenillab"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </article>
          <article>
            <img
              href="https://pbs.twimg.com/profile_images/1369391669041315849/ZcX18E1g_400x400.jpg"
              alt="imageJose"
            />
            <a
              href="https://twitter.com/RollAndRol_"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </article>
          <article>
            <img
              href="https://pbs.twimg.com/profile_images/1443155168263028737/y5caRrG9_400x400.jpg"
              alt="imageManu"
            />
            <a
              href="https://twitter.com/GarriManu"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </article>
        </div>
      </section>
    </>
  );
};

export default Form;
