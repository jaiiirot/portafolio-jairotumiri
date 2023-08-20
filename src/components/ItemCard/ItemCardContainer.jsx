import { useState } from "react";
import { recursos } from "../../mock/recursos.js";
import pagesPortafolio from "../../mock/pagesPortafolio.js";
import ItemCardProject from "./ItemCardProject";
import ItemCard from "./ItemCard";

export default function ItemCardContainer({ option }) {
  const [watchQuantity, setWatchQuantity] = useState(8);
  const options = { project: pagesPortafolio, resour: recursos };
  const items = options[option];
  return (
    <div className="containerItems flex-center-center">
      <div className="containerItemsItem md:grid-cols-2">
        {option !== "project" ? (
          <ItemCard resour={items} watchQuantity={watchQuantity} />
        ) : (
          <ItemCardProject project={items} />
        )}
      </div>
      <span
        onClick={() => {
          setWatchQuantity(watchQuantity + 4);
        }}
        className="containerItemsBtn"
      >
        Ver mas
      </span>
    </div>
  );
}
