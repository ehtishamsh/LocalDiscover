import React from "react";

function AddRestaurant() {
  return (
    <div className="w-full flex items-center  gap-8">
      <input
        type="text"
        placeholder="Restaurants Name"
        className="w-full px-4 py-2 border-2 border-slate-950  rounded transition-colors hover:bg-slate-100 duration-300 outline-indigo-400"
      />
      <input
        type="text"
        placeholder="Location"
        className="w-full px-4 py-2 border-2 border-slate-950  rounded transition-colors hover:bg-slate-100 duration-300 outline-indigo-400"
      />
      <select
        name=""
        defaultChecked="select"
        className=" bg-white border px-7 py-[10px]  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-1/3"
      >
        <option id="select">- Price -</option>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
      </select>
      <button className="px-7 py-[10px] text-center border-none text-slate-100 bg-indigo-400 transition-colors duration-300 hover:bg-indigo-500 active:bg-indigo-600 rounded">
        Add
      </button>
    </div>
  );
}

export default AddRestaurant;
