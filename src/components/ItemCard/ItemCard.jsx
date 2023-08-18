import React from "react";

export default function ItemCard({ name, descripcion, icon, link, option }) {
  return (
    <>
      <div className="resour-card w-full bg-[#1d232a] text-gray-400 h-full hover:bg-[#15191E] my-ff-text p-4 px-6">
        <div
          className="cursor-pointer gap-4 flex flex-col"
          onClick={() => window.open(link, "_blank")}
        >
          <div className="flex flex-center gap-1">
            <img src={icon} alt={name} className="h-full" />
            <h5 className=" text-gray-200 my-ff-title text-md md:text-lg">
              {name}
            </h5>
          </div>
          <div>
            <p className="text-sm">{descripcion}</p>
          </div>
          <span className="btn bg-[#ff0062] text-[#fff]">Usar Recurso ➤</span>
        </div>
      </div>
    </>
  );
}
