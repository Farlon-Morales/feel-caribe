import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://feelcaribe-884fe-default-rtdb.europe-west1.firebasedatabase.app";

function RestaurantDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/restaurants/${id}.json`)
      .then((res) => {
        setRestaurant(res.data);
      })
      .catch((e) => console.log("Error loading restaurant:", e));
  }, [id]);

  if (!restaurant) return <p>Loading...</p>;

  return (
    <div className="restaurant-details">
      <h1>{restaurant.name}</h1>
      <p>Location: {restaurant.location?.country}, {restaurant.location?.city}</p>
      
    </div>
  );
}

export default RestaurantDetails;