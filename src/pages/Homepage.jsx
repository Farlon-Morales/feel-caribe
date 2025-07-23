import About from "../components/About";
import RestaurantList from "../components/RestaurantList";

function Homepage() {
  return (
    <div className="homepage-box">
      <h1>Welcome to the FeelCaribe</h1>

      <section className="about">
        <h2>About</h2>
        <p>
          Explore and share food experiences from around the world. Add photos,
          thoughts, and stories.
        </p>
      </section>

      <hr />
      <About />
      <RestaurantList />
    </div>
  );
}

export default Homepage;