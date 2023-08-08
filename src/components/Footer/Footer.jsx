import { socialRed } from "../../mock/content";
export default function Footer() {
  return (
    <footer className="w-full bg-principal text-white h-[10vh]">
      <div className="w-max m-auto h-full flex-center-center gap-2">
        <span className="footer-title">Jairo Tumiri</span>
        <div className="flex-center">
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
