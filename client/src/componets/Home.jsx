import React from "react";
import Addres from "./AddRestaurant";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-4/5 flex justify-center flex-col gap-7 items-center">
        <h1 className="text-3xl font-bold text-slate-500">Add Restaurant</h1>
        <Addres />

        <h1 className="text-3xl font-bold text-slate-500">
          List of Restaurants
        </h1>
        <table className="w-full table-auto">
          <thead className="justify-between  border-4 border-indigo-500">
            <tr className="bg-indigo-500">
              <th className="px-16 py-2 text-center">
                <span className="text-slate-100">Restaurants</span>
              </th>
              <th className="px-16 py-2 text-center">
                <span className="text-slate-100">Location</span>
              </th>
              <th className="px-16 py-2 text-center">
                <span className="text-slate-100">Price Range</span>
              </th>

              <th className="px-16 py-2 text-center">
                <span className="text-slate-100">Rating</span>
              </th>

              <th className="px-16 py-2 text-center">
                <span className="text-slate-100">Operation</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-200">
            <tr className="bg-white border-4 border-gray-200 hover:bg-gray-200 transition-all duration-300">
              <td className="px-16 py-2 text-center">
                <span className="text-center font-semibold">Dean Lynch</span>
              </td>
              <td className="px-16 py-2 text-center">
                <span>New York</span>
              </td>
              <td className="px-16 py-2 text-center">
                <span>$$$</span>
              </td>
              <td className="px-16 py-2 text-center">
                <span>10:00</span>
              </td>

              <td className="px-16 py-2 text-center w-full flex justify-center items-center gap-4">
                <Link
                  to={`/restaurant/u/${3}`}
                  className="px-4 py-[10px] text-center border-none text-yellow-900 bg-yellow-300  transition-colors duration-300 hover:bg-yellow-400 active:bg-yellow-500 rounded-md"
                >
                  Update
                </Link>
                <button className="px-4 py-[10px] text-center border-none text-red-900 bg-red-400 transition-colors duration-300 hover:bg-red-500 active:bg-red-600 rounded-md">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
