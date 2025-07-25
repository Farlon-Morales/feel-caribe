import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">
      <h3>{restaurant.name}</h3>
      <p>{restaurant.description}</p>

      {restaurant.imageUrl && (
        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="restaurant-image"
        />
      )}

      <Link to={`/restaurants/${restaurant.id}`}>
        <button>See Experiences</button>
      </Link>
    </div>
  );
}

export default RestaurantCard;