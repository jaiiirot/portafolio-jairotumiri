// import { useEffect, useState } from "react";
import { skill } from "../mock/content";
export default function Portafolio() {
  // const [proyect, setProyect] = useState([]);

  /*   useEffect(() => {
    const showProyect = async () => {
      const response = await fetch(
        "https://api.github.com/users/jairo-tumiri/repos"
      );
      const data = await response.json();
      setProyect(data);
    };
    showProyect();
  }, []);
  proyect.map((data) => {
    if (data.name != "portafolio-jairotumiri") console.log(data.name);
  }); */

  return (
    <div>
      <div className="">
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
      </div>
    </div>
  );
}
