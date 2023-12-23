import React, { useState, createContext } from "react";
export const RestaurantContext = createContext();
export const ContextProvider = (props) => {
  const [restaurants, setRestaurant] = useState([]);
  return (
    <RestaurantContext.Provider value={{ restaurants, setRestaurant }}>
      {props.children}
    </RestaurantContext.Provider>
  );
};
