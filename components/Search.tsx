import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2 className="uppercase">
            luxury included vacations for two people
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            aliquid, qui molestiae suscipit voluptatibus nesciunt consequatur.
            Error explicabo alias sint ratione harum, quos sunt natus quod
            consequatur, temporibus laboriosam placeat. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sit aliquid, qui molestiae
            suscipit voluptatibus nesciunt consequatur. Error explicabo alias
            sint ratione harum, quos sunt natus quod consequatur, temporibus
            laboriosam placeat.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={20} />
            </button>
            <div>
              <h3 className="uppercase py-2">leading service</h3>
              <p className="uppercase py-1">
                all-inclusive company for 20 years in-a-row
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={20} />
            </button>
            <div>
              <h3 className="uppercase py-2">leading service</h3>
              <p className="uppercase py-1">
                all-inclusive company for 20 years in-a-row
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center">
          <p className="uppercase pt-2">get an additional 10% off</p>
          <p className="uppercase py-4">12 hours left</p>
          <p className="uppercase bg-gray-800 text-gray-200 py-2">
            book now and save
          </p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Grande Antigua</option>
              <option>Grande Antigua</option>
              <option>Grande Antigua</option>
              <option>Grande Antigua</option>
            </select>
          </div>
          <div className="flex flex-col my-2">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full my-4 ">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
