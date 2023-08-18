import { useState } from "react";
import { recursos } from "../../mock/recursos.js";
import ItemCard from "./ItemCard";

export default function ItemCardContainer() {
  const [watchQuantity, setWatchQuantity] = useState(8);

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <div className="sm:w-11/12 grid gap-4 mt-8 p-2 sm:grid-cols-2 lg:grid-cols-3">
        {recursos.map((e, i) => {
          if (i < watchQuantity)
            return (
              <div key={i} className="h-full">
                <ItemCard
                  name={e.name}
                  descripcion={e.descripcion}
                  icon={e.icon}
                  link={e.link}
                />
              </div>
            );
        })}
      </div>
      <span
        onClick={() => {
          setWatchQuantity(watchQuantity + 4);
        }}
        className="px-4 py-2 my-4 bg-[#292d32]  hover:bg-[#15191E] cursor-pointer text-white rounded-md"
      >
        Ver mas
      </span>
    </div>
  );
}
