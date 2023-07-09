import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React from "react";

export default function ItemCard({ name, descripcion, icon, link }) {
  return (
    <>
      <Card className="w-full bg-[#292d32] text-gray-400 h-full hover:bg-[#15191E] my-ff-text">
        <div
        className="cursor-pointer"
          onClick={() => window.open(link, "_blank")}
        >
          <CardBody>
            <img src={icon} alt={name} className="pb-2" />
            <Typography variant="h5" className=" text-gray-200 my-ff-title text-md md:text-lg">
              {name}
            </Typography>
            <Typography>{descripcion}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href={link} className="inline-block" target="_blank">
              <Button
                size="sm"
                variant="text"
                className="flex items-center"
              >
                Usar Recurso
              </Button>
            </a>
          </CardFooter>
        </div>
      </Card>
    </>
  );
}
