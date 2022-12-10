/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import borabora from "../assets/borabora.jpg";
import borabora2 from "../assets/borabora2.jpg";
import maldives from "../assets/maldives.jpg";
import maldives2 from "../assets/maldives2.jpg";
import keywest from "../assets/keywest.jpg";

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 flex flex-col justify-center items-center">
      <h1>All-Inclusive Resorts</h1>
      <p className="py-4">On the Caribbean's Best Beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <Image
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={borabora}
          alt="image"
        />
        <Image
          className="w-full h-full object-cover"
          src={borabora2}
          alt="image"
        />
        <Image
          className="w-full h-full object-cover"
          src={maldives}
          alt="image"
        />
        <Image
          className="w-full h-full object-cover"
          src={maldives2}
          alt="image"
        />
        <Image
          className="w-full h-full object-cover"
          src={keywest}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Destinations;
