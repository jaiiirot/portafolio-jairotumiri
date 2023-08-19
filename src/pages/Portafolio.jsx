// import { useEffect, useState } from "react";
import { skill } from "../mock/content";
export default function Portafolio() {
  return (
    <>
      <section className="">
        {skill.map((e, i) => {
          return (
            <a
              href={e.a}
              key={i}
              className="my-skills rounded-full"
              style={{ background: e.style }}
              target="_blanck"
            >
              {/* <img
                src={e.icon}
                alt="iconos de las tecnologias que usa la pagina"
              /> */}
              <p>{e.name}</p>
            </a>
          );
        })}
      </section>
    </>
  );
}
