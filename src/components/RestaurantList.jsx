import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../config/api";
import Loader from "./Loader";

function RestListPage() {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    axios.get(BASE_URL + "/restaurants.json")
      .then((response) => {
        const data = response.data;

        if (!data) {
          setRestaurants([]);
          return;
        }
        const restaurantsArray = Object.entries(data).map(([id, rest]) => ({
          id,
          ...rest
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
      <h1>Number of restaurants: {restaurants.length}</h1>

      <div>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>

            <Link to={`/restaurants/${restaurant.id}`}>
              <button>See Experiences</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestListPage;