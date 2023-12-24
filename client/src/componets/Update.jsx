import React, { useContext, useEffect, useState } from "react";
import { RestaurantContext } from "../context/Context";
import axios from "axios";
import AllRes from "./AllRes";
import { Link, useParams } from "react-router-dom";

function Update() {
  const { restaurants, setRestaurant } = useContext(RestaurantContext);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [select, setSelect] = useState("");
  const [show, setShow] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const insertNewData = async () => {
      try {
        const insetData = await AllRes.put(`/${id}`, {
          name: name,
          price: select,
          location,
        }).then(async (res) => {
          try {
            const fetchNewData = await AllRes.get("/").then((response) => {
              setRestaurant(response.data.data);
              alert("Data Updated");
              setShow(true);
            });
          } catch (error) {
            console.log(error);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (select === "- Price -" || select === "") {
      alert("Please Select Price");
    } else {
      if (name === "" || location === "") {
        alert("Please fill out all inputs fields");
      } else {
        insertNewData();
      }
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetch = await AllRes.get(`/${id}`);
        const data = fetch.data.data[0];
        setName(data.restaurant_name);
        setLocation(data.location);
        setSelect(data.price);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-[calc(100vh-129px)] flex justify-center items-center">
      <form
        action=""
        onSubmit={(e) => handleSubmit(e)}
        className="flex justify-center items-center flex-col gap-9 w-3/4"
      >
        <h1 className="text-3xl font-bold text-slate-500">Name:</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border-2 border-slate-950  bg-slate-50 rounded transition-colors hover:bg-slate-100 duration-300 outline-indigo-400"
        />
        <h1 className="text-3xl font-bold text-slate-500">Location:</h1>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          className="w-full px-4 py-2 border-2 border-slate-950  bg-slate-50 rounded transition-colors hover:bg-slate-100 duration-300 outline-indigo-400"
        />
        <select
          name=""
          value={select}
          onChange={(e) => setSelect(e.target.value)}
          className=" bg-white border px-7 py-[10px]  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-1/3"
        >
          <option value="">- Price -</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
        </select>
        <button className="px-7 py-[10px] text-center mt-28 w-full border-none text-slate-100 bg-indigo-400 transition-colors duration-300 hover:bg-indigo-500 active:bg-indigo-600 rounded">
          Update
        </button>
        {show ? (
          <Link
            to="/"
            className="px-7 py-[10px] text-center w-full border-none text-slate-100 bg-red-400 transition-colors duration-300 hover:bg-red-500 active:bg-red-600 rounded"
          >
            Go Back
          </Link>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default Update;
