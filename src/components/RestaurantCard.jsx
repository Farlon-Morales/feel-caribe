import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card text-center">
      <h3 className="text-lg font-semibold text-teal-800 mb-2">{restaurant.name}</h3>
      <p className="text-sm text-gray-700 mb-3">{restaurant.description}</p>

      {restaurant.imageUrl && (
        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}

      <Link to={`/restaurants/${restaurant.id}`}>
        <button className="btn bg-teal-600 text-white hover:bg-teal-700 w-full transition">
          See Experiences
        </button>
      </Link>
    </div>
  );
}

export default RestaurantCard;