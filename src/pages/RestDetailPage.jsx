import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config/api";
import Loader from "../components/Loader";

function RestDetailPage() {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/restaurants/${restaurantId}`)
      .then((response) => {
        setRestaurant(response.data);
      })
      .catch((error) =>
        console.error("Error fetching restaurant details:", error)
      );
  }, [restaurantId]);

  if (!restaurant) {
    return <Loader />;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      <p>Location: {restaurant.location}</p>
      <p>
        Website:{" "}
        <a href={restaurant.url} target="_blank" rel="noreferrer">
          {restaurant.url}
        </a>
      </p>

      <div>
        <Link to="/restaurants">
          <button>Back to Restaurants</button>
        </Link>

        <Link to="/restaurants/create">
          <button>Add New Restaurant</button>
        </Link>
      </div>
    </div>
  );
}

export default RestDetailPage;