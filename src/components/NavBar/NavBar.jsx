import NavBarMobile from "./NavBarMobile";
import { pages } from "../../mock/content";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex-center-center">
      <div className="header flex-center px-4 w-full sm:w-8/12">
        <NavBarMobile pages={pages} />

        <ul className="header-menu hidden md:flex">
          {pages.map((page, i) => (
            <li key={i} className="header-menu-items">
              <NavLink to={`${page.id}`}>{page.name}</NavLink>
            </li>
          ))}
          <li className="header-menu-items">
            <a
              href="../../assets/docs/CV - Jhon Jairo Tumiri.pdf"
              download="CV-Jhon-Jairo-Tumiri.pdf"
              className=""
            >
              Descargar CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
