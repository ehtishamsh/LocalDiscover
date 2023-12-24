import React, { useEffect, useState } from "react";
import AllRes from "./AllRes";
import { useParams } from "react-router-dom";
import ListReviews from "./reviews/ListReviews";
import Addreview from "./reviews/Addreview";

function Details() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetch = async () => {
      try {
        const getData = await AllRes.get(`/${id}`);
        setData(getData.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="flex justify-center h-full w-full items-center">
      <div className="flex flex-col gap-7 w-3/4 justify-center items-center">
        <h1 className="text-5xl text-slate-100 font-bold mb-7">
          {data.length > 0 && data[0].restaurant_name}
        </h1>
        <ListReviews />
        <Addreview />
      </div>
    </div>
  );
}

export default Details;
