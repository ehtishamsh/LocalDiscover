import React, { useState, createContext } from "react";
export const restaurantContext = createContext();
export const ContextProvider = (props) => {
  const [restaurants, setRestaurant] = useState([]);
  return (
    <restaurantContext.Provider value={{ restaurants, setRestaurant }}>
      {props.children}
    </restaurantContext.Provider>
  );
};
