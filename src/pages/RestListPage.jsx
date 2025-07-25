import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config/api";
import Loader from "../components/Loader";
import RestaurantCard from "../components/RestaurantCard";

function RestListPage() {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    axios
      .get(BASE_URL + "/restaurants.json")
      .then((response) => {
        const data = response.data;
        if (!data) {
          setRestaurants([]);
          return;
        }

        const restaurantsArray = Object.entries(data)
          .map(([id, rest]) => ({ id, ...rest }))
          .reverse();

        setRestaurants(restaurantsArray);
      })
      .catch((e) => console.error("Error fetching restaurants:", e));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/restaurants/${id}.json`);
      setRestaurants((prev) => prev.filter((rest) => rest.id !== id));
    } catch (error) {
      console.error("Error deleting restaurant:", error);
      alert("Failed to delete restaurant.");
    }
  };

  if (restaurants === null) {
    return <Loader />;
  }

  return (
    <div className="caribbean-blur-bg min-h-screen py-12 px-4 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-[#fffbe6] bg-opacity-95 backdrop-blur-md rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-teal-700 text-center mb-8">
          Restaurants to Visit: {restaurants.length}
        </h1>

        <div className="flex flex-wrap gap-6 justify-center">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestListPage;