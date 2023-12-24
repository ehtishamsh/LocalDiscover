import React, { useState, createContext } from "react";
export const RestaurantContext = createContext();
export const ContextProvider = (props) => {
  const [restaurants, setRestaurant] = useState([]);
  const [reviews, setReviews] = useState([]);
  return (
    <RestaurantContext.Provider
      value={{ restaurants, setRestaurant, reviews, setReviews }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};
