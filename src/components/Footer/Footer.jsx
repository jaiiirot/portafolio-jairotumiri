import { socialRed } from "../../mock/content";
export default function Footer() {
  return (
    <footer className="w-full text-white h-12 flex-center-center">
      <div className="flex-center-center gap-4">
        {socialRed.map((social, i) => {
          return (
            <a
              key={i}
              href={social.link}
              target="_blank"
              className={`${social.style} flex-center-center`}
            >
              <i className={social.icon}></i>
            </a>
          );
        })}
      </div>
    </footer>
  );
}
