import React, { useState, useEffect } from 'react';
import axios from "axios";

const BASE_URL = "https://feelcaribe-884fe-default-rtdb.europe-west1.firebasedatabase.app";

function ListRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL + "/restaurants.json")
      .then((response) => {
        const restaurantsObject = response.data;
        
        const restaurantsArr = Object.keys(restaurantsObject).map((id) => ({
          id,
          ...restaurantsObject[id],
        }));

        console.log(restaurantsArr);
        setRestaurants(restaurantsArr);
      })
      .catch((e) => console.log("Error", e));
  }, []);

  return (
    <div className="ListRestaurants-page">
      <h1>This is the List of Restaurants</h1>
      <ul>
        {restaurants.map((r) => (
          <li key={r.id}>
            <strong>{r.name}</strong> — {r.location?.city}, {r.location?.country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListRestaurants;
