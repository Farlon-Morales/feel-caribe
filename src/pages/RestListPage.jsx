import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config/api";
import Loader from "../components/Loader";
import RestaurantCard from "../components/RestaurantCard"; 

function RestListPage() {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    axios
      .get(BASE_URL + "/restaurants.json")
      .then((response) => {
        const data = response.data;

        if (!data) {
          setRestaurants([]);
          return;
        }

        const restaurantsArray = Object.entries(data).map(([id, rest]) => ({
          id,
          ...rest,
        })).reverse();

        setRestaurants(restaurantsArray);
      })
      .catch((e) => console.log("Error fetching restaurants:", e));
  }, []);

  if (restaurants === null) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Restaurants to visit: {restaurants.length}</h1>

      <div className="NewRest-card">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default RestListPage;