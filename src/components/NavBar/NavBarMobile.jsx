import { Button } from "@material-tailwind/react";
import jtf from "../../assets/jtF.svg";
import { NavLink } from "react-router-dom";
export default function NavBarMobile({ socialRed, pages }) {
  return (
    <div className="md:navbar-start flex justify-between w-full">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <i className="fa-solid fa-bars"></i>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-3"
        >
          {pages.map((page, i) => (
            <li key={i}>
              <NavLink to={`${page.id}`}>{page.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <NavLink to={`/`} className="btn btn-ghost normal-case text-xl f-full">
        <img src={jtf} className="h-full" />
      </NavLink>
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost md:hidden">
          <i className="fa-solid fa-share-from-square"></i>
        </label>
        <div
          tabIndex={0}
          className="menu menu-dm dropdown-content mt-3 z-[1] p-2 -translate-x-6 shadow bg-base-100 rounded-box w-min gap-2"
        >
          {socialRed.map((social, i) => {
            return (
              <a key={i} href={social.link} target="_blank">
                <Button className="text-sm bg-[#15191E] shadow-none">
                  <i className={social.icon}></i>
                </Button>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
