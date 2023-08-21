import { useState } from "react";
import { recursos } from "../../mock/recursos.js";
import pagesPortafolio from "../../mock/pagesPortafolio.js";
import ItemCardProject from "./ItemCardProject";
import ItemCard from "./ItemCard";

export default function ItemCardContainer({ option, quantity }) {
  const [watchQuantity, setWatchQuantity] = useState(8);
  const STYLEGRIDCOLS = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
  };
  const options = {
    project: pagesPortafolio,
    resour: recursos,
  };
  return (
    <div className="containerItems flex-center-center">
      <div className={`containerItemsItem ${STYLEGRIDCOLS[quantity]}`}>
        {option !== "project" ? (
          <ItemCard resour={options[option]} watchQuantity={watchQuantity} />
        ) : (
          <ItemCardProject project={options[option]} />
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
