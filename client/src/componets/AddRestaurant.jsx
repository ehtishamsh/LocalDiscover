import React, { useContext, useState } from "react";
import AllRes from "./AllRes";
import { RestaurantContext } from "../context/Context";
import axios from "axios";

function AddRestaurant() {
  const { restaurants, setRestaurant } = useContext(RestaurantContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [select, setSelect] = useState("");
  function handleSubmit(e) {
    const insetDatas = async () => {
      try {
        const insetData = await AllRes.post("/", {
          name: name,
          price: select,
          location,
        }).then(async (res) => {
          try {
            const fetchNewData = await AllRes.get("/").then((response) => {
              setRestaurant(response.data.data);
            });
          } catch (error) {
            console.log(error);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    e.preventDefault();
    if (select === "- Price -") {
      alert("Please Select Price");
    } else {
      if (name === "" || location === "") {
        alert("Please fill out all inputs fields");
      } else {
        insetDatas();
      }
    }
  }

  return (
    <form className="w-full flex items-center  gap-8" onSubmit={handleSubmit}>
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Restaurants Name"
        className="w-full px-4 py-2 border-2 border-slate-950  rounded transition-colors hover:bg-slate-100 duration-300 outline-indigo-400"
      />
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        type="text"
        required
        placeholder="Location"
        className="w-full px-4 py-2 border-2 border-slate-950  rounded transition-colors hover:bg-slate-100 duration-300 outline-indigo-400"
      />
      <select
        name=""
        defaultChecked="select"
        value={select}
        onChange={(e) => setSelect(e.target.value)}
        className=" bg-white border px-7 py-[10px]  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-1/3"
      >
        <option id="select">- Price -</option>
        <option value="$">$</option>
        <option value="$$">$$</option>
        <option value="$$$">$$$</option>
      </select>
      <button className="px-7 py-[10px] text-center border-none text-slate-100 bg-indigo-400 transition-colors duration-300 hover:bg-indigo-500 active:bg-indigo-600 rounded">
        Add
      </button>
    </form>
  );
}

export default AddRestaurant;
