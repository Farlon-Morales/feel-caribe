import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";
import ListRestaurants from "./pages/ListRestaurants";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/restaurants" element={<ListRestaurants />} />
      </Routes>
    </Router>
  );
}

export default App;







//
    