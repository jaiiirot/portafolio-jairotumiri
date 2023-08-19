import React from "react";

export default function ItemCard({ name, descripcion, icon, link, option }) {
  return (
    <>
      <div
        className="containerItemsItem--item my-ff-text py-4 px-6"
        onClick={() => window.open(link, "_blank")}
      >
        <div className="gap-4 flex flex-col">
          <div className="flex-center gap-4">
            <img src={icon} alt={name} className="h-full" />
            <h5 className="my-ff-title text-md md:text-lg">{name}</h5>
          </div>
          <div>
            <p className="text-sm">{descripcion}</p>
          </div>
          <span className="btn containerItemsItem--btn">Usar Recurso ➤</span>
        </div>
      </div>
    </>
  );
}
