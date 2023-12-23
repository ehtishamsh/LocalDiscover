import React, { useContext, useEffect } from "react";
import { RestaurantContext } from "../context/Context";
import AllRestaurants from "./AllRes";
import { Link } from "react-router-dom";
function ListRes(props) {
  const { restaurants, setRestaurant } = useContext(RestaurantContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchAllData = await AllRestaurants.get("/");
        setRestaurant(await fetchAllData.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setRestaurant]);

  const list = restaurants.map((item) => {
    return (
      <tr
        key={item.id}
        className="bg-white border-4 border-gray-200 hover:bg-gray-200 transition-all duration-300"
      >
        <td className="px-16 py-2 text-center">
          <span className="text-center font-semibold">
            {item.restaurant_name}
          </span>
        </td>
        <td className="px-16 py-2 text-center">
          <span>{item.location}</span>
        </td>
        <td className="px-16 py-2 text-center">
          <span>{item.price}</span>
        </td>
        <td className="px-16 py-2 text-center">
          <span>10:00</span>
        </td>

        <td className="px-16 py-2 text-center w-full flex justify-center items-center gap-4">
          <Link
            to={`/restaurant/u/${item.id}`}
            className="px-4 py-[10px] text-center border-none text-yellow-900 bg-yellow-300  transition-colors duration-300 hover:bg-yellow-400 active:bg-yellow-500 rounded-md"
          >
            Update
          </Link>
          <button className="px-4 py-[10px] text-center border-none text-red-900 bg-red-400 transition-colors duration-300 hover:bg-red-500 active:bg-red-600 rounded-md">
            Remove
          </button>
        </td>
      </tr>
    );
  });
  return <tbody className="bg-gray-200">{list}</tbody>;
}

export default ListRes;
