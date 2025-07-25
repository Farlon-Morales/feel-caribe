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

  if (!restaurant) return <Loader />;

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-[#fffbe6] p-8 rounded-xl shadow-md">
      {restaurant.imageUrl && (
        <div className="mb-6 rounded-lg overflow-hidden shadow">
          <img
            src={restaurant.imageUrl}
            alt={`${restaurant.name} banner`}
            className="w-full h-64 object-cover"
          />
        </div>
      )}

      <h1 className="text-3xl font-bold text-teal-700 mb-2">{restaurant.name}</h1>
      <p className="text-gray-700 mb-4">{restaurant.description}</p>

      <p className="text-sm mb-1">
        <span className="font-semibold text-teal-800">Location:</span>{" "}
        {restaurant.location}
      </p>
      <p className="text-sm mb-4">
        <span className="font-semibold text-teal-800">Website:</span>{" "}
        <a
          href={restaurant.url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          {restaurant.url}
        </a>
      </p>

      <div className="flex gap-4 mb-6">
        <Link to="/restaurants">
          <button className="btn bg-teal-600 text-white hover:bg-teal-700 transition px-6">
            Back to Restaurants
          </button>
        </Link>
        <Link to={`/restaurants/${restaurantId}/add-experience`}>
          <button className="btn bg-orange-500 text-white hover:bg-orange-600 transition px-6">
            Add Experience
          </button>
        </Link>
      </div>

      <h2 className="text-xl font-bold text-teal-800 mb-4">Guest Experiences</h2>
      {reviews.length === 0 && <p className="text-gray-600">No experiences yet.</p>}

      <div className="space-y-4">
        {reviews.map((exp) => (
          <div
            key={exp.id}
            className="bg-white p-4 rounded-lg shadow border border-gray-200"
          >
            {editingId === exp.id ? (
              <>
                <textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  rows="3"
                  className="w-full border border-gray-300 rounded-md p-2 mb-3"
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEditSave(exp.id)}
                    className="btn bg-teal-600 text-white hover:bg-teal-700 px-4"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="btn bg-gray-300 text-black hover:bg-gray-400 px-4"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-gray-800 mb-3">{exp.content}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => startEditing(exp.id, exp.content)}
                    className="btn bg-yellow-500 text-white hover:bg-yellow-600 px-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(exp.id)}
                    className="btn bg-red-600 text-white hover:bg-red-700 px-4"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestDetailPage;