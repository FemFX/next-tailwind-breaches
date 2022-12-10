import React from "react";
import borabora from "../assets/borabora.jpg";
import borabora2 from "../assets/borabora2.jpg";
import maldives from "../assets/maldives.jpg";
import maldives2 from "../assets/maldives2.jpg";
import maldives3 from "../assets/maldives3.jpg";
import keywest from "../assets/keywest.jpg";
import SelectCard from "./SelectCard";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectCard bg={borabora} text="Borabora" />
      <SelectCard bg={borabora2} text="Borabora" />
      <SelectCard bg={maldives} text="Maldives" />
      <SelectCard bg={maldives2} text="Maldives" />
      <SelectCard bg={maldives3} text="Maldives" />
      <SelectCard bg={keywest} text="Keywest" />
    </div>
  );
};

export default Selects;
