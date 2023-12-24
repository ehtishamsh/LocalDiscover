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
  const mapEle =
    reviews.length > 0
      ? reviews.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-indigo-500 text-slate-100 overflow-hidden px-3 py-2 rounded-lg h-[250px]"
            >
              <div className="w-full flex justify-between items-center border-b-2 border-indigo-600 py-2">
                <p>{item.username}</p> <p>Rating: {item.rating}</p>
              </div>
              <p className="text-wrap text-ellipsis">{item.comment}</p>
            </div>
          );
        })
      : "";
  return (
    <div className="gap grid grid-cols-[repeat(_3,_minmax(_auto,_1fr))] w-full gap-14">
      {mapEle && mapEle}
    </div>
  );
}

export default ListReviews;
