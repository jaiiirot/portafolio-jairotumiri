// import { useEffect, useState } from "react";
import PersonGif from "../assets/img/person.gif";
import Perfil from "../assets/img/perfil.jpeg";
import { socialRed, skill } from "../mock/content";
import ItemCardContainer from "../components/ItemCard/ItemCardContainer";
export default function Home() {
  const noSkills = ["MongoDB", "Java", "C++", "MySQL", "PHP"];
  const Skills = skill.map((e) => {
    if (e.name !== noSkills.find((a) => a === e.name)) return e;
  });

  return (
    <>
      <section className="home__present">
        <div className="home__presentInfo">
          <div className="home__presentInfoTitle">
            <h1>Jhon Jairo Tumiri</h1>
            <h3>
              Desarrollador
              <br />
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
                    className={`${social.style}flex-center-center`}
                  >
                    <i className={social.icon}></i>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <picture className="home__presentPerfil">
          <img src={Perfil} alt="gif-person-programer" />
        </picture>
      </section>
      <section className="home__skills">
        <h2>
          <span className="totem">➤</span>Mis Skills
        </h2>
        <div className="home__skillsAside flex">
          <picture className="home__skillsAsideGif">
            <img src={PersonGif} alt="gif-person-programer" />
          </picture>
          <div className="home__skillsAsideItems">
            {Skills.map((e) => {
              /* codicion / escape */
              if (e === undefined) return;
              return (
                <div key={e.name} className="home__skillsAsideItems--item">
                  <h4 className="text-xs">{e.name}</h4>
                  <img src={e.icon} alt={`icon-${e.name}`} className="h-12" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="home__proyect">
        <h2>
          <span className="totem">➤</span> Proyectos
        </h2>
        <article className="home__proyectItems">
          <div className="home__proyectItemsItem">
            <ItemCardContainer option="project" quantity={2} />
          </div>
        </article>
      </section>
    </>
  );
}

/* SLCX => paquete conprueba true false */
/* 
funcional programing
mutar un dato de useState
manejar bien los hooks
*/
