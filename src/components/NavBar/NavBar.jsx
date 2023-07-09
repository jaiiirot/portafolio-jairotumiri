import { Button } from "@material-tailwind/react";
import NavBarMobile from "./NavBarMobile";
import { pages, socialRed } from "../../mock/content";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="navbar bg-base-300 md:px-6 lg:px-16 bg-principal text-white">
        <NavBarMobile socialRed={socialRed} pages={pages} />

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {pages.map((page, i) => (
              <li key={i} className="my-menu-hover">
                <NavLink to={`${page.id}`}>{page.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end md:flex md:gap-1 hidden">
          {socialRed.map((social, i) => {
            return (
              <a key={i} href={social.link} target="_blank">
                <Button className={social.style}>
                  <i className={social.icon}></i>
                </Button>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
