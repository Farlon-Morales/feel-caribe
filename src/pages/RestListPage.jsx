import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { BASE_URL } from "../config/api";

function RestListPage() {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    axios.get(BASE_URL + "/restaurants.json")
      .then((response) => {
        const restaurantsArray = response.data.toReversed();
        setRestaurants(restaurantsArray);
      })
      .catch((e) => console.log("Error", e));
  }, []);

  if (restaurants === null) {
    return <Loader />
  }

  return (
     <div>
    <h1>Number of restaurants: {restaurants.length}</h1>

    <div className="card-list">
      {restaurants.map((restaurant) => {
        return (
          <div className="card" key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>

            <Link to={`/restaurants/${restaurant.id}`}>
              <button>See Experiences</button>
            </Link>
          </div>
        );
      })}
    </div>
  </div>
);
}

export default RestListPage;