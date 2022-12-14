import React from "react";
import dynamic from "next/dynamic";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={require("../assets/beachVid.mp4")}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white p-4">
        <h1>First Class Travel</h1>
        <h2 className="py-3">Top 1% Locations Worldwide</h2>
        <form className="md:flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
          <div>
            <input
              className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none"
              type="text"
              placeholder="Search Destinations"
            />
          </div>
          <div>
            <button className="hidden md:block ">
              <AiOutlineSearch color="white" className="icon " size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
