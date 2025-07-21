import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { BASE_URL } from "../config/api";


function AddExperiencePage() {

  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { restaurantId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExperience = {
      title,
      comment,
      imageUrl,
      restaurantId,
    };

    axios
      .post(`${BASE_URL}/experiences`, newExperience)
      .then(() => {
        navigate(`/restaurants/${restaurantId}`);
      })
      .catch((e) => console.log("Error creating experience:", e));
  };

  return (
    <div className="create-experience-page">
      <h2>Add Your Experience</h2>

      <form onSubmit={handleSubmit} className="experience-form">
        <div className="form-group">
          <label>
            Title:
            <input
              type="text"
              name="title"
              placeholder="Experience title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="form-input"
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Comment:
            <textarea
              name="comment"
              placeholder="Share your thoughts"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              className="form-textarea"
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Image URL:
            <input
              type="text"
              name="imageUrl"
              placeholder="Paste image URL here"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="form-input"
            />
          </label>

          {imageUrl && (
            <div className="image-preview">
              <img src={imageUrl} alt="Preview" className="preview-image" />
            </div>
          )}
        </div>

        <div className="form-buttons">
          <button type="submit">Add Experience</button>
         <Link to={`/restaurants/${restaurant.id}`}>
            <button type="button">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddExperiencePage; 