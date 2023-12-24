import React, { useContext, useState } from "react";

import { useParams } from "react-router-dom";
import AllRes from "../AllRes";
import { RestaurantContext } from "../../context/Context";

function Addreview() {
  const { reviews, setReviews } = useContext(RestaurantContext);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  function handleSubmit(e) {
    const insetDatas = async () => {
      try {
        const insetData = await AllRes.post(`/rev/${id}`, {
          username: name,
          rating: rating,
          comment: comment,
          reviews_date: formattedDate,
        }).then(async (res) => {
          try {
            const fetchData = await AllRes.get(`/rev/${id}`);
            setReviews(fetchData.data.data);
          } catch (error) {
            console.log(error);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    e.preventDefault();

    if (name === "" || comment === "") {
      alert("Please fill out all inputs fields");
    } else {
      insetDatas();
      setName("");
      setComment("");
    }
  }

  return (
    <form
      className="w-full flex items-center  flex-col gap-8"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full px-4 py-2 border-2 border-slate-950  rounded transition-colors hover:bg-slate-100 duration-300 outline-indigo-400"
      />
      <input
        type="text"
        required
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Review"
        className="w-full px-4 py-2 border-2 border-slate-950  rounded transition-colors hover:bg-slate-100 duration-300 outline-indigo-400"
      />
      <input
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        type="number"
        min={1}
        max={5}
        required
        placeholder="Location"
        className="w-full px-4 py-2 border-2 border-slate-950  rounded transition-colors hover:bg-slate-100 duration-300 outline-indigo-400"
      />

      <button className="px-7 py-[10px] text-center border-none text-slate-100 bg-indigo-400 transition-colors duration-300 hover:bg-indigo-500 active:bg-indigo-600 rounded">
        Add
      </button>
    </form>
  );
}

export default Addreview;
