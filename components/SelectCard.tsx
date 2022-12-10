import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

interface ISelectCardProps {
  bg: StaticImageData;
  text: string;
}

const SelectCard: FC<ISelectCardProps> = ({ bg, text }) => {
  return (
    <div className="relative">
      <Image className="object-cover w-full h-full" src={bg} alt="img" />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-4 text-xl text-white absolute">{text}</p>
      </div>
    </div>
  );
};

export default SelectCard;
