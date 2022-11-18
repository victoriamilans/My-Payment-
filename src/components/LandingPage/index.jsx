import React from "react";
import "../../App.css";
import "./style.css";
import logo from "../assets/logo.png";
import image from "../assets/image.svg";

function LandingPage({ isLogged }) {
  return (
    <div className="container">
      <section className="column--left">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Centralize o controle das suas finanças</h1>
        <span>de forma rápida e segura</span>
        <button onClick={isLogged}>Iniciar</button>
      </section>

      <section className="column--right">
        <img src={image} alt="Componentes" className="components" />
      </section>
    </div>
  );
}
export default LandingPage;
