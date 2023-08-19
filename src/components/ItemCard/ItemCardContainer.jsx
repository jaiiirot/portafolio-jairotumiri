import { useState } from "react";
import { recursos } from "../../mock/recursos.js";
import ItemCard from "./ItemCard";

export default function ItemCardContainer() {
  const [watchQuantity, setWatchQuantity] = useState(8);

  return (
    <div className="containerItems flex-center-center">
      <div className="containerItemsItem md:grid-cols-2">
        {recursos.map((e, i) => {
          if (i < watchQuantity)
            return (
              <ItemCard
                key={i}
                name={e.name}
                descripcion={e.descripcion}
                icon={e.icon}
                link={e.link}
              />
            );
        })}
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
