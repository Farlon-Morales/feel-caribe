import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config/api";
import Loader from "../components/Loader";

function AddExpPage() {
  const { restaurantId } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [experience, setExperience] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/restaurants/${restaurantId}.json`)
      .then((res) => {
        setRestaurant(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching restaurant:", err);
        setLoading(false);
      });
  }, [restaurantId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const reviewData = {
        content: experience.trim(),
        timestamp: new Date().toISOString(),
      };

      await axios.post(
        `${BASE_URL}/restaurants/${restaurantId}/reviews.json`,
        reviewData
      );

      navigate(`/restaurants/${restaurantId}`);
    } catch (err) {
      console.error("Error submitting experience:", err);
      alert("Something went wrong.");
    }
  };

  if (loading) return <Loader />;
  if (!restaurant)
    return (
      <div className="caribbean-blur-bg min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Restaurant not found.</p>
      </div>
    );

  return (
    <div className="caribbean-blur-bg min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-[#fffbe6] p-8 rounded-xl shadow-lg backdrop-blur-sm bg-opacity-90">
        <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">
          Share your experience at {restaurant.name}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-teal-800 mb-1">
              Your Experience
            </label>
            <textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              rows="5"
              placeholder="What was it like?"
              className="textarea textarea-bordered w-full bg-white"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={!experience.trim()}
              className="btn bg-teal-600 text-white hover:bg-teal-700 transition px-8"
            >
              Submit Experience
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpPage;