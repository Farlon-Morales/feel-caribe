import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config/api";


function AddRestPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRestaurant = {
      name,
      description,
      location,
      url,
    };

    axios.post(`${BASE_URL}/restaurants`, newRestaurant)
      .then(() => navigate("/restaurants"))
      .catch((e) => console.log("Error creating restaurant:", e));
  };

  return (
    <div className="create-restaurant-page">
      <h2>Add New Restaurant</h2>

      <form onSubmit={handleSubmit} className="restaurant-form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label>
          Website URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>

        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
}

export default AddRestPage;