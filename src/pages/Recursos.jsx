import ItemCardContainer from "../components/ItemCard/ItemCardContainer";

export default function Recursos() {
  return (
    <article className="recursos">
      <div className="py-3">
        <div className="w-full flex items-center justify-center">
          <input
            type="text"
            placeholder="Example: Icon"
            className=" w-full max-w-lg text-white"
          />
        </div>
        <div>
          <ItemCardContainer option="recursos" />
        </div>
      </div>
    </article>
  );
}
