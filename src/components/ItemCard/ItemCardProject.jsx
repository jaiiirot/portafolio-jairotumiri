import { skill } from "../../mock/content";
export default function ItemCardProject({ project }) {
  return (
    <>
      {project.map((element, i) => {
        const { img, name, link, skills, github } = element;
        const contSkill = skills.split(",");
        return (
          <div key={`${i}-${name}`} className="item-card-project">
            <div className="item-card-project-relative">
              <picture className="item-card-project-img">
                <img src={img} />
              </picture>
              <span className="flex-center-center flex-col">
                <h4>{name}</h4>
                <div className="flex-center-center">
                  {skill.map((ico, i) => {
                    if (
                      ico.name ===
                      contSkill.find((desIco) => desIco === ico.name)
                    )
                      return (
                        <a
                          key={i}
                          className="my-skills rounded-full"
                          style={{ background: ico.style }}
                          target="_blanck"
                        >
                          <p>{ico.name}</p>
                        </a>
                      );
                  })}
                </div>
              </span>
            </div>
            <div className="item-card-project-option flex-center-center gap-12">
              <a href={github} target="_blanck">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href={link} target="_blanck">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}
