import ItemCardContainer from "../components/ItemCard/ItemCardContainer";

export default function Recursos() {
  return (
    <>
      <section className="recursos__items py-3">
        <div className="recursos__itemsSearch flex-center-center">
          <h2>
            <span className="totem">➤</span>RECURSOS
          </h2>
          <p>
            Si viste en mis Proyectos herramientas que te gustaron o algo
            parecido, aca abajo te dejo las herramientas que uso usualmente 🙂.
          </p>
          <input type="search" placeholder="Ejemplo: Icons" />
        </div>
        <div className="recursos__itemsItem">
          <ItemCardContainer option="recursos" />
        </div>
      </section>
    </>
  );
}
