import ItemCardContainer from "../components/ItemCard/ItemCardContainer";

export default function Portafolio() {
  return (
    <>
      <section className="max-w-[768px]">
        <ItemCardContainer option="project" quantity={3} />
      </section>
    </>
  );
}
