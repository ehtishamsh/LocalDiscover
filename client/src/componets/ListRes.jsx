import React, { useContext, useEffect, useState } from "react";
import { RestaurantContext } from "../context/Context";
import AllRestaurants from "./AllRes";
import { Link, useNavigate } from "react-router-dom";
import AllRes from "./AllRes";
function ListRes(props) {
  const navigate = useNavigate();
  const { restaurants, setRestaurant } = useContext(RestaurantContext);
  const [loading, setLoading] = useState(false);
  const [modal, setModel] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const fetchAllData = await AllRestaurants.get("/");
        setRestaurant(await fetchAllData.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setRestaurant]);

  function handleDelete(id, e) {
    const resID = id;
    const deleteData = async () => {
      try {
        const deleteRes = await AllRes.delete(`/${resID}`).then(async (res) => {
          const fetchData = await AllRes.get("/");
          setRestaurant(fetchData.data.data);
          setModel(false);
        });
      } catch (error) {
        console.log(error);
      }
    };
    deleteData();
  }
  const handleClick = (id, e) => {
    navigate(`/restaurant/${id}`);
  };

  const list = restaurants.map((item) => {
    return (
      <tr
        onClick={(e) => handleClick(item.id)}
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
            to={`restaurant/u/${item.id}`}
            className="px-4 py-[10px] text-center border-none text-yellow-900 bg-yellow-300  transition-colors duration-300 hover:bg-yellow-400 active:bg-yellow-500 rounded-md"
          >
            Update
          </Link>
          <button
            onClick={() => setModel(true)}
            className="px-4 py-[10px] text-center border-none text-red-900 bg-red-400 transition-colors duration-300 hover:bg-red-500 active:bg-red-600 rounded-md"
          >
            Remove
          </button>
          <div
            className={` min-w-screen h-screen animated fadeIn faster  transition-all duration-300 fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover ${
              modal === false ? "hidden" : ""
            } `}
            id="modal-id"
          >
            <div className="absolute bg-transparent backdrop-blur-sm opacity-80 inset-0 z-0"></div>
            <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
              <div className="">
                <div className="text-center p-5 flex-auto justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 flex items-center text-red-500 mx-auto"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="text-xl font-bold py-4 ">Are you sure?</h3>
                  <p className="text-sm text-gray-500 px-8">
                    Do you really want to delete your account? This process
                    cannot be undone
                  </p>
                </div>

                <div className="p-3  mt-2 text-center space-x-4 md:block">
                  <button
                    onClick={() => setModel(false)}
                    className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={(e) => handleDelete(item.id, e)}
                    className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  });
  return <tbody className="bg-gray-200">{list && list}</tbody>;
}

export default ListRes;
