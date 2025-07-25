import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import { BASE_URL } from "../config/api";
import Loader from "../components/Loader";

function RestDetailPage() {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedContent, setEditedContent] = useState("");

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

  const fetchReviews = () => {
    axios
      .get(`${BASE_URL}/restaurants/${restaurantId}/reviews.json`)
      .then((response) => {
        if (response.data) {
          const reviewsArray = Object.entries(response.data).map(
            ([id, review]) => ({ id, ...review })
          );
          setReviews(reviewsArray);
        } else {
          setReviews([]);
        }
      })
      .catch((error) => console.error("Error fetching reviews:", error));
  };

  useEffect(() => {
    fetchReviews();
  }, [restaurantId]);

  const handleDelete = async (reviewId) => {
    try {
      await axios.delete(
        `${BASE_URL}/restaurants/${restaurantId}/reviews/${reviewId}.json`
      );
      fetchReviews();
    } catch (err) {
      console.error("Error deleting review:", err);
    }
  };

  const startEditing = (id, content) => {
    setEditingId(id);
    setEditedContent(content);
  };

  const handleEditSave = async (reviewId) => {
    try {
      await axios.patch(
        `${BASE_URL}/restaurants/${restaurantId}/reviews/${reviewId}.json`,
        { content: editedContent }
      );
      setEditingId(null);
      setEditedContent("");
      fetchReviews();
    } catch (err) {
      console.error("Error updating review:", err);
    }
  };

  if (!restaurant) {
    return <Loader />;
  }

  return (
    <div>
      {restaurant.imageUrl && (
        <div className="restaurant-banner">
          <img src={restaurant.imageUrl} alt={`${restaurant.name} banner`} />
        </div>
      )}
      <h1>{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      <p>
        Location: {restaurant.location}
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
        <div key={exp.id} className="review">
          {editingId === exp.id ? (
            <>
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                rows="3"
              />
              <button onClick={() => handleEditSave(exp.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <p>{exp.content}</p>
              <button onClick={() => startEditing(exp.id, exp.content)}>Edit</button>
              <button onClick={() => handleDelete(exp.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default RestDetailPage;