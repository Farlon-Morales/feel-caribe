import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config/api";

function AddRestPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [url, setUrl] = useState("");
  const [img, setImg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRestaurant = {
      name,
      description,
      location,
      url,
      image: img, 
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
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Upload Image:
            <input
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Tell Us About This Place:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
        </div>

        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
}

export default AddRestPage;