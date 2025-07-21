import { useState } from 'react'
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";
import ListRestaurants from "./pages/ListRestaurants";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Welcome to FeelCaribe</h1>
      <Navbar />
      <Header />
      <Footer />
      <Homepage />
      <ListRestaurants />
      
    </>
  );
}

export default App








//
    