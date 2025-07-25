import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config/api";

function AddRestPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [url, setUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRestaurant = {
      name,
      description,
      location,
      url,
      imageUrl,
    };

    axios
      .post(`${BASE_URL}/restaurants.json`, newRestaurant)
      .then(() => navigate("/restaurants"))
      .catch((e) => console.log("Error creating restaurant:", e));
  };

  return (
    <div className="caribbean-blur-bg min-h-screen py-12">
      <div className="max-w-2xl mx-auto bg-[#fffbe6] p-8 rounded-xl shadow-lg backdrop-blur-sm bg-opacity-90">
        <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">
          Add a Caribbean Restaurant 🌴
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-teal-800 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Restaurant Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input input-bordered w-full bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-teal-800 mb-1">
              Location
            </label>
            <input
              type="text"
              placeholder="Willemstad, Curaçao"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input input-bordered w-full bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-teal-800 mb-1">
              Website
            </label>
            <input
              type="text"
              placeholder="https://..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="input input-bordered w-full bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-teal-800 mb-1">
              Image URL
            </label>
            <input
              type="url"
              placeholder="https://images.unsplash.com/..."
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="input input-bordered w-full bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-teal-800 mb-1">
              Review
            </label>
            <textarea
              placeholder="Tell us about your experience..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="textarea textarea-bordered w-full bg-white"
              rows={4}
            />
          </div>

          <div className="text-center">
            <button className="btn bg-teal-600 text-white hover:bg-teal-700 transition px-8">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRestPage;