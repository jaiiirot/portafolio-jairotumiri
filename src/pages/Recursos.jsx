import ItemCardContainer from "../components/ItemCard/ItemCardContainer";

export default function Recursos() {
  return (
    <div className="py-3">
      <div className="w-full flex items-center justify-center">
        <input
          type="text"
          placeholder="Example: Icon"
          className="input input-bordered w-full max-w-lg"
        />
      </div>
      <div>
        <ItemCardContainer />
      </div>
    </div>
  );
}
