import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import { BASE_URL } from "../config/api";
import Loader from "../components/Loader";

function RestDetailPage() {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [reviews, setReviews] = useState([]);

  // Fetch restaurant details
  useEffect(() => {
    axios
      .get(`${BASE_URL}/restaurants/${restaurantId}.json`)
      .then((response) => {
        if (response.data) {
          setRestaurant(response.data);
        } else {
          setRestaurant(null);
        }
      })
      .catch((error) =>
        console.error("Error fetching restaurant details:", error)
      );
  }, [restaurantId]);

  // Fetch experiences related to this restaurant
  useEffect(() => {
    axios
      .get(`${BASE_URL}/experiences.json`)
      .then((response) => {
        if (response.data) {
          const experiencesArray = Object.entries(response.data).map(
            ([id, exp]) => ({ id, ...exp })
          );
          const filtered = experiencesArray.filter(
            (exp) => exp.restaurantId === restaurantId
          );
          setReviews(filtered);
        }
      })
      .catch((error) =>
        console.error("Error fetching experiences:", error)
      );
  }, [restaurantId]);

  if (!restaurant) {
    return <Loader />;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      <p>
        Location: {restaurant.location?.city}, {restaurant.location?.country}
      </p>
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

        <Link to={`/restaurants/${restaurantId}/add-experience`}>
          <button>Add Experience</button>
        </Link>
      </div>

      <h2>Guest Experiences</h2>
      {reviews.length === 0 && <p>No experiences yet.</p>}

      {reviews.map((exp) => (
        <div key={exp.id}>
          <h3>{exp.title}</h3>
          <p>{exp.comment}</p>
          {exp.imageUrl && (
            <img
              src={exp.imageUrl}
              alt={exp.title}
              style={{ maxWidth: "300px" }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default RestDetailPage;