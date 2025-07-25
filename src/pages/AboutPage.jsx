import { NavLink } from "react-router-dom";

function AboutPage() {
  return (
    <div className="about-page-banner">
      <div className="about-page-content">
        <div className="about-page-text">
          <h3>What is FeelCaribe?</h3>
          <p>
            FeelCaribe is a welcoming space dedicated to celebrating the rich and diverse world of Caribbean food. Whether you're a local foodie or a traveler exploring the islands, FeelCaribe helps you discover authentic Caribbean restaurants, share honest reviews, and connect with a vibrant community that loves flavor and culture just as much as you do.
          </p>

          <p>
            Our mission is to highlight the stories behind every bite — from family-run beachside grills in Curaçao to modern fusion kitchens in Jamaica. We believe Caribbean cuisine is more than food; it’s history, soul, and celebration on a plate. With your contributions, we aim to showcase hidden gems and support local businesses that keep tradition alive.
          </p>

          <p>
            Looking ahead, FeelCaribe will grow into a deeper cultural hub — featuring interviews with chefs, food guides, island-by-island highlights, and even travel tips for culinary explorers. As we evolve, one thing will always stay the same: a passion for bringing people together through the flavors of the Caribbean. 🌺🍲✨
          </p>

          <NavLink to="/restaurants/">
            <button className="btn bg-teal-600 text-white hover:bg-teal-700 transition px-6 mt-4">
              See Restaurants
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;