import jtf from "../../assets/home/logo.png";
import { NavLink } from "react-router-dom";
export default function NavBarMobile({ socialRed, pages }) {
  return (
    <div className="flex justify-between w-full md:w-max">
      <NavLink to={`/`} className="h-14">
        <img src={jtf} className="h-full" />
      </NavLink>

      <div className="relative flex-center-center flex-col md:hidden pl-4">
        <label className=" lg:hidden">
          <i className="fa-solid fa-bars"></i>
        </label>
        <ul>
          {pages.map((page, i) => (
            <li key={i}>
              <NavLink to={`${page.id}`}>{page.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
