import { useState, useEffect } from "react";
import { recursos } from "../../mock/recursos.js";
import ItemCard from "./ItemCard";

export default function ItemCardContainer() {
  const [source, setSource] = useState([]);

  const showSource = async () => {
    const response = await recursos;
    const sour = await response;
    setSource(sour);
  };

  useEffect(() => {
    showSource();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="sm:w-11/12 grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        {source.map((e, i) => {
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
    </div>
  );
}
