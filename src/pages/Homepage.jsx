import { Link } from "react-router-dom";
import About from "../components/About";
import Restaurants from "../components/Restaurants";

function Homepage() {
  return (
    <div className="homepage-box">
     
      <div className="w-full h-[300px] relative overflow-hidden mb-10 rounded-b-xl shadow-md">
        <img
          src="https://www.sandals.com/blog/content/images/2021/04/Curacao-Willemstad-Colorful-Buildings.jpg"
          alt="Willemstad Curacao"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold">
            Welcome to FeelCaribe 🌴
          </h1>
        </div>
      </div>

    
      <section className="about-card p-6 rounded-xl shadow-md mb-6">
        <p className="text-white mb-4">
          Learn more about Caribbean cuisine, community, and the inspiration behind FeelCaribe.
        </p>
        <div className="mt-4">
          <Link to="/restaurants/about">
            <button className="btn bg-white text-teal-700 font-semibold hover:bg-gray-100 transition">
              Learn More About Us
            </button>
          </Link>
        </div>
      </section>

     
      <section className="restaurants-box p-6 rounded-xl shadow-md">
        <p className="text-white mb-4">
          Discover top restaurants in Curaçao and read real reviews from fellow food lovers.
        </p>
        <div className="mt-4">
          <Link to="/restaurants">
            <button className="btn bg-white text-teal-700 font-semibold hover:bg-gray-100 transition">
              See All Restaurants
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
