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
   const [image, setImage] = useState(null);

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

  const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("review[content]", experience); // ✅ Rails-style
  if (image) {
    formData.append("review[image]", image); // ✅ Rails-style
  }

  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }

  axios
    .post(`${BASE_URL}/restaurants/${restaurantId}/reviews.json`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(() => {
      navigate(`/restaurants/${restaurantId}`);
    })
    .catch((err) => {
      console.error("Error submitting experience:", err);
      alert("Something went wrong.");
    });
};


  if (loading) return <Loader />;
  if (!restaurant) return <p>Restaurant not found.</p>;

  return (
    <div>
      <h2>Share your experience at {restaurant.name}</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          rows="4"
          placeholder="What was it like?"
        />
        <br />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <button type="submit">Submit Experience</button>
      </form>
    </div>
  );
}

export default AddExpPage;