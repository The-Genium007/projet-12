import { NavLink } from "react-router-dom";
// styles globaux importés via src/styles/main.scss
import IconYoga from "../assets/icons/Vector-1.svg";
import IconSwim from "../assets/icons/Vector-2.svg";
import IconBike from "../assets/icons/Vector-3.svg";
import IconGym from "../assets/icons/Vector-4.svg";

export default function SideBar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <NavLink to="/" className="btn" aria-label="Accueil">
          <img src={IconYoga} alt="Accueil" width={32} height={32} />
        </NavLink>
        <NavLink to="/" className="btn" aria-label="Accueil">
          <img src={IconSwim} alt="Accueil" width={32} height={32} />
        </NavLink>
        <NavLink to="/" className="btn" aria-label="Accueil">
          <img src={IconBike} alt="Accueil" width={32} height={32} />
        </NavLink>
        <NavLink to="/" className="btn" aria-label="Accueil">
          <img src={IconGym} alt="Accueil" width={32} height={32} />
        </NavLink>
  </nav>
  <p className="copiryght">Copiryght, SportSee 2020</p>
    </aside>
  );
}