import NavBarMobile from "./NavBarMobile";
import { pages, socialRed } from "../../mock/content";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="header md:px-6 lg:px-16 flex-center">
        <NavBarMobile socialRed={socialRed} pages={pages} />

        <ul className="header-menu hidden md:flex">
          {pages.map((page, i) => (
            <li key={i} className="header-menu-items">
              <NavLink to={`${page.id}`}>{page.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
