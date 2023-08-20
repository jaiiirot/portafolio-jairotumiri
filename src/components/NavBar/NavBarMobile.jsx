import { useState } from "react";
import jtf from "../../assets/home/logo.png";
import { NavLink } from "react-router-dom";
export default function NavBarMobile({ pages }) {
  const [active, setActive] = useState(false);
  const handClick = () => {
    setActive(!active);
  };
  return (
    <div className="flex justify-between w-full md:w-max">
      <NavLink to={`/`} className="">
        <img src={jtf} className="header-img" />
      </NavLink>

      <div className="flex-center-center flex-col md:hidden pl-4">
        <span className="z-[100] lg:hidden" onClick={handClick}>
          <i
            className={`fa-solid ${active ? "fa-xmark" : "fa-bars"} text-2xl`}
          ></i>
        </span>
        <div
          className={`absolute default-menu ${active ? "on-menu" : "off-menu"}`}
        >
          <ul>
            {pages.map((page, i) => (
              <li key={i}>
                <NavLink to={`${page.id}`} onClick={handClick}>
                  <span className="totem">➤</span>
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
      </div>
    </div>
  );
}
