import React, { useContext, useState } from "react";
import { RestaurantContext } from "../../context/Context";
import AllRes from "../AllRes";
import { useParams } from "react-router-dom";

function ListReviews() {
  const { reviews, setReviews } = useContext(RestaurantContext);
  const { id } = useParams();
  useState(() => {
    const fetch = async () => {
      try {
        const fetchData = await AllRes.get(`/rev/${id}`);
        setReviews(fetchData.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  console.log(reviews);
  const mapEle = reviews.map((item) => {
    return (
      <div className="bg-indigo-500 text-slate-100 w-[400px] max-h-[350px] overflow-hidden px-3 py-2 rounded-lg">
        <div className="w-full flex justify-between items-center border-b-2 border-indigo-600 py-2">
          <p>{item.userName}</p> <p>Rating: {item.rating}</p>
        </div>
        <p className="text-wrap text-ellipsis">{item.comment}</p>
      </div>
    );
  });
  console.log(mapEle);
  return <div className="flex flex-wrap gap-6">{mapEle && mapEle}</div>;
}

export default ListReviews;
