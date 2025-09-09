import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo-4.png";
// styles globaux importés via src/styles/main.scss

export default function Menu() {
  return (
    <header>
      <img src={logo} alt="Logo rouge SportSee" />
      <nav>
        <NavLink to="/user">Accueil</NavLink>
        <NavLink to="/profil">Profil</NavLink>
        <NavLink to="/reglage">Réglage</NavLink>
        <NavLink to="/communaute">Communauté</NavLink>
      </nav>
    </header>
  );
}