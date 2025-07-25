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
      imageUrl: imageUrl, 
    };

    axios
      .post(`${BASE_URL}/restaurants.json`, newRestaurant) // don't forget .json for Firebase
      .then(() => navigate("/restaurants"))
      .catch((e) => console.log("Error creating restaurant:", e));
  };

  return (
    <div className="create-restaurant-box">
      <h2>Add New Restaurant</h2>

      <form onSubmit={handleSubmit} className="restaurant-form">
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              placeholder="Enter Restaurant name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Location:
            <input
              type="text"
              placeholder= "Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Website Link:
            <input
              type="text"
              value={url}
              placeholder="Enter website URL"
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Upload Image URL:
            <input
              type="url"
              value={imageUrl}
              placeholder="e.g. https://... "
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Write review:
            <textarea
              value={description}
              placeholder="Tell us about your experience"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddRestPage;