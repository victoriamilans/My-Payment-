import logo from "../assets/logo.png";
import "./style.css";

export function Header({ isLogged }) {
  return (
    <header className="header">
      <nav>
        <img src={logo} alt="Logo" className="logo--home"/>
        <button onClick={isLogged}>Inicio</button>
      </nav>
    </header>
  );
}
