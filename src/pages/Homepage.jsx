import About from "../components/About";
import Restaurants from "../components/Restaurants";

function Homepage() {
  return (
    <div className="homepage-box">
      <h1>Welcome to FeelCaribe</h1>

      <section className="about">
        <p>
          Explore and share food experiences from around the world. Add photos,
          thoughts, and stories.
        </p>
        <About />
      </section>

      <section className="restaurants">
        <p>
          Discover top restaurants in Curaçao and read real reviews from fellow food lovers.
        </p>
        <Restaurants />
      </section>
    </div>
  );
}

export default Homepage;