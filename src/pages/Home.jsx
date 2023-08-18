import { useEffect, useState } from "react";
import { socialRed } from "../mock/content";
export default function Home() {
  const [perfil, setPerfil] = useState([]);

  useEffect(() => {
    const showPerfil = async () => {
      const response = await fetch("https://api.github.com/users/jairo-tumiri");
      const data = await response.json();
      setPerfil(data);
    };
    showPerfil();
  }, []);

  console.log(perfil);
  return (
    <main className="home flex-center-center">
      <section className="home__present md:w-8/12 flex-center-center">
        <div className="home__presentInfo">
          <div className="home__presentInfoTitle">
            <h2>Hola, soy </h2>
            <h1>Jhon Jairo Tumiri</h1>
            <h3>
              Soy desarrollador web
              <span className="text-[#ff0062]"> Front-End</span>
            </h3>
          </div>
          <div className="home__presentInfoText">
            <p>
              Tengo experiencia en entornos colaborativos, el uso de
              metodologías y herramientas para respaldar cada proyecto.
            </p>
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
          </div>
        </div>
        <picture className="home__presentGif">
          <img
            src="https://i.pinimg.com/originals/09/c6/29/09c62903beeba336dc9da76eb5c9a107.gif"
            alt="gif person-programer"
          />
        </picture>
      </section>
      <section className="home__proyect md:w-8/12">
        <h2>
          <span>➤</span> PROYECTOS
        </h2>
        <article className="home__proyectItems">
          
            

          {/* {proyect?.map((e) => (
            <>
              <p>Title</p>
            </>
          ))} */}
        </article>
      </section>
    </main>
  );
}
