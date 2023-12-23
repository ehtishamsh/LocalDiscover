import React from "react";
import ListRes from "./ListRes";
import AddRestaurant from "./AddRestaurant";

function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-4/5 flex justify-center flex-col gap-7 items-center">
        <h1 className="text-3xl font-bold text-slate-500">Add Restaurant</h1>
        <AddRestaurant />
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
          <ListRes />
        </table>
      </div>
    </div>
  );
}

export default Home;
