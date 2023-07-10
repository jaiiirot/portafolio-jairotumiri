import jt from "../../assets/jtf.svg";
import { socialRed } from "../../mock/content";
export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral bg-principal text-white">
      <div className="" >
        <img src={jt} className="fill-current w-20" />
        <p>
          Jhon Jairo Tumiri
          <br />
          Desarrollo Full-Stack
        </p>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-1 md:gap-4">
          {socialRed.map((social, i) => {
            return (
              <a key={i} href={social.link} target="_blank">
                <span className={social.style}>
                  <i className={social.icon}></i>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
