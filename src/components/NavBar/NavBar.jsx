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
            <li key={i}>
              <NavLink className="header-menu-items" to={`${page.id}`}>
                {page.name}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              className="header-menu-items bg-[#ff0062] rounded-2xl shadow-2xl"
              href="https://drive.google.com/file/d/1q6iARAvzZaq2e91q64qzuxd8bRVClR0y/view?usp=sharing"
              target="_blank"
            >
              Descargar CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
