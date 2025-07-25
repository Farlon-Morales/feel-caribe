import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  return (
    <div className="w-72 p-4 border border-gray-300 rounded-lg bg-white shadow text-center">
      <h3 className="text-lg font-semibold mb-2">{restaurant.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{restaurant.description}</p>

      {restaurant.imageUrl && (
        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}

      <Link to={`/restaurants/${restaurant.id}`}>
        <button className="btn btn-primary w-full">See Experiences</button>
      </Link>
    </div>
  );
}

export default RestaurantCard;